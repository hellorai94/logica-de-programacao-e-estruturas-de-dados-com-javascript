let num = parseInt(prompt("Digite um número de 0 a 6: "));

// switch compara tanto o valor, quanto o tipo e a igualdade
// o que vem da interface gráfica, é string

switch (num) {
    case 0:
        alert("Domingo.\n");
        break;
    case 1:
        alert("Segunda-Feira.\n");
        break;  
    case 2:
        alert("Terça-feira.\n");
        break;
    case 3:
        alert("Quarta-feira.\n");
        break;
    case 4:
        alert("Quinta-feira.\n");
        break;
    case 5:
        alert("Sexta-feira.\n");
        break;
    case 6:
        alert("Sábado.\n");
        break;
    default:
        alert("Digite um número entre 0 e 6.\n");
                 
}