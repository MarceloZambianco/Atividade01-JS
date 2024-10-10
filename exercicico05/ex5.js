// Utilizando os conceitos apresentados, desenvolva um programa que faça o seguinte:
//  Pergunte ao usuário os valores da primeira prova (N1) e da segunda prova (N2).
//  Calcule a média do aluno.
//  Utilize o operador ternário para informar se o aluno está aprovado ou reprovado,
// considerando que a nota mínima para aprovação é 6.
// Solicita ao usuário os valores da primeira prova (N1) e da segunda prova (N2)

let num1 = Number(prompt("Digite a nota da primeira prova :"));

let num2 = Number(prompt("Digite a nota da segunda prova :"));

let media = (num1 + num2) / 2;
let resultado = media >= 6 ? "Aprovado" : "Reprovado";

alert(`${resultado}`)

