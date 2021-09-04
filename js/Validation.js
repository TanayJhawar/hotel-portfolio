function formValidation() {
    var uname = document.registration.username;
    var umob = document.registration.mob;
    var uemail = document.registration.email;
    if (allLetter(uname)) {
        if (allnumeric(umob)) {
            if (ValidateEmail(uemail)) {}
        }
        return false;
    }
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function allnumeric(umob) {
    var numbers = /^[0-9]+$/;
    if (umob.value.match(numbers)) {
        return true;
    } else {
        alert('Mobile number must have numeric characters only');
        umob.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}