// register.js
$(document).ready(function() {
    $("#dangky").click(function() {
        $("#createAccountModal").modal("show");
    });

    // Xử lý form đăng ký
    $("#registerForm").submit(function(e) {
        e.preventDefault();

        if (validateForm()) {
            let firstName = document.getElementById("exampleInputFirstName").value;
            let lastName = document.getElementById("exampleInputLastName").value;
            let email = document.getElementById("exampleInputEmail").value;
            let password = document.getElementById("exampleInputPassword").value;

            // Thêm người dùng vào mảng
            userData.push({ firstName, lastName, email, password });
            localStorage.setItem("userData", JSON.stringify(userData));  // Lưu vào localStorage

            setTimeout(function() {
                $("#createAccountModal").modal("hide");
                location.reload();
            }, 1000);
        }
    });
});

// Hàm kiểm tra tính hợp lệ của form
function validateForm() {
    let firstName = document.getElementById("exampleInputFirstName").value;
    let lastName = document.getElementById("exampleInputLastName").value;
    let email = document.getElementById("exampleInputEmail").value;
    let password = document.getElementById("exampleInputPassword").value;

    let isValid = true;
    clearErrors();

    let nameRegex = /^[A-Z][a-zA-Z]*$/;
    if (!nameRegex.test(firstName)) {
        document.getElementById("firstNameError").innerText = "First name phải bắt đầu bằng chữ in hoa và không chứa số hoặc ký tự đặc biệt.";
        isValid = false;
    }
    if (!nameRegex.test(lastName)) {
        document.getElementById("lastNameError").innerText = "Last name phải bắt đầu bằng chữ in hoa và không chứa số hoặc ký tự đặc biệt.";
        isValid = false;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|edu|org|gov|vn|uk)$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Email không hợp lệ. Vui lòng nhập địa chỉ email có định dạng đúng.";
        isValid = false;
    }

    let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerText = "Password phải chứa ít nhất 8 ký tự, bao gồm một chữ in hoa và một ký tự đặc biệt.";
        isValid = false;
    }

    return isValid;
}
