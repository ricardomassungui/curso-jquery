let filaClientes: Array<string> = [
    "ricardo", 
    "ana",
    "sebastião",
    "sanda",
];

function proximoAtendimento(fila: Array<string>): String {
    return fila[0];
}
console.log(proximoAtendimento(filaClientes));