/*k) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10. */

let fatorial = 0

alert("Fatorial dos valores ímpares de 1 a 10.")

for (let valor = 1; valor < 11; valor++) {
    fatorial = 1
    if (valor % 2 !== 0) {
        for (let contadora = 1; contadora <= valor; contadora++) {
            fatorial *= contadora
        }
        alert("O fatorial de " + valor + " é " + fatorial)
    }
}