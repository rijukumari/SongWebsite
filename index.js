let button = document.querySelector("#btn");
let body = document.querySelector("body");
let currentMode = "light";

button.addEventListener("click",()=>{
    if(currentMode =="light"){
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    }else{
        currentMode =="dark"
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }
})

