/*f) Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
média.*/

var valor = 0
var soma = 0
var media = 0
var lidos = 0

do {
    valor = parseFloat(prompt("Insira um valor: "))
    if (valor >= 0) {
        soma += valor
        lidos += 1
    }
} while (valor >= 0);

if (lidos > 0) {
    media = soma / lidos
    alert("O total do somatório dos valores lidos é: " + soma + "\nA média aritmética é: " + media + "\nO total de valores lidos é: " + lidos)
} else {
    alert("Nenhum valor positivo foi inserido.")
}