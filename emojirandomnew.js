const emojimg = document.getElementById("emojimg");
const emojiname = document.getElementById("emojiname");
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    async function fetchEmojis(){

        const response = await fetch(`https://emojihub.herokuapp.com/api/random`);
        const data = await response.json();

        emojimg.innerHTML = data.htmlCode[0];
        emojiname.innerText = data.name;
    }

    fetchEmojis();
})