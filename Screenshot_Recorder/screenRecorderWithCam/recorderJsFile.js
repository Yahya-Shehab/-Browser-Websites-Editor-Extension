let localCamStream,
  localScreenStream,
  localOverlayStream,
  rafId,
  cam,
  screenShare,
  mediaRecorder,
  audioContext,
  audioDestination;
(startButton = null),
  (stopButton = null),
  (downloadButton = null),
  (recordedVideo = null),
  (pauseButton = null),
  (resumeButton = null);
let mediaWrapperDiv = document.getElementById("media-area");
let canvasElement = document.createElement("canvas");
let canvasCtx = canvasElement.getContext("2d");
let encoderOptions = {
  mimeType: "video/webm; codecs=vp9",
};
let recordedChunks = [];
let audioTracks = [];

/**
 * Internal Polyfill to simulate
 * window.requestAnimationFrame
 * since the browser will kill canvas
 * drawing when tab is inactive
 */
const requestVideoFrame = function (callback) {
  return window.setTimeout(function () {
    callback(Date.now());
  }, 1000 / 60); // 60 fps - just like requestAnimationFrame
};

/**
 * Internal polyfill to simulate
 * window.cancelAnimationFrame
 */
const cancelVideoFrame = function (id) {
  clearTimeout(id);
};

async function startWebcamFn() {
  localCamStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  if (localCamStream) {
    cam = await createMediaTags("justWebcam", localCamStream);
  }
}

async function startScreenShareFn() {
  let stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });

  let audio = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      sampleRate: 44100,
    },
  });
  if (stream && audio) {
    mixedStream = new MediaStream([
      ...stream.getTracks(),
      ...audio.getTracks(),
    ]);
    localScreenStream = mixedStream;
  }
  if (localScreenStream) {
    screenShare = await createMediaTags("justScreenShare", localScreenStream);
  }
}

async function stopAllStreamsFn() {
  [
    ...(localCamStream ? localCamStream.getTracks() : []),
    ...(localScreenStream ? localScreenStream.getTracks() : []),
    ...(localOverlayStream ? localOverlayStream.getTracks() : []),
  ].map((track) => track.stop());
  localCamStream = null;
  localScreenStream = null;
  localOverlayStream = null;
  cancelVideoFrame(rafId);
  mediaWrapperDiv.innerHTML = "";
}

async function makeComposite() {
  if (cam && screenShare) {
    canvasCtx.save();
    canvasElement.setAttribute("width", `${screenShare.videoWidth}px`);
    canvasElement.setAttribute("height", `${screenShare.videoHeight}px`);
    canvasCtx.clearRect(0, 0, screenShare.videoWidth, screenShare.videoHeight);
    canvasCtx.drawImage(
      screenShare,
      0,
      0,
      screenShare.videoWidth,
      screenShare.videoHeight
    );
    canvasCtx.drawImage(
      cam,
      0,
      Math.floor(screenShare.videoHeight - screenShare.videoHeight / 4),
      Math.floor(screenShare.videoWidth / 4),
      Math.floor(screenShare.videoHeight / 4)
    ); // this is just a rough calculation to offset the webcam stream to bottom left
    console.log(screenShare);
    screenShare.addEventListener("loadeddata", () => {
      console.log(screenShare.videoWidth);
      console.log(screenShare.videoHeight);
    });

    let imageData = canvasCtx.getImageData(
      0,
      0,
      screenShare.width,
      screenShare.height
    ); // this makes it work
    canvasCtx.putImageData(imageData, 0, 0); // properly on safari/webkit browsers too
    canvasCtx.restore();
    rafId = requestVideoFrame(makeComposite);
  }
}

async function mergeStreamsFn() {
  await makeComposite();
  audioContext = new AudioContext();
  audioDestination = audioContext.createMediaStreamDestination();
  let fullVideoStream = canvasElement.captureStream();
  let existingAudioStreams = [
    ...(localCamStream ? localCamStream.getAudioTracks() : []),
    ...(localScreenStream ? localScreenStream.getAudioTracks() : []),
  ];
  audioTracks.push(
    audioContext.createMediaStreamSource(
      new MediaStream([existingAudioStreams[0]])
    )
  );
  if (existingAudioStreams.length > 1) {
    audioTracks.push(
      audioContext.createMediaStreamSource(
        new MediaStream([existingAudioStreams[1]])
      )
    );
  }
  audioTracks.map((track) => track.connect(audioDestination));
  console.log(audioDestination.stream);
  localOverlayStream = new MediaStream([...fullVideoStream.getVideoTracks()]);
  let fullOverlayStream = new MediaStream([
    ...fullVideoStream.getVideoTracks(),
    ...audioDestination.stream.getTracks(),
  ]);
  console.log("sakdlajsdlajs  ", localOverlayStream, existingAudioStreams);
  if (localOverlayStream) {
    overlay = await createMediaTags("pipOverlayStream", localOverlayStream);
    mediaRecorder = new MediaRecorder(fullOverlayStream, encoderOptions);
    mediaRecorder.ondataavailable = handleDataAvailable;
    overlay.volume = 0;
    cam.volume = 0;
    screenShare.volume = 0;
    cam.style.display = "none";
    screenShare.style.display = "none";
  }
}

async function startRecordingFn() {
  startWebcamFn().then(() => {
    startScreenShareFn().then(() => {
      mergeStreamsFn().then(() => {
        mediaRecorder.onstop = handleStop;
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
      });
    });
  });
}

async function createMediaTags(id, stream) {
  let videoElem = document.createElement("video");
  videoElem.id = id;
  videoElem.width = 640;
  videoElem.height = 360;
  videoElem.autoplay = true;
  videoElem.setAttribute("playsinline", true);
  videoElem.srcObject = new MediaStream(stream.getTracks());
  // if (id === "pipOverlayStream") {
  mediaWrapperDiv.appendChild(videoElem);
  videoElem.play();
  // } else if (id === "justScreenShare") {
  //   mediaWrapperDiv.appendChild(videoElem);
  //   videoElem.style.display = "none";
  // }
  return videoElem;
}
function handleStop(e) {
  const blob = new Blob(recordedChunks, { type: "video/mp4" });
  recordedChunks = [];
  downloadButton.href = URL.createObjectURL(blob);
  downloadButton.download = "video.mp4";
  downloadButton.disabled = false;
  recordedVideo.src = URL.createObjectURL(blob);
  recordedVideo.load();
  recordedVideo.onloadeddata = function () {
    const rc = document.querySelector(".recorded-video-wrap");
    rc.classList.remove("hidden");
    rc.scrollIntoView({ behavior: "smooth", block: "start" });
    recordedVideo.play();
  };

  stopAllStreamsFn();

  console.log("Recording stopped");
}
function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
  } else {
  }
}

function stopRecordingFn() {
  mediaRecorder.stop();
  startButton.disabled = false;
  stopButton.disabled = true;
}
function pauseRecording() {
  if (mediaRecorder) {
    mediaRecorder.pause();
    startButton.disabled = true;
    stopButton.disabled = false;
    pauseButton.style.display = "none";
    resumeButton.style.display = "block";
  }
}
function resumeRecording() {
  if (mediaRecorder) {
    mediaRecorder.resume();
    startButton.disabled = true;
    stopButton.disabled = false;
    pauseButton.style.display = "block";
    resumeButton.style.display = "none";
  }
}

window.addEventListener("load", () => {
  startButton = document.querySelector(".start-recording");
  stopButton = document.querySelector(".stop-recording");
  downloadButton = document.querySelector(".download-video");
  recordedVideo = document.querySelector(".recorded-video");
  pauseButton = document.querySelector(".pause-recording");
  resumeButton = document.querySelector(".resume-recording");

  startButton.addEventListener("click", startRecordingFn);
  stopButton.addEventListener("click", stopRecordingFn);
  pauseButton.addEventListener("click", pauseRecording);
  resumeButton.addEventListener("click", resumeRecording);
});
