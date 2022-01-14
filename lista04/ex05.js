/*
	*5 - Escreva um programa para substituir os elementos pares pelo valor “X”.

	entrada [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
	saida [1, -7, -23, “X”, -19, 13, “X”, “X”, “X”, -153, -127]
	* */

const arrayOfNumbers = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]


const newArray = arrayOfNumbers.map((number) => {
	if(number % 2 === 0) {
	number = "X"
	}
})

console.log(newArray)
