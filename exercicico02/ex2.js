// Qual o nome do usuário;
// • Qual sua idade;
// • Bairro onde mora;
// • Passe o nome do usuário para todas as letras em maiúscula;
// • Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o
// resultado da soma desses números na tela. 

let nome = prompt(`Qual seu nome?`)
let bairro = prompt(`Qual seu bairro?`)
alert(`${nome.toUpperCase()}`)

let valor1 = Number(prompt(`Digite um valor:`))
let valor2 = Number(prompt(`Digite outro valor:`))
alert(`${valor1 + valor2}`)