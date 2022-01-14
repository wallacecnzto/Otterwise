/*
	*3 - [REFATORAÇÃO] Dado um array de números, faça um programa que
imprima na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprima os números negativos, os pares, os ímpares e realize a contagem de
cada um deles.

entrada [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
entrada [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]
	* */

const arrayOfNumbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
const arrayOfNumbers2 = [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]

arrayOfPositives = arrayOfNumbers2.filter((number) => number >= 0)
console.log(arrayOfPositives)

arrayOfNegatives = arrayOfNumbers.filter((number) => number < 0)
console.log(arrayOfNegatives)

arrayOfEven = arrayOfNumbers.filter((number) => number % 2 === 0)
console.log(arrayOfEven)

arrayOfOdd = arrayOfNumbers.filter((number) => number % 2 !== 0)
console.log(arrayOfOdd)
