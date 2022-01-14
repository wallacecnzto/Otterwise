/*
* 2 - Dado um array de números, faça um programa que teste se este array
contém um valor específico. Tanto o valor quanto o array serão valores de
entrada.

entrada [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
9

saida O valor foi encontrado no Array.
* */

const arrayOfNumbers = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
	const value = 9

arrayOfNumbers.some((element) => {
	if(element === value)
	console.log("O valor foi encontrado")
})
