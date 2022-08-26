function store() {
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    // var number = '';
    // var lowerCaseLetter = '';
    // var upperCaseLetter = '';
    var atposition = "@";
    var dotposition = ".";

    if (email.value.length == 0) {
        alert("Please fill in email")
    }
    else if (!email.value.match(atposition)) {
        alert("Please enter '@' in email")
    }
    else if (!email.value.match(dotposition)) {
        alert("Please enter '.' in email")
    }

    else if (pw.value.length == 0) {
        alert("Please fill in password")
    }

    else if (pw.value.length < 8) {
        alert("Password must be at least 8 character long")
    }
    else if (email.value.length == 0 && pw.value.length == 0) {
        alert("Please fill in email & password")
    }
    // else if(!pw.value.match(number)){
    //     alert("Please add atleast one number")
    // }
    // else if(!pw.value.match(upperCaseLetter)){
    //     alert("Please add atleast one Uppercase Letter")
    // }
    // else if(!pw.value.match(lowerCaseLetter)){
    //     alert("Please add atleast one Lowercase Letter")
    // }

    else {
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        alert("Successfully created an account");
    }

}

function check() {
    var checkedEmail = localStorage.getItem('email');
    var checkedPw = localStorage.getItem('pw');

    var userEmail = document.getElementById('useremail');
    var userPw = document.getElementById('userpw');


    if (userEmail.value == checkedEmail && userPw.value == checkedPw) {
        alert("Successfully logged in");
    }
    else {
        alert("Invalid details");
    };
};