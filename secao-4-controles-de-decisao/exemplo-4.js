let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));

if (nota1 > 10 || nota2 > 10) {
    alert("Digite um valor menor que 10.");
} else {
    let media = (nota1 + nota2) / 2;
    if (media > 4 && nota1 != 0 && nota2 != 0) {
        alert("Aprovado!");
    } else {
        alert("Reprovado!");
    }
};




