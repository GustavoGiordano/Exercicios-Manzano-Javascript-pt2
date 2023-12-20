/*d) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500. */

let numero = 0

for (let contadora = 0; contadora < 501; contadora += 2) {
    numero += contadora
}

alert("O somatório dos valores pares existentes na faixa de 1 até 500.  " + numero)