$(document).ready(function () {
    $("#form").submit(function (event) {
        let f = true;

        //first-name
        let firstName = $("#fname").val();
        if (firstName === "") {
            $(".fname-msg").html("First name is required.");
            f = false;
        } else {
            $(".fname-msg").html("");
        }

        //last-name
        let lastName = $("#lname").val();
        if (lastName === "") {
            $(".lname-msg").html("Last name is required.");
            f = false;
        } else {
            $(".lname-msg").html("");
        }

        //address
        let address = $("#address").val();
        if (address === "") {
            $(".address-msg").html("Address is required.");
            f = false;
        } else {
            $(".address-msg").html("");
        }

        //email
        let email = $("#email").val();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            $(".email-msg").html("Enter a valid email address.");
            f = false;
        } else {
            $(".email-msg").html("");
        }

        //password
        let password = $("#Password").val();
        if (password.length < 6) {
            $(".password-msg").html("Password must be at least 6 characters.");
            f = false;
        } else {
            $(".password-msg").html("");
        }

        //confirm-password
        let confirmPassword = $("#CPassword").val();
        if (confirmPassword !== password) {
            $(".cpassword-msg").html("Passwords do not match.");
            f = false;
        } else {
            $(".cpassword-msg").html("");
        }

        //zipcode
        let zipCode = $("#zipcode").val();
        let zipPattern = /^[0-9]{6}$/;
        if (!zipPattern.test(zipCode)) {
            $(".zipcode-msg").html("Zip code must be 6 digits.");
            f = false;
        } else {
            $(".zipcode-msg").html("");
        }

        //mobile-number
        let mobile = $("#mobile-no").val();
        let mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            $(".mobile-msg").html("Enter a valid 10-digit mobile number.");
            f = false;
        } else {
            $(".mobile-msg").html("");
        }
        if (!f) {
            event.preventDefault();
        }
    });
    //age and dob
    for (let i = 1; i <= 31; i++) {
        $('#day').append(`<option value="${i}">${i}</option>`);
    }

    for (let i = 1; i <= 12; i++) {
        $('#month').append(`<option value="${i}">${i}</option>`);
    }

    let curr_year = new Date().getFullYear();
    for (let i = curr_year; i >= 1900; i--) {
        $('#year').append(`<option value="${i}">${i}</option>`);
    }

    //calculate-dob
    $('#day, #month, #year').change(function () {
        let day = $('#day').val();
        let month = $('#month').val();
        let year = $('#year').val();

        if (day && month && year) {
            let birthDate = new Date(year, month - 1, day);
            let today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();

            if (today.getMonth() < birthDate.getMonth() ||
                (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
                age--;
            }

            $('#age').val(age);
        }
    });
});
