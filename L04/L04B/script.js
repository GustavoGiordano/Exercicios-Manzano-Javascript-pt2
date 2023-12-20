/*b) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.*/

var contadora = 2
var soma = 0

do {
    if (contadora % 2 == 0){
        soma += contadora
    }
    contadora += 1
} while (contadora < 501)

alert("O somatório dos valores pares existentes na faixa de 1 até 500 é " + soma)