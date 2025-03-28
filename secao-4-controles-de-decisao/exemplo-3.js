let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));

let media = (nota1 + nota2) / 2;

if (media > 4 && nota1 != 0 && nota2 != 0) {
    alert("Aprovado!");
} else {
    alert("Reprovado!");
}



