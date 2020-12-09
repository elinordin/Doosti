import recommendations from "./recommendations-data.js";
let menuClicked = false;


//---------------Eventlisteners---------------
document.getElementById("hamburger-menu").addEventListener("click", function(){
    if(menuClicked == false){
        displayMenu();
    } else {
        hideMenu();
    }
});


//-------------------Flow-------------------
printRecommendations(recommendations);


//-------------------Functions-------------------
function printRecommendations(recommendations) {
    recommendations.forEach(recommendation => {
        const cardTemplate = document.querySelector("#card-template").content;
        let templateCopy = document.importNode(cardTemplate,true);
    
        templateCopy.querySelector("img").src = recommendation.img;
        templateCopy.querySelector("img").alt = recommendation.alt;
        templateCopy.querySelector(".last-star").className = recommendation.rating;
        templateCopy.querySelector(".location").textContent = recommendation.location;
        templateCopy.querySelector(".host").textContent = recommendation.host;

        document.querySelector("#card-container").appendChild(templateCopy);
    });
}

function displayMenu() {
    setTimeout(() => {
        document.querySelector(".line1").style.transform = "translateY(10px) rotate(45deg)";
        document.querySelector(".line2").style.opacity = "0";
        document.querySelector(".line3").style.transform = "translateY(-10px) rotate(-45deg)";
    }, 1000);

    document.querySelector(".line1").style.animation = "line1ToCross 1s";
    document.querySelector(".line2").style.animation = "line2ToCross 1s";
    document.querySelector(".line3").style.animation = "line3ToCross 1s";

    document.querySelector("#big-menu").style.display = "inline-block";
    document.querySelector("#big-menu").style.animation = "slideInRight 1s";
    menuClicked = true;
}


function hideMenu() {
    console.log("works");
    setTimeout(() => {
        document.querySelector(".line1").style.transform = "translateY(0px) rotate(0deg)";
        document.querySelector(".line2").style.opacity = "1";
        document.querySelector(".line3").style.transform = "translateY(0px) rotate(0deg)";
    }, 1000);

    document.querySelector(".line1").style.animation = "line1ToHamburger 1s";
    document.querySelector(".line2").style.animation = "line2ToHamburger 1s";
    document.querySelector(".line3").style.animation = "line3ToHamburger 1s";

    setTimeout(() => {
        document.querySelector("#big-menu").style.display = "none";
    }, 1000)
    document.querySelector("#big-menu").style.animation = "slideOutRight 1s";
    menuClicked = false;
}