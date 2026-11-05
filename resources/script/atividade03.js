function verificar() {
    let n1 = Number(document.querySelector("#num1").value);
    let n2 = Number(document.querySelector("#num2").value);

    if (n1 > n2) {
        alert("O maior número é " + n1);
    }
    else if (n2 > n1) {
        alert("O maior número é " + n2);
    }
    else {
        alert("Os números são iguais!");
    }
}