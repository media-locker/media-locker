// script.js
console.log("Media Locker website loaded");
// script.js
const cards = document.querySelectorAll('.card h3 a');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.color = '#0b3d91';
    });
    card.addEventListener('mouseout', () => {
        card.style.color = '#111';
    });
});
function addPost() {

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    let post = {
        title: title,
        content: contentlet category = document.getElementById("category").value;

        let post = {
            title: title,
            content: content,
            category: category
        };
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));

    alert("Post Published!");

}
function loadPosts() {

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    let container = document.getElementById("blogPosts");

    posts.forEach(post => {

        let postHTML = `
        <div class="card">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        </div>
        `;

        container.innerHTML += postHTML;

    });

}

loadPosts();let postHTML = `
<div class="card">
<h3>${post.title}</h3>
<p><strong>Category:</strong> ${post.category}</p>
<p>${post.content}</p>
</div>
`;
function searchPosts() {

    let input = document.getElementById("searchInput").value.toLowerCase();
    let posts = document.querySelectorAll(".card");

    posts.forEach(post => {

        let text = post.innerText.toLowerCase();

        if (text.includes(input)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }

    });

}let headlines = [
"Breaking: Big transfer deal expected this week",
"Premier League title race heating up",
"Media Locker bringing you the latest sports updates",
"Champions League fixtures announced"
];

let ticker = document.getElementById("newsTicker");

if(ticker){

let i = 0;

setInterval(() => {

ticker.textContent = headlines[i];

i++;

if(i >= headlines.length){
i = 0;
}

}, 4000);

}
let featuredStories = [

{
title:"Premier League Title Race Intensifies",
text:"Top teams are battling for the championship this season."
},

{
title:"Champions League Quarterfinals Approaching",
text:"Europe's biggest clubs prepare for crucial matches."
},

{
title:"Transfer Market Rumours Heating Up",
text:"Clubs are planning major signings for the next window."
}

];

let featuredTitle = document.querySelector(".featured-text h2");
let featuredText = document.querySelector(".featured-text p");

if(featuredTitle){

let index = 0;

setInterval(()=>{

featuredTitle.textContent = featuredStories[index].title;
featuredText.textContent = featuredStories[index].text;

index++;

if(index >= featuredStories.length){
index = 0;
}

},5000);

}
function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}
function addComment(){

let name = document.getElementById("username").value;
let comment = document.getElementById("commentText").value;

let commentList = document.getElementById("commentList");

let newComment = document.createElement("p");

newComment.innerHTML = "<strong>" + name + ":</strong> " + comment;

commentList.appendChild(newComment);

}

function subscribe(){

let email = document.getElementById("emailInput").value;

if(email === ""){
alert("Please enter your email");
return;
}

alert("Thank you for subscribing to Media Locker!");

}

let matches = [

{teams:"Manchester United vs Chelsea", score:"2 - 1"},
{teams:"Barcelona vs Real Madrid", score:"1 - 1"},
{teams:"Bayern Munich vs Dortmund", score:"3 - 2"},
{teams:"Arsenal vs Liverpool", score:"0 - 0"}

];

function updateScores(){

let container = document.getElementById("scores");

if(!container) return;

container.innerHTML = "";

matches.forEach(match => {

let div = document.createElement("div");

div.className = "match";

div.innerHTML = "<p>"+match.teams+"</p><strong>"+match.score+"</strong>";

container.appendChild(div);

});

}

setInterval(updateScores,5000);

updateScores();

async function loadSportsNews(){

let url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=2c08a9314d574dffb66154070e7e03b1";

let response = await fetch(url);

let data = await response.json();

let container = document.getElementById("news-container");

if(!container) return;

container.innerHTML = "";

data.articles.slice(0,5).forEach(article => {

let div = document.createElement("div");

div.className = "news-item";

div.innerHTML = `
<a href="${article.url}" target="_blank">${article.title}</a>
<p>${article.source.name}</p>
`;

container.appendChild(div);

});

}

loadSportsNews();