/*c) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). */

let numero = 0

for (let contadora = 1; contadora < 101; contadora++) {
    numero += contadora
}

alert("O total da soma obtida dos cem primeiros números inteiros é " + numero)