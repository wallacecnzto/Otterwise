/*
7 - Dado um array de números, mostre quantos valores são pares, quantos são
ímpares, quantos são positivos e quantos são negativos.
*/

const arrayOfNumbers = [-5,0,-3,-4,12]
let even = 0
let odd = 0
let positive = 0
let negative = 0

for(i = 0; i < arrayOfNumbers.length; i++){
	if(arrayOfNumbers[i] % 2 === 0){
		even++
		// console.log(even)
	}else if(arrayOfNumbers[i] % 2 !==0){
		odd++
		// console.log(odd)
	}else if(arrayOfNumbers[i] > 0){  // esta com erro aqui!
		positive++
		console.log(positive)
	}else if(arrayOfNumbers[i] < 0){  // esta com erro aqui!!
		negative++
		console.log(negative)
	}
}

console.log(`${even} valor(es) par(es)`)
console.log(`${odd} valor(es) impar(es)`)
console.log(`${positive} valor(es) positivo(s)`)
console.log(`${negative} valor(es) negativo(s)`)

