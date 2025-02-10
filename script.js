
let header = document.querySelector(".header");
let container = document.getElementsByClassName("container");
let jokeContent = document.getElementsByClassName("joke-content");
let setupContent = document.getElementById("setup-text");
let punchlineContent = document.getElementById("punchline-text");
let btn = document.getElementById("joke-btn");

async function joke() {
    setupContent.innerText = "";
    punchlineContent.innerText = "";
    setupContent.classList.add("font");
    punchlineContent.classList.add("font");
    let response = await fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart");
    let data = await response.json();

    setupContent.innerText = data.setup;
    punchlineContent.innerText = "Soch le bhai 5 seconds hai...."
    setTimeout(() => {
        punchlineContent.innerText = data.delivery;
    }, 5000);
}

btn.addEventListener("click", joke);

