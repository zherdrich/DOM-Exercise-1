


const main = () => {
    document.querySelector("#grow-me").classList.add("big");

    document.querySelector("#shrink-me").classList.remove("big");

    const lis = document.querySelector("ol").querySelectorAll("li");
    for (let i = 0; i <= lis.length; i++) {
        console.log(lis[i]);
    }

    const el = document.querySelector(".link");
    el.setAttribute("href", "https://www.example.com");
    el.innerText = "somewhere";

    const hideme = document.querySelector("#hide-me").style.display = "none";
    const showme = document.querySelector("#show-me").style.display = "block";
    
    const input = document.querySelector("#name").value;
    const output = document.querySelector("h1");
    output.textContent = `Welcome ${input}!`;
}


