let userData = JSON.parse(localStorage.getItem("userData")) || []; 
function clearErrors() {
    $(".error-message").text("");
    $("#loginMessage").text(""); 
}
$(document).ready(function() {
    $("#dangnhap").click(function() {
        $("#loginModal").modal("show");
    });
    $("#loginForm").submit(function(e) {
        e.preventDefault();
        clearErrors();
        let email = document.getElementById("exampleInputEmail1").value;
        let password = document.getElementById("exampleInputPassword1").value;
        let isValid = true;
        
        if (isValid) {
            let userExists = userData.some(user => user.email === email && user.password === password);

            if (userExists) {
                $("#loginMessage").text("Đăng nhập thành công!").removeClass("text-danger").addClass("text-success");
            } else {
                $("#loginMessage").text("Đăng nhập không thành công. Tài khoản chưa được đăng ký. Vui lòng đăng ký tài khoản.").removeClass("text-success").addClass("text-danger");
            }
        }
    });
});
