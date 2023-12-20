/*e) Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
total do somatório da fatorial de cada valor lido. */

var contadora = 1
var valor = 0
var soma = 0
var fatorial = 0
var contadora1 = 0

do {
    valor = parseInt(prompt(contadora + ". Digite um valor para saber seu fatorial: "))
    fatorial = 1
    contadora1 = 1
    do {
        fatorial *= contadora1
        contadora1 += 1
    } while (contadora1 <= valor);
    soma += fatorial
    contadora += 1
} while (contadora < 16);

alert("O total do somatório da fatorial de cada valor lido é " + soma)
