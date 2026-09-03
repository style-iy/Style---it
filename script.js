// ========================================
// STYLE-IT
// Main JavaScript
// ========================================


// ----------------------------------------
// 1. START STYLE ANALYSIS
// ----------------------------------------

function startStyleAnalysis() {

    alert(
        "Style Analysis is coming next!\n\n" +
        "You will soon be able to create your personal style profile."
    );

}


// ----------------------------------------
// 2. EXPLORE FASHION BUTTON
// ----------------------------------------

const exploreButton = document.querySelector(".secondary-button");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        document.querySelector(".categories").scrollIntoView({
            behavior: "smooth"
        });

    });

}


// ----------------------------------------
// 3. CATEGORY CARDS
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
// 4. WELCOME MESSAGE
// ----------------------------------------

console.log("STYLE-IT website loaded successfully.");


// ----------------------------------------
// 5. FUTURE STYLE PROFILE
// ----------------------------------------

const styleProfile = {

    height: null,

    faceShape: null,

    bodyShape: null,

    stylePreference: null,

    budget: null,

    favoriteColors: [],

    recommendedHairstyles: [],

    recommendedClothing: [],

    recommendedFootwear: [],

    recommendedAccessories: []

};


// ----------------------------------------
// 6. FUTURE OUTFIT SYSTEM
// ----------------------------------------

function createOutfit() {

    console.log("Outfit recommendation system will be added here.");

}


// ----------------------------------------
// 7. FUTURE PRODUCT SEARCH
// ----------------------------------------

function searchProducts(searchTerm) {

    console.log(
        "Searching products for:",
        searchTerm
    );

}


// ----------------------------------------
// 8. FUTURE COMPLETE MY LOOK
// ----------------------------------------

function completeMyLook(product) {

    console.log(
        "Creating a complete outfit around:",
        product
    );

}


// ----------------------------------------
// STYLE-IT READY
// ----------------------------------------

console.log("Style-it recommendation system initialized.");
