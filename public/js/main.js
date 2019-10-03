// Check @ sign in email
function checkEmail () {

    var emailBox = document.getElementById("email");
    var email = emailBox.value;

    for (var i = 0; i < email.length;i++) {

    var code = email.charCodeAt(i);

    if (code == 64) {
        //Contains @ sign
        emailBox.style.borderColor = "green";
        return

        } else {
        //Does not contain @ sign
        emailBox.style.borderColor = "red";
        }
    }
}

// Check if password is at least 8 characters long
function checkPassword () {
    var passwordBox = document.getElementById("password");
    var password = passwordBox.value;
    
        if (password.length < 8) {
            //Email too short.
            passwordBox.style.borderColor = "red";
        
        } else {
            //Email long enough
            passwordBox.style.borderColor = "green";
        }
    
}

// Check if confirmed password is the same as the one typed
function checkConfirm () {
    var confirmBox = document.getElementById("confirm");
    var confirm = confirmBox.value;
    
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    // alert (password.value+" "+confirm.value)
        if (password.value != confirm.value) {
            //Password is different
            confirmBox.style.borderColor = "red";
            
            } else {
            //Password is same
            confirmBox.style.borderColor = "green";
            }
}

// ScrollFire
function scroll () {
    var t = window.scrollY;
    var sunglasses = document.getElementById("sunglasses");

        if (t > 2800) {
            sunglasses.style.transform = "scale(2,2)";
        }
}


