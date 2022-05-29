var beverageOrder = [0, 0, 0, 0, 0];
var itemsOrdered = 0;

var beverageName = [
  "• Boba Milk Tea - Rp 22000",
  "• Thai Tea - Rp 17000",
  "• Lemon Tea - Rp 16000",
  "• Coffee Latte - Rp 25000",
  "• Black Coffee - Rp 18000"
];

var beveragePrice = [22000, 17000, 16000, 25000, 18000];

var dessertOrder = [0, 0, 0, 0, 0];

var dessertName = [
  "• Chocolate Cake - Rp 45000",
  "• Red Velvet Cake - Rp 52000",
  "• Classic Cheesecake - Rp 42000",
  "• Chocolate Chip Cookies - Rp 30000",
  "• Almond Cookies - Rp 30000"
];

var orders = [];

var total = 0;

var dessertPrice = [45000, 52000, 42000, 30000, 30000];

function decrease1() {
  if (beverageOrder[0] >= 1) {
    beverageOrder[0] = beverageOrder[0] - 1;
    document.getElementById("ind1").innerHTML = beverageOrder[0];
    var find = orders.indexOf(beverageName[0]);
    orders.splice(find, 1);
    total -= beveragePrice[0];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase1() {
  beverageOrder[0] = beverageOrder[0] + 1;
  document.getElementById("ind1").innerHTML = beverageOrder[0];
  orders.push(beverageName[0]);
  total += beveragePrice[0];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

function decrease2() {
  if (beverageOrder[1] >= 1) {
    beverageOrder[1] = beverageOrder[1] - 1;
    document.getElementById("ind2").innerHTML = beverageOrder[1];
    var find = orders.indexOf(beverageName[1]);
    orders.splice(find, 1);
    total -= beveragePrice[1];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase2() {
  beverageOrder[1] = beverageOrder[1] + 1;
  document.getElementById("ind2").innerHTML = beverageOrder[1];
  orders.push(beverageName[1]);
  total += beveragePrice[1];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

function decrease3() {
  if (beverageOrder[2] >= 1) {
    beverageOrder[2] = beverageOrder[2] - 1;
    document.getElementById("ind3").innerHTML = beverageOrder[2];
    var find = orders.indexOf(beverageName[2]);
    orders.splice(find, 1);
    total -= beveragePrice[2];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase3() {
  beverageOrder[2] = beverageOrder[2] + 1;
  document.getElementById("ind3").innerHTML = beverageOrder[2];
  orders.push(beverageName[2]);
  total += beveragePrice[2];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

function decrease4() {
  if (beverageOrder[3] >= 1) {
    beverageOrder[3] = beverageOrder[3] - 1;
    document.getElementById("ind4").innerHTML = beverageOrder[3];
    var find = orders.indexOf(beverageName[3]);
    orders.splice(find, 1);
    total -= beveragePrice[3];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase4() {
  beverageOrder[3] = beverageOrder[3] + 1;
  document.getElementById("ind4").innerHTML = beverageOrder[3];
  orders.push(beverageName[3]);
  total += beveragePrice[3];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

function decrease5() {
  if (beverageOrder[4] >= 1) {
    beverageOrder[4] = beverageOrder[4] - 1;
    document.getElementById("ind5").innerHTML = beverageOrder[4];
    var find = orders.indexOf(beverageName[4]);
    orders.splice(find, 1);
    total -= beveragePrice[4];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase5() {
  beverageOrder[4] = beverageOrder[4] + 1;
  document.getElementById("ind5").innerHTML = beverageOrder[4];
  orders.push(beverageName[4]);
  total += beveragePrice[4];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

///DESSERTS///

function decrease6() {
  if (dessertOrder[0] >= 1) {
    dessertOrder[0] = dessertOrder[0] - 1;
    document.getElementById("ind6").innerHTML = dessertOrder[0];
    var find = orders.indexOf(dessertName[0]);
    orders.splice(find, 1);
    total -= dessertPrice[0];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase6() {
  dessertOrder[0] = dessertOrder[0] + 1;
  document.getElementById("ind6").innerHTML = dessertOrder[0];
  orders.push(dessertName[0]);
  total += dessertPrice[0];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

function decrease7() {
  if (dessertOrder[1] >= 1) {
    dessertOrder[1] = dessertOrder[1] - 1;
    document.getElementById("ind7").innerHTML = dessertOrder[1];
    var find = orders.indexOf(dessertName[1]);
    orders.splice(find, 1);
    total -= dessertPrice[1];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase7() {
  dessertOrder[1] = dessertOrder[1] + 1;
  document.getElementById("ind7").innerHTML = dessertOrder[1];
  orders.push(dessertName[1]);
  total += dessertPrice[1];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

function decrease8() {
  if (dessertOrder[2] >= 1) {
    dessertOrder[2] = dessertOrder[2] - 1;
    document.getElementById("ind8").innerHTML = dessertOrder[2];
    var find = orders.indexOf(dessertName[2]);
    orders.splice(find, 1);
    total -= dessertPrice[2];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase8() {
  dessertOrder[2] = dessertOrder[2] + 1;
  document.getElementById("ind8").innerHTML = dessertOrder[2];
  orders.push(dessertName[2]);
  total += dessertPrice[2];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

function decrease9() {
  if (dessertOrder[3] >= 1) {
    dessertOrder[3] = dessertOrder[3] - 1;
    document.getElementById("ind9").innerHTML = dessertOrder[3];
    var find = orders.indexOf(dessertName[3]);
    orders.splice(find, 1);
    total -= dessertPrice[3];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase9() {
  dessertOrder[3] = dessertOrder[3] + 1;
  document.getElementById("ind9").innerHTML = dessertOrder[3];
  orders.push(dessertName[3]);
  total += dessertPrice[3];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

function decrease10() {
  if (dessertOrder[4] >= 1) {
    dessertOrder[4] = dessertOrder[4] - 1;
    document.getElementById("ind10").innerHTML = dessertOrder[4];
    var find = orders.indexOf(dessertName[4]);
    orders.splice(find, 1);
    total -= dessertPrice[4];
    itemsOrdered--;
    document.getElementById("items-ordered").innerHTML =
      itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
  }
}

function increase10() {
  dessertOrder[4] = dessertOrder[4] + 1;
  document.getElementById("ind10").innerHTML = dessertOrder[4];
  orders.push(dessertName[4]);
  total += dessertPrice[4];
  itemsOrdered++;
  document.getElementById("items-ordered").innerHTML =
    itemsOrdered.toString() + " items ordered | (Rp " + total + " in total)";
}

var popup = document.getElementById("pop-up");
var cartbtn = document.getElementById("cart-btn");
var closeButton = document.getElementsByClassName("close-pop-up")[0];

cartbtn.onclick = function () {
  popup.style.display = "block";
  orders.sort();
  document.getElementById("order-ind").innerHTML =
    "You have ordered " + itemsOrdered + " item(s).";
  if (itemsOrdered === 0) {
    document.getElementById("order-info").innerHTML =
      "You haven't ordered anything yet.";
  }
  for (var i = 0; i < itemsOrdered; ++i) {
    document.getElementById("order-info").innerHTML = orders.join("<br>");
  }
  document.getElementById("subtotal-info").innerHTML = "Subtotal: Rp " + total;
};

closeButton.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function orderPlaced() {
  var checkedRadioVISA = document.getElementById("payment-visa");
  var checkedRadioPAYPAL = document.getElementById("payment-paypal");
  var hasIssue = false;

  var personName = document.getElementById("person-name");
  var personEmail = document.getElementById("person-email");
  var personCity = document.getElementById("person-city");
  var personAddress = document.getElementById("person-address");
  var visaNumber = document.getElementById("fill-card");
  var visas = document.getElementById("date-card");
  var visaDate = visas;
  var paypalEmail = document.getElementById("fill-paypal");

  if (itemsOrdered <= 0) {
    alert("Your cart is empty.");
    hasIssue = true;
  } else if (personName.value.length <= 0) {
    alert("Please enter your name.");
    hasIssue = true;
  } else if (reg.test(personEmail.value) === false) {
    alert("Please enter a valid email address.");
    hasIssue = true;
  } else if (personCity.value.length <= 0) {
    alert("Please enter your city name.");
    hasIssue = true;
  } else if (personAddress.value.length <= 0) {
    alert("Please enter your address.");
    hasIssue = true;
  } else if (
    checkedRadioVISA.checked === false &&
    checkedRadioPAYPAL.checked === false
  ) {
    alert("Please select the payment method.");
    hasIssue = true;
  } else if (checkedRadioVISA.checked === true) {
    if (visaNumber.value.length !== 19) {
      alert("Please enter a valid VISA card number.");
      hasIssue = true;
    } else if (
      (visaDate.value.charAt(0) !== "0" &&
        visaDate.value.charAt(0) !== "1" &&
        visaDate.value.charAt(0) !== "2" &&
        visaDate.value.charAt(0) !== "3" &&
        visaDate.value.charAt(0) !== "4" &&
        visaDate.value.charAt(0) !== "5" &&
        visaDate.value.charAt(0) !== "6" &&
        visaDate.value.charAt(0) !== "7" &&
        visaDate.value.charAt(0) !== "8" &&
        visaDate.value.charAt(0) !== "9") ||
      (visaDate.value.charAt(1) !== "0" &&
        visaDate.value.charAt(1) !== "1" &&
        visaDate.value.charAt(1) !== "2" &&
        visaDate.value.charAt(1) !== "3" &&
        visaDate.value.charAt(1) !== "4" &&
        visaDate.value.charAt(1) !== "5" &&
        visaDate.value.charAt(1) !== "6" &&
        visaDate.value.charAt(1) !== "7" &&
        visaDate.value.charAt(1) !== "8" &&
        visaDate.value.charAt(1) !== "9" &&
        visaDate.value.charAt(2) !== "/") ||
      (visaDate.value.charAt(0) !== "0" &&
        visaDate.value.charAt(0) !== "1" &&
        visaDate.value.charAt(3) !== "2" &&
        visaDate.value.charAt(3) !== "3" &&
        visaDate.value.charAt(3) !== "4" &&
        visaDate.value.charAt(3) !== "5" &&
        visaDate.value.charAt(3) !== "6" &&
        visaDate.value.charAt(3) !== "7" &&
        visaDate.value.charAt(3) !== "8" &&
        visaDate.value.charAt(3) !== "9") ||
      (visaDate.value.charAt(4) !== "0" &&
        visaDate.value.charAt(4) !== "1" &&
        visaDate.value.charAt(4) !== "2" &&
        visaDate.value.charAt(4) !== "3" &&
        visaDate.value.charAt(4) !== "4" &&
        visaDate.value.charAt(4) !== "5" &&
        visaDate.value.charAt(4) !== "6" &&
        visaDate.value.charAt(4) !== "7" &&
        visaDate.value.charAt(4) !== "8" &&
        visaDate.value.charAt(4) !== "9") ||
      (visaDate.value.charAt(5) !== "0" &&
        visaDate.value.charAt(5) !== "1" &&
        visaDate.value.charAt(5) !== "2" &&
        visaDate.value.charAt(5) !== "3" &&
        visaDate.value.charAt(5) !== "4" &&
        visaDate.value.charAt(5) !== "5" &&
        visaDate.value.charAt(5) !== "6" &&
        visaDate.value.charAt(5) !== "7" &&
        visaDate.value.charAt(5) !== "8" &&
        visaDate.value.charAt(5) !== "9") ||
      (visaDate.value.charAt(6) !== "0" &&
        visaDate.value.charAt(6) !== "1" &&
        visaDate.value.charAt(6) !== "2" &&
        visaDate.value.charAt(6) !== "3" &&
        visaDate.value.charAt(6) !== "4" &&
        visaDate.value.charAt(6) !== "5" &&
        visaDate.value.charAt(6) !== "6" &&
        visaDate.value.charAt(6) !== "7" &&
        visaDate.value.charAt(6) !== "8" &&
        visaDate.value.charAt(6) !== "9")
    ) {
      alert("Please enter a valid expiration date. Format: mm/yyyy");
      hasIssue = true;
    }
  } else if (checkedRadioPAYPAL.checked === true) {
    if (reg.test(paypalEmail.value) === false) {
      alert("Please enter a valid PayPal email address.");
      hasIssue = true;
    }
  }
  if (hasIssue === false) {
    alert("Your order has been successfully placed.");
    location.reload();
  }
}
