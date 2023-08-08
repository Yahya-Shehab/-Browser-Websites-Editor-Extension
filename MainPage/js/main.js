const darkThemeBtn = document.getElementById("dark-theme");
const translatorBtn = document.getElementById("translator");
const colorPickerBtn = document.getElementById("color-picker");
const styleChangerBtn = document.getElementById("style-changer");
const screenshotAndRecorderBtn = document.getElementById("screenshot-recorder");

darkThemeBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ message: "darkTheme" }, function (response) {});
});
colorPickerBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage(
    { message: "colorPicker" },
    function (response) {}
  );
});
screenshotAndRecorderBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage(
    { message: "screenshotAndRecorder" },
    function (response) {}
  );
});
translatorBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage({ message: "translator" }, function (response) {});
});
styleChangerBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage(
    { message: "styleChanger" },
    function (response) {}
  );
});
