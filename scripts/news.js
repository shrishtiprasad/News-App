// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar;

// let showNews = document.getElementById("detailed_news");

// showNews.innerHTML = JSON.parse(localStorage.getItem("news"));

let localData = JSON.parse(localStorage.getItem("news"));

let appendIt = (elem) => {

    let showNews = document.getElementById("detailed_news");
    showNews.innerHTML = null;

    elem.forEach(function(elem){

        let box = document.createElement("div");
        box.setAttribute("class", "news");
        box.addEventListener("click", function(){
            storeNews(elem);
        });

        let img = document.createElement("img");
        img.src = elem.urlToImage;
        img.setAttribute("id", "coverImg");

        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", "innerDiv");

        let headline = document.createElement("h3");
        headline.innerText = elem.title;

        let desc = document.createElement("p");
        desc.innerText = elem.description;

        innerDiv.append(headline, desc);
        box.append(img, innerDiv);
        showNews.append(box);
    })
}

appendIt();
