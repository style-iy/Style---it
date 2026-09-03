// ========================================
// STYLE-IT
// Main JavaScript
// ========================================


// ----------------------------------------
// STYLE PROFILE DATA
// ----------------------------------------

let styleProfile = {
    gender: "",
    height: "",
    style: "",
    budget: "",
    facePhoto: null,
    bodyPhoto: null
};


// ----------------------------------------
// HOMEPAGE — START STYLE ANALYSIS
// ----------------------------------------

function startStyleAnalysis() {
    window.location.href = "analysis.html";
}


// ----------------------------------------
// HOMEPAGE — EXPLORE FASHION
// ----------------------------------------

const exploreButton = document.querySelector(".secondary-button");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        const categories = document.querySelector(".categories");

        if (categories) {
            categories.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

}


// ----------------------------------------
// CATEGORY CARDS
// ----------------------------------------

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const categoryName =
            card.querySelector("h3").textContent;

        alert(
            "You selected: " +
            categoryName +
            "\n\nThe shopping section will be connected here."
        );

    });

});


// ----------------------------------------
// SELECT STYLE
// ----------------------------------------

function selectStyle(button, styleName) {

    // Remove selected state from all style buttons
    const buttons =
        document.querySelectorAll(".style-options button");

    buttons.forEach(function (btn) {
        btn.classList.remove("selected");
    });


    // Select clicked button
    button.classList.add("selected");


    // Save selected style
    styleProfile.style = styleName;

}


// ----------------------------------------
// ANALYZE STYLE
// ----------------------------------------

function analyzeStyle() {

    const gender =
        document.getElementById("gender").value;

    const height =
        document.getElementById("height").value;

    const budget =
        document.getElementById("budget").value;

    const facePhoto =
        document.getElementById("facePhoto").files[0];

    const bodyPhoto =
        document.getElementById("bodyPhoto").files[0];


    // Check basic information

    if (!gender) {
        alert("Please select your fashion preference.");
        return;
    }


    if (!height) {
        alert("Please enter your height.");
        return;
    }


    if (!styleProfile.style) {
        alert("Please select at least one style.");
        return;
    }


    if (!budget) {
        alert("Please select your budget.");
        return;
    }


    // Save information

    styleProfile.gender = gender;
    styleProfile.height = height;
    styleProfile.budget = budget;
    styleProfile.facePhoto = facePhoto
        ? facePhoto.name
        : null;

    styleProfile.bodyPhoto = bodyPhoto
        ? bodyPhoto.name
        : null;


    // Save profile in browser

    localStorage.setItem(
        "styleProfile",
        JSON.stringify(styleProfile)
    );


    // Move to results page

    window.location.href = "results.html";

}


// ----------------------------------------
// CONSOLE MESSAGE
// ----------------------------------------

console.log("Style-it is running.");
