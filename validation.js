function validateForm() {
    var x = document.getElementById("fname").value;
    var y = document.getElementById("uname").value;
    var z = document.getElementById("pass").value;
    var w = document.getElementById("Cp").value;
    var r = true;
    var a1 = /^[A-Za-z]+$/;
    var a2 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  
    // validate name is letter only
    if (!(x.match(a1))) {
      document.getElementById("m1").innerHTML = "* only letter is allowed";
      document.getElementById("fname").style.borderColor = 'red';
      r = false;
    } else {
      document.getElementById("m1").innerHTML = "";
      document.getElementById("fname").style.borderColor = 'black';
    }
 // validate user name not empty
 if (y == "" || y == " ") {
    document.getElementById("m2").innerHTML = "* username must be filled out ";
    document.getElementById("uname").style.borderColor = 'red';
    r = false;
  } else {
    document.getElementById("m2").innerHTML = "";
    document.getElementById("uname").style.borderColor = 'black';
  }

// validate empty password
if (z == "") {
  document.getElementById("m3").innerHTML = "* Password must be filled out";
  document.getElementById("pass").style.borderColor = 'red';
  r = false;
}
 // validate Should not be the same as user-name
 else if (z == y) {
    document.getElementById("m3").innerHTML = "* Should not be the same as user-name";
    document.getElementById("pass").style.borderColor = 'red';
    r = false;}
// validate length password
else if (!(z.length >= 6 && z.length <= 10)) {
  document.getElementById("m3").innerHTML = "* Password should be 6-10 length";
  document.getElementById("pass").style.borderColor = 'red';
  r = false;
}
// validate At least one small letter and one capital letter and one digit
else if (!(z.match(a2))) {
    document.getElementById("m3").innerHTML = "* Your password should have at least one small letter, one capital letter, and one digit";
    document.getElementById("pass").style.borderColor = 'red';
    r = false;
  }
 
   else {
    document.getElementById("m3").innerHTML = "";
    document.getElementById("pass").style.borderColor = 'black';
  }
 // Confirm Password should equal to password
 if (w != z) {
    document.getElementById("m4").innerHTML = "* Your passwords do not match";
    document.getElementById("Cp").style.borderColor = 'red';
    r = false;
  } else {
    document.getElementById("m4").innerHTML = "";
    document.getElementById("Cp").style.borderColor = 'black';
 }

return r;
}