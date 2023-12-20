/*g) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10.*/

var contadora = 1
var fatorial = 0
var contadora1 = 0

do {
    fatorial = 1
    contadora1 = 1
    if (contadora % 2 != 0) {
        do {
            fatorial *= contadora1
            contadora1 += 1
        } while (contadora1 <= contadora);
        alert("O fatorial de " + contadora + " é " + fatorial)
    }
    contadora += 1
} while (contadora < 11);