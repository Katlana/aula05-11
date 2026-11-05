let darkButton = document.querySelector
("button");
let body = document.querySelector("body")
darkButton.addEventListener ("click", ()=>{
if (body.classList.contains("dark")){
    body.classList.remove("dark")
} else {
    body.classList.add ("dark")
}
})