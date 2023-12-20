/*j) Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. */

var quociente = 0
var dividendo1 = 0

var dividendo = parseFloat(prompt("Insira um dividendo: "))
var divisor = parseFloat(prompt("Insira um divisor: "))

do {
    dividendo1 = divisor * quociente
    quociente += 1
} while (dividendo1 < dividendo);

alert("O quociente é " + (quociente - 1))