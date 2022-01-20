/*
	*9 - Dado um array de números como entrada, faça um programa que
	multiplique todos os valores por 10.
	* */

const arrayOfNumbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
let mult = 0

for(i = 0; i < arrayOfNumbers.length; i++){
	mult = arrayOfNumbers[i] * 10
	console.log(mult)
}

