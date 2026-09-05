// ========================================
// STYLE-IT
// Main JavaScript
// ========================================

let styleProfile = {
    gender: "",
    height: "",
    style: "",
    budget: "",
    facePhoto: null,
    bodyPhoto: null
};


// ========================================
// HOMEPAGE
// ========================================

function startStyleAnalysis() {
    window.location.href = "analysis.html";
}


// ========================================
// EXPLORE FASHION
// ========================================

const exploreButton =
    document.querySelector(".secondary-button");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        const categories =
            document.querySelector(".categories");

        if (categories) {

            categories.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ========================================
// CATEGORY CARDS
// ========================================

const categoryCards =
    document.querySelectorAll(".category-card");

categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const categoryName =
            card.querySelector("h3").textContent;

        alert(
            "You selected: " +
            categoryName +
            "\n\nShopping will be connected here."
        );

    });

});


// ========================================
// SELECT STYLE
// ========================================

function selectStyle(button, styleName) {

    const buttons =
        document.querySelectorAll(
            ".style-options button"
        );

    buttons.forEach(function (btn) {

        btn.classList.remove("selected");

    });

    button.classList.add("selected");

    styleProfile.style = styleName;
}


// ========================================
// ANALYZE STYLE
// ========================================

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


    if (!gender) {

        alert(
            "Please select your fashion preference."
        );

        return;
    }


    if (!height) {

        alert(
            "Please enter your height."
        );

        return;
    }


    if (!styleProfile.style) {

        alert(
            "Please select a style."
        );

        return;
    }


    if (!budget) {

        alert(
            "Please select your budget."
        );

        return;
    }


    styleProfile.gender = gender;
    styleProfile.height = height;
    styleProfile.budget = budget;

    styleProfile.facePhoto =
        facePhoto ? facePhoto.name : null;

    styleProfile.bodyPhoto =
        bodyPhoto ? bodyPhoto.name : null;


    localStorage.setItem(
        "styleProfile",
        JSON.stringify(styleProfile)
    );


    window.location.href = "results.html";
}


// ========================================
// RESULTS PAGE
// ========================================

function loadResults() {

    const savedProfile =
        localStorage.getItem("styleProfile");

    if (!savedProfile) {
        return;
    }


    const profile =
        JSON.parse(savedProfile);


    const genderElement =
        document.getElementById("resultGender");

    const heightElement =
        document.getElementById("resultHeight");

    const styleElement =
        document.getElementById("resultStyle");

    const budgetElement =
        document.getElementById("resultBudget");


    if (genderElement) {

        if (profile.gender === "men") {

            genderElement.textContent =
                "Men's fashion";

        } else if (profile.gender === "women") {

            genderElement.textContent =
                "Women's fashion";

        } else {

            genderElement.textContent =
                "Unisex";

        }

    }


    if (heightElement) {

        heightElement.textContent =
            profile.height + " cm";

    }


    if (styleElement) {

        styleElement.textContent =
            profile.style;

    }


    if (budgetElement) {

        const budgetNames = {

            "under500": "Under ₹500",

            "500-1000":
                "₹500 – ₹1,000",

            "1000-2000":
                "₹1,000 – ₹2,000",

            "2000-5000":
                "₹2,000 – ₹5,000",

            "5000+":
                "₹5,000+"

        };


        budgetElement.textContent =
            budgetNames[profile.budget] ||
            profile.budget;

    }

}


// ========================================
// SHOP — FILTER PRODUCTS
// ========================================

function filterProducts(category, button) {

    const products =
        document.querySelectorAll(".product-card");

    const filterButtons =
        document.querySelectorAll(".shop-filters .filter");


    // Remove active from all buttons

    filterButtons.forEach(function (btn) {

        btn.classList.remove("active");

    });


    // Make clicked button active

    if (button) {

        button.classList.add("active");

    }


    // Show / hide products

    products.forEach(function (product) {

        const productCategory =
            product.dataset.category;


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });


    // Clear search when changing category

    const search =
        document.getElementById("productSearch");

    if (search) {

        search.value = "";

    }

}


// ========================================
// SHOP — SEARCH PRODUCTS
// ========================================

const productSearch =
    document.getElementById("productSearch");


if (productSearch) {

    productSearch.addEventListener(
        "input",
        function () {

            const searchText =
                productSearch.value
                .toLowerCase()
                .trim();


            const products =
                document.querySelectorAll(
                    ".product-card"
                );


            products.forEach(function (product) {

                const productName =
                    product.dataset.name
                    .toLowerCase();


                const productCategory =
                    product.dataset.category
                    .toLowerCase();


                if (
                    productName.includes(searchText) ||
                    productCategory.includes(searchText)
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });


            // Remove active category
            // when searching

            if (searchText !== "") {

                document
                    .querySelectorAll(
                        ".shop-filters .filter"
                    )
                    .forEach(function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    });

            }

        }
    );

}


// ========================================
// SHOP — VIEW PRODUCT
// ========================================

function viewProduct(productName) {
    const productLinks = {
        "Black Oversized T-Shirt": "https://www2.hm.com/en_in/productpage.1294399002.html",
        "Black Bootcut Jeans": "https://dieselindia.com/product/black-bootcut-jeans-1969-d-ebbey-15223718"
    };

    if (productLinks[productName]) {
        window.open(productLinks[productName], "_blank");
    }
}


// ========================================
// COMPLETE MY LOOK
// ========================================

function completeMyLook() {

    alert(
        "Complete My Look is the next major feature we will build."
    );

}


// ========================================
// RUN RESULTS
// ========================================

loadResults();


// ========================================
// WEBSITE LOADED
// ========================================

console.log(
    "Style-it is running successfully."
);
