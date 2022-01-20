/*
	* 6 - Dado um array de números, faça um programa que imprima na tela somente
	* os números positivos.
	* */

// let arrayOfNumbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
let arrayOfNumbers = [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]

for(i = 0; i <= arrayOfNumbers.length; i++){
	if(arrayOfNumbers[i] > 0){
		let even = arrayOfNumbers[i]
		console.log(even)
	}
}
