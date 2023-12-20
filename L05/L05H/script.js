/*h) Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE
, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^). */

let base = parseFloat(prompt("Insira o valor da base"))
let expoente01 = parseFloat(prompt("Insira o valor do expoente"))
let potencia = 1

for (let expoente = 0; expoente < (expoente01 + 1); expoente++) {
    alert(base + " ^ " + expoente + " = " + potencia)
    potencia *= base
}
