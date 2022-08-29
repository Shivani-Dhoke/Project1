function store() {
    let name = document.getElementById('name')
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let atposition = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let passPosition = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(name.value.length === 0){
        alert("Please fill in name")
    }
    else if (email.value.length === 0) {
        alert("Please fill in email")
    }
    else if (!email.value.match(atposition)) {
        alert("Please enter correct email, eg.,abc@gmail.com")
    }

    else if (password.value.length === 0) {
        alert("Please fill in password")
    }
    else if (!password.value.match(passPosition)) {
        alert("Please enter strong password, eg.,Pq8#12rs")
    }
    else {
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        alert("Successfully created an account");
    }

};

function check() {
    var checkedEmail = localStorage.getItem('email');
    var checkedPassword = localStorage.getItem('password');

    var userEmail = document.getElementById('useremail');
    var userPassword = document.getElementById('userpassword');


    if (userEmail.value === checkedEmail && userPassword.value === checkedPassword) {
        alert("Successfully logged in");
    }
    else {
        alert("Invalid details");
    };
};