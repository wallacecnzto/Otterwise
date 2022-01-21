/*
* 1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999.
* Use essa informação para gerar os CEP’s dentro dessa faixa.
*/

const min = 29000000
const max = 29099999
let result = 0

const getRandomCep = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	result = Math.floor(Math.random() * (max - min)) + min

	return result
}

console.log(getRandomCep(min, max))



