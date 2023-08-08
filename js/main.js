const signInBtn = document.querySelector(".sign-in-btn");
signInBtn.addEventListener("click", openDialogToSignIn);
function openDialogToSignIn() {
  chrome.runtime.sendMessage({ message: "login" }, function (response) {
    if (response === "success") window.close();
  });
}
