let word = document.querySelector(".word");
let btn = document.getElementById("sound-btn");
let phonetics = document.getElementsByClassName("phonetics");
let definition = document.getElementsByClassName("definition");
let searchBtn = document.getElementById("search-btn");
let exp = document.querySelector(".example");
let main = document.querySelector(".main");

async function define() {
    let inputSearch = document.getElementById("input-search").value; 
    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputSearch}`);
        
        let data = await response.json();
        console.log(data); 

        word.innerHTML = data[0].word;

        phonetics[0].innerHTML = data[0].phonetics[0].text;

        if (!((data[0].phonetics[0].audio))){
            alert("sorry for not having audio");
        }
        let audio = new Audio(data[0].phonetics[0].audio);
        btn.onclick = () => audio.play();
        
        definition[0].textContent = data[0].meanings[0].definitions[0].definition || "No definition available.";
        
        
        if (!(data[0].meanings[0].definitions[0].example)){
            console.log("not present");
            exp.classList.add("none");
        }
        else{
            exp.classList.remove("none");
            exp.innerHTML = data[0].meanings[0].definitions[0].example;
        }

        main.classList.add("active");
    } catch (error) {
        alert(error.message); 
    }
}

// async function define() {
//     let inputSearch = document.getElementById("input-search").value; 
//     try {
//         let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputSearch}`);
        
//         let data = await response.json();
//         console.log(data); 

//         main.innerHTML = `<div class="header">
//             <label for="word" class="word">${data[0].word}</label>
//             <button id="sound-btn"><img src="sound_8121329.gif" alt="Pronounce"></img></button>
//             <p class="phonetics">${data[0].phonetics[0].text}</p>
//         </div><p class="definition">${data[0].meanings[0].definitions[0].definition || "No definition available."}</p><p class="example"></p>`

//         main.classList.add("active");
//     } catch (error) {
//         alert(error.message); 
//     }
// }


searchBtn.addEventListener("click", define);