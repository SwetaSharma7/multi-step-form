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

// nextBtn.addEventListener("click", (e) => {
//     let sec;
//     let nextSec;
//     let prevSec;
//     for (let i = 1; i <= 4; i++) {
//         const sect = document.querySelector(`.section${i}`);
//         const dist = window.getComputedStyle(sect).display;
//         if (dist !== "none") {
//             sec = sect;
//             if (i < 4) {
//                 nextSec = document.querySelector(`.section${i + 1}`);
//                 prevSec = document.querySelector(`.section${i - 1}`);
//             }
//             break;
//         }
//     }

//     if(nextSec) {
//         sec.style.display = "none";
//         nextSec.style.display = "block";
//     }
//     if(prevSec) {
//         sec.style.display = "none";
//         prevSec.style.display = "block";
//     }
// });

//  --- logic for both Next Step and Go BAck button---

nextBtn.addEventListener("click", (e) => {
    let sec;
    let nextSec;
    for (let i = 1; i <= 4; i++) {
        const sect = document.querySelector(`.section${i}`);
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
    }
});

prevBtn.addEventListener("click", (e) => {
    let sec;
    let prevSec;
    for (let i = 1; i <= 4; i++) {
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
    }
});

// ---logic for adding border and everything while selecting plans---

const allCard = document.querySelector('.cards');

const arcade = document.querySelector('.')
