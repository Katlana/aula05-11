let form = document.querySelector("form")
let inputNome = document.querySelector("#nome")
let inputNum1 = document.querySelector("#num1")
let inputNum2 = document.querySelector("#num2")
let inputNum3 = document.querySelector("#num3")
let p = document.querySelector("p")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let nome = inputNome.value
    let nota1 = Number(inputNum1.value)
    let nota2 = Number(inputNum2.value)
    let nota3 = Number(inputNum3.value)
    let media = (nota1 + nota2 + nota3) / 3
    if (media >= 7) {
        p.innerText = "O aluno " + nome + " foi aprovado com média " + media.toFixed(2)
    } else {
        p.innerText = "O aluno " + nome + " foi reprovado com média " + media.toFixed(2)
    }
})