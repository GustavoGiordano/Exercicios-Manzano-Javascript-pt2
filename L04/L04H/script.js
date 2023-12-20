/*h) Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
total acumulado da área residencial. */

var nome
var largura = 0
var comprimento = 0
var area = 0
var areaTotal = 0
var continuar = true
var resposta

do {
    nome = prompt("Insira o nome do cômodo")
    largura = parseFloat(prompt("Insira a largura do cômodo"))
    comprimento = parseFloat(prompt("Insira o comprimento do cômodo"))

    area = largura * comprimento
    areaTotal += area

    resposta = prompt("Deseja continuar calculando outros cômodos? SIM ou NÃO?").toUpperCase()

    while (resposta !== "SIM" && resposta !== "NÃO") {
        resposta = prompt("Insira uma resposta válida (SIM ou NÃO).").toUpperCase()
    }

    if (resposta === "NÃO") {
        continuar = false
    }
} while (continuar);

alert("A área total é de " + areaTotal + " metros quadrados.")