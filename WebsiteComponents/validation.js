var checkedRadioVISA = document.getElementById("payment-visa");
var formVISA = document.getElementById("payment-form-visa");

var checkedRadioPAYPAL = document.getElementById("payment-paypal");
var formPAYPAL = document.getElementById("payment-form-paypal");

function hideAndShowVISA() {
  formVISA.style.display = checkedRadioVISA.checked ? "block" : "none";
  formPAYPAL.style.display = checkedRadioPAYPAL.checked ? "block" : "none";
}

function hideAndShowPAYPAL() {
  formVISA.style.display = checkedRadioVISA.checked ? "block" : "none";
  formPAYPAL.style.display = checkedRadioPAYPAL.checked ? "block" : "none";
}

var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function submitForm() {
  var firstName = document.getElementById("namefirst");
  var lastName = document.getElementById("namelast");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var hasProblem = false;

  if (firstName.value.length <= 0) {
    alert("Please enter your first name.");
    hasProblem = true;
  } else if (lastName.value.length <= 0) {
    alert("Please enter your last name.");
    hasProblem = true;
  } else if (reg.test(email.value) === false) {
    alert("Please enter a valid email address.");
    hasProblem = true;
  } else if (subject.value.length <= 0) {
    alert("Please enter the subject you want to send.");
    hasProblem = true;
  }

  if (hasProblem === false) {
    alert(
      "Your message has been sent. Thank you for contacting us, we will reply soon."
    );
    location.reload();
  }
}
