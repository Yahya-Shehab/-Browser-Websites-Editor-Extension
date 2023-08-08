document.getElementById("screenshot").onclick = function () {
  document.getElementById("screenshot-extension").style.display = "flex";
  document.getElementById("recorder-extension").style.display = "none";
  document.getElementById("screenshot").style.backgroundColor = "#231773";
  document.getElementById("recorder").style.backgroundColor = "#4b50bf";
  document.getElementById("sc-icon").style.color = "white";
  document.getElementById("re-icon").style.color = "black";
};

document.getElementById("recorder").onclick = function () {
  document.getElementById("screenshot-extension").style.display = "none";
  document.getElementById("recorder-extension").style.display = "block";
  document.getElementById("recorder").style.backgroundColor = "#231773";
  document.getElementById("screenshot").style.backgroundColor = "#4b50bf";
  document.getElementById("sc-icon").style.color = "black";
  document.getElementById("re-icon").style.color = "white";
};

document.getElementById("visible-part").onclick = function () {
  document.getElementById("visible-part").style.backgroundColor = "#231773";
  document.getElementById("visible-part").style.opacity = 1;
  document.getElementById("vi-icon").style.color = "white";
};

let startRecordingWithoutMicBtn = document.querySelector(".record-without-mic");
let startRecordingWithoutCamBtn = document.querySelector(".record-with-mic");
let startRecordingWithCamBtn = document.querySelector(".record-with-camera");
let screenShotBtn = document.getElementById("visible-part");
let screenshotSelectedPartBtn = document.getElementById("Selected-area");

startRecordingWithoutCamBtn.addEventListener(
  "click",
  openRecordingWithoutCamUI
);
startRecordingWithCamBtn.addEventListener("click", openRecordingWithCamUI);
startRecordingWithoutMicBtn.addEventListener(
  "click",
  openRecordingWithoutMicUI
);

screenShotBtn.addEventListener("click", takeScreenShot);
screenshotSelectedPartBtn.addEventListener(
  "click",
  takeAScreenshotToSelectedArea
);

//record-with-camera
function openRecordingWithoutCamUI(event) {
  chrome.windows.create({
    url: "/Screenshot_Recorder/screenRecorderWithoutCamFiles/recorder.html",
    type: "popup",
    height: 700,
    width: 1000,
  });
}

function openRecordingWithCamUI(event) {
  chrome.windows.create({
    url: "/Screenshot_Recorder/screenRecorderWithCam/recorder.html",
    type: "popup",
    height: 700,
    width: 1000,
  });
}
function openRecordingWithoutMicUI(event) {
  chrome.windows.create({
    url: "/Screenshot_Recorder/screenRecorderWithoutMic/recorder.html",
    type: "popup",
    height: 700,
    width: 1000,
  });
}
let tab;
chrome.tabs.query({ active: true, currentWindow: true }, ([t]) => {
  tab = t;
});
function takeScreenShot() {
  chrome.tabs.captureVisibleTab((dataUrl) => {
    chrome.downloads.download(
      {
        filename: `${tab.title}.png`,
        url: dataUrl,
        saveAs: true,
      },
      () => {
        const lastError = chrome.runtime.lastError;
        if (lastError) {
          chrome.downloads.download(
            {
              url: dataUrl,
              filename:
                tab.title.replace(
                  /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,
                  "-"
                ) + ".png",
            },
            () => {
              const lastError = chrome.runtime.lastError;
              if (lastError) {
                chrome.downloads.download({
                  url: dataUrl,
                  filename: "image.png",
                });
              }
            }
          );
        }
      }
    );
  });
}
function takeAScreenshotToSelectedArea() {
  chrome.runtime.sendMessage({
    message: "popup",
    tab: {
      id: tab.id,
      title: tab.title,
      windowId: tab.windowId,
    },
  });
}

//back button
const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage(
    {
      message: "back",
    },
    (response) => {}
  );
});
