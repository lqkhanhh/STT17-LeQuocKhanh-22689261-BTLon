function togglePassword(inputId, iconId) {
    var passwordInput = document.getElementById(inputId);
    var eyeIcon = document.getElementById(iconId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "../IMAGES/modal/eyeClose.png";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "../IMAGES/modal/eyeOpen.png";
    }
}
window.togglePassword = togglePassword;
