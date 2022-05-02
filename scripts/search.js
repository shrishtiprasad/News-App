// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar;

// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let getData = async () => {

    try{

        let query = document.getElementById("search_input").value = "twitter" || "tesla";

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);

        let data = await res.json();

        console.log("data:", data);

        append(data.articles);
    }
    catch(err){
        console.log("err:", err);
    }
}

getData();

let newsArr = [];

let append = (data) => {

    let results = document.getElementById("results");

    data.forEach(function(elem){

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
        results.append(box);
    })
}

function storeNews(elem){

    newsArr.push(elem);
    localStorage.setItem("news", JSON.stringify(newsArr));
    window.location.href = "./news.html";

}
