/*b) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */

const numero = parseFloat(prompt("Insira um número: "))

for (let contadora = 1; contadora < 11; contadora++) {
    let resultado = numero * contadora
    alert(numero + " x " + contadora + " = " + resultado)
}