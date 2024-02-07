function togglePrices() {
    var monthlyPrices = document.querySelectorAll(".monthly");
    var yearlyPrices = document.querySelectorAll(".yearly");
    var checkbox = document.getElementById("check");

    if(checkbox.checked) {
        monthlyPrices.forEach(function(price) {
            price.style.display = "block";
            price.style.color = "gray";
        });

        yearlyPrices.forEach(function(price) {
            price.style.display = "none"
        });
    }else {
        monthlyPrices.forEach(function(price) {
            price.style.display = "none";
        });

        yearlyPrices.forEach(function(price) {
            price.style.display = "block";
            price.style.color = "grey";
        });
    };
};


const nextBtn = document.querySelector('.footer-btn');
const prevBtn = document.querySelector('.goBack'); 
let currentSectionIndex = 1;

//  --- logic for both Next Step and Go BAck button---

nextBtn.addEventListener("click", (e) => {
    let sec;
    let nextSec;
    for (let i = 1; i <= 4; i++) {
        const sect = document.querySelector(`.section${i}`);
        // console.log(sect);
        const dist = window.getComputedStyle(sect).display;
        if (dist !== "none") {
            sec = sect;
            if (i < 4) {
                nextSec = document.querySelector(`.section${i + 1}`);
            }
            break;
        }
    }

    if (nextSec) {
        sec.style.display = "none";
        nextSec.style.display = "block";
    currentSectionIndex++;
    updateButtonStyle(currentSectionIndex);
    updateIndicatorBackground(currentSectionIndex);
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
        sec.style.display = "none";
        prevSec.style.display = "block";
        currentSectionIndex--;
        updateButtonStyle(currentSectionIndex);
        updateIndicatorBackground(currentSectionIndex);
    }
});

// ----logic to change indicator color acc to section---

function updateButtonStyle(currentIndex) {
    const buttons = document.querySelectorAll('.btn div');
    buttons.forEach(button => {
        button.style.color = "var(--Light-blue)"; 
    });
    const activeButton = document.getElementById(`btn${currentIndex}`);
    if (activeButton) {
        activeButton.style.color = "var(--Marine-blue)"; 
    }
}

function updateIndicatorBackground(currentIndex) { 
    const buttons = document.querySelectorAll('.btn div');
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    });
    const activeButton = document.getElementById(`btn${currentIndex}`);
    if(activeButton) {
        activeButton.style.backgroundColor = "var(--Light-blue)";
    }
}

// ---logic for adding border and everything while selecting plans---

const selected = document.querySelector('.cards');

selected.addEventListener("click", (e) => {
    const target = e.target;

    const arcade = document.querySelector(".card1");
    const advanced = document.querySelector(".card2");
    const pro = document.querySelector(".card3");

    // Reset styles for all options
    arcade.style.borderColor = "";
    arcade.style.backgroundColor = "";
    advanced.style.borderColor = "";
    advanced.style.backgroundColor = "";
    pro.style.borderColor = "";
    pro.style.backgroundColor = "";

    if(target.matches(".card1")){
        arcade.style.borderColor = "hsl(213, 89%, 11%";
        arcade.style.backgroundColor = "var(--Light-blue)"; 
    }else if(target.matches(".card2")){
        advanced.style.borderColor = "hsl(213, 89%, 11%";
        advanced.style.backgroundColor = "var(--Light-blue)";
    }else if(target.matches(".card3")){
        pro.style.borderColor = "hsl(213, 89%, 11%";
        pro.style.backgroundColor = "var(--Light-blue)";
    }
});

// -----Logic for selecting multiple checkbox----

const selectp = document.querySelector(".cardAddOn");
selectp.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(".card-addOn1 input:checked")) {
        target.parentElement.style.borderColor = "var(--Marine-blue)";
        target.parentElement.style.backgroundColor = "var(--Light-blue)";
    } else if (target.matches(".card-addOn2 input:checked")) {
        target.parentElement.style.borderColor = "var(--Marine-blue)";
        target.parentElement.style.backgroundColor = "var(--Light-blue)";
    } else if (target.matches(".card-addOn3 input:checked")) {
        target.parentElement.style.borderColor = "var(--Marine-blue)";
        target.parentElement.style.backgroundColor = "var(--Light-blue)";
    }
});

// upper thing can be done by this also
    // const online=document.querySelector('.card-addOn1')
    // if(target.matches('#checkId1')){
    //    online.style.borderColor='blue';
    // }
      

    




