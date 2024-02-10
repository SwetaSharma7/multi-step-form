function togglePrices() {
  var monthlyPrices = document.querySelectorAll(".monthly");
  var yearlyPrices = document.querySelectorAll(".yearly");
  var checkbox = document.getElementById("check");

  if (checkbox.checked) {
    monthlyPrices.forEach(function (price) {
      price.style.display = "block";
      price.style.color = "grey";
    });

    yearlyPrices.forEach(function (price) {
      price.style.display = "none";
    });
  } else {
    monthlyPrices.forEach(function (price) {
      price.style.display = "none";
    });

    yearlyPrices.forEach(function (price) {
      price.style.display = "block";
      price.style.color = "grey";
    });
  }
}

const nextBtn = document.querySelector(".footer-btn");
const prevBtn = document.querySelector(".goBack");
const confirmBtn = document.querySelector(".confirmBtn");
let currentSectionIndex = 1;

//  --- logic for both Next Step and Go BAck button---

nextBtn.addEventListener("click", (e) => {
  let sec;
  let nextSec;

  for (let i = 1; i <= 5; i++) {
    const sect = document.querySelector(`.section${i}`);
    const dist = window.getComputedStyle(sect).display;
    if (i == 1) {
      let somethimfg = validForm();
      if (!somethimfg) {
        break;
      }
    }

    //---- On section 4 button will disappear----
    if (i == 4) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
    }

    if (dist !== "none") {
      sec = sect;
      if (i < 5) {
        nextSec = document.querySelector(`.section${i + 1}`);
      }
      break;
    }
  }

  if (sec.className === "section1" || sec.className === "section2" || sec.className === "section3") {
    prevBtn.style.visibility = "visible";
  }

  if (sec.className === "section3") {
    nextBtn.textContent = "Confirm";
    nextBtn.style.backgroundColor = "blue";
  }

  if (nextSec) {
    sec.style.display = "none";
    nextSec.style.display = "block";
    currentSectionIndex++;
    updateButtonStyle(currentSectionIndex);
    updateIndicatorBackground(currentSectionIndex);
  }

  // ----Logic for changing monthlly and yearly plan for section-3 if next button is clicked----

  const checkbox = document.getElementById("check");
  const month = document.querySelectorAll(".mon");
  const year = document.querySelectorAll(".yr");

  if (checkbox.checked) {
    // If checkbox is checked, display year and hide month
    for (let i = 0; i < month.length; i++) {
      month[i].style.display = "none";
    }
    for (let i = 0; i < year.length; i++) {
      year[i].style.display = "block";
    }
  } else {
    // If checkbox is not checked, display month and hide year
    for (let i = 0; i < month.length; i++) {
      month[i].style.display = "block";
    }
    for (let i = 0; i < year.length; i++) {
      year[i].style.display = "none";
    }
  }

  // ----logic for required fields (section-1)----

  function validForm() {
    //  Get references to the input fields and error message labels
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");

    // Validate if the required fields are filled
    let isValid = true;
    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }
    if (emailInput.value.trim() === "") {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
    if (phoneInput.value.trim() === "") {
      phoneError.style.display = "block";
      isValid = false;
    } else {
      phoneError.style.display = "none";
    }

    return isValid;
  }
});

prevBtn.addEventListener("click", (e) => {
  let sec;
  let prevSec;
  for (let i = 1; i <= 5; i++) {
    const sect = document.querySelector(`.section${i}`);
    const dist = window.getComputedStyle(sect).display;
    if (dist !== "none") {
      sec = sect;
      if (i > 1) {
        prevSec = document.querySelector(`.section${i - 1}`);
      }
      break;
    }
  }

  if (prevSec) {
    if (prevSec.className === "section1") {
      prevBtn.style.visibility = "hidden";
    }

    if (prevSec.className !== "section4") {
      nextBtn.textContent = "Next Step";
      nextBtn.style.backgroundColor = "var(--Marine-blue)";
    }

    sec.style.display = "none";
    prevSec.style.display = "block";
    currentSectionIndex--;
    updateButtonStyle(currentSectionIndex);
    updateIndicatorBackground(currentSectionIndex);
  }
});

// ----logic to change indicator color acc to section---

function updateButtonStyle(currentIndex) {
  const buttons = document.querySelectorAll(".btn div");
  buttons.forEach((button) => {
    button.style.color = "var(--Light-blue)";
  });
  const activeButton = document.getElementById(`btn${currentIndex}`);
  if (activeButton) {
    activeButton.style.color = "var(--Marine-blue)";
  }
}

function updateIndicatorBackground(currentIndex) {
  const buttons = document.querySelectorAll(".btn div");
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
  const activeButton = document.getElementById(`btn${currentIndex}`);
  if (activeButton) {
    activeButton.style.backgroundColor = "var(--Light-blue)";
  }
}

// ---logic for adding border and everything while selecting plans---
const totalPrice = document.querySelector(".total-price");

const selected = document.querySelector(".cards");
let section2Price = 0;

selected.addEventListener("click", (e) => {
  const target = e.target;

  const arcade = document.querySelector(".card1");
  const advanced = document.querySelector(".card2");
  const pro = document.querySelector(".card3");

  let checkbox = document.getElementById("check");

  const headingName = document.querySelector(".heading h5");
  const headingPrice = document.querySelector(".heading p");
  const heading = document.querySelector(".heading");
  const part2 = document.querySelector(".part2");

  // Reset styles for all options
  arcade.style.borderColor = "";
  arcade.style.backgroundColor = "";
  advanced.style.borderColor = "";
  advanced.style.backgroundColor = "";
  pro.style.borderColor = "";
  pro.style.backgroundColor = "";

  if (target.matches(".card1")) {
    arcade.style.borderColor = "hsl(213, 89%, 11%";
    arcade.style.backgroundColor = "var(--Light-blue)";

    if (checkbox.checked) {
      headingName.textContent = "Arcade";
      headingPrice.textContent = "$90/yr";
      section2Price = 90;
    } else {
      headingName.textContent = "Arcade";
      headingPrice.textContent = "$9/mo";
      section2Price = 9;
    }
    heading.style.display = "block";
    part2.style.display = "flex";
  } else if (target.matches(".card2")) {
    advanced.style.borderColor = "hsl(213, 89%, 11%";
    advanced.style.backgroundColor = "var(--Light-blue)";

    if (checkbox.checked) {
      headingName.textContent = "Advanced";
      headingPrice.textContent = "$120/yr";
      section2Price = 120;
    } else {
      headingName.textContent = "Advanced";
      headingPrice.textContent = "$12/mo";
      section2Price = 12;
    }
    heading.style.display = "block";
    part2.style.display = "flex";
  } else if (target.matches(".card3")) {
    pro.style.borderColor = "hsl(213, 89%, 11%";
    pro.style.backgroundColor = "var(--Light-blue)";

    if (checkbox.checked) {
      headingName.textContent = "Pro";
      headingPrice.textContent = "$150/yr";
      section2Price = 150;
    } else {
      headingName.textContent = "Pro";
      headingPrice.textContent = "$15/mo";
      section2Price = 15;
    }
    heading.style.display = "block";
    part2.style.display = "flex";
  }
});

// -----Logic for selecting multiple checkbox----

const selectp = document.querySelector(".cardAddOn");
let section3Price = 0;
let checkbox = document.getElementById("check");

const onlineH = document.querySelector(".online");
const onlineP = document.querySelector(".online p");
const large = document.querySelector(".larger");
const largeP = document.querySelector(".larger p");
const customizable = document.querySelector(".customizable");
const customizableP = document.querySelector(".customizable p");

selectp.addEventListener("click", (e) => {
  const target = e.target;
  const online = document.querySelector(".card-addOn1");
  if (target.matches("#checkId1")) {
    toogleColor(online);

    if (checkbox.checked) {
      onlineP.textContent = "+$10/yr";
      section3Price += 10;
    } else {
      onlineP.textContent = "+$1/mo";
      section3Price += 1;
    }
    onlineH.style.display = "block";
  }
  const storage = document.querySelector(".card-addOn2");
  if (target.matches("#checkId2")) {
    toogleColor(storage);

    if (checkbox.checked) {
      largeP.textContent = "+$20/yr";
      section3Price += 20;
    } else {
      largeP.textContent = "+$2/mo";
      section3Price += 2;
    }
    large.style.display = "block";
  }
  const profile = document.querySelector(".card-addOn3");
  if (target.matches("#checkId3")) {
    toogleColor(profile);
    if (checkbox.checked) {
      customizableP.textContent = "+$20/yr";
      section3Price += 20;
    } else {
      customizableP.textContent = "+$2/mo";
      section3Price += 2;
    }
    customizable.style.display = "block";
  }
  if (checkbox.checked) {
    totalPrice.textContent = `$${section2Price + section3Price}/yr`;
  } else {
    totalPrice.textContent = `$${section2Price + section3Price}/mo`;
  }
});

function toogleColor(changing) {
  if (changing.style.borderColor == "") {
    changing.style.borderColor = "var(--Marine-blue)";
    changing.style.backgroundColor = "var(--Light-blue)";
  } else {
    changing.style.borderColor = "";
    changing.style.backgroundColor = "";
  }
}
