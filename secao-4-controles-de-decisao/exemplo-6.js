let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));

// se a nota foi maior que 0 e até 10
// se a media for maior que 4
// se o numero nao for um nan
// começar 

if (isNaN(nota1) || isNaN(nota2)) {
    alert("Digite apenas números.");
} else if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    alert("Digite somente números entre 0 e 10.");
} else {
    let media = (nota1 + nota2) / 2;
    if (media > 4) {
        alert("Aprovado!");
    } else {
        alert("Reprovado!");
    }
};


