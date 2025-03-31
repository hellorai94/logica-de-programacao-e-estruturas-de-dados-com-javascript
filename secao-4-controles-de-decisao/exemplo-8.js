let valor = null;

switch (typeof(valor)) {
    case "string":
        alert("string.\n");
        break;
    case "number":
        alert("number.\n");
        break;
    case "boolean":
        alert("boolean.\n");
        break;
    default:
        alert("Não conheço esse tipo de variável.\n");
}