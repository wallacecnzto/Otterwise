/*
1. Levando em consideração o array [“joao”, “pedro”, “Gabriel”, “Mari”], retorne um novo array com o seguinte padrão: [{id: 0, name: “joao”}, {id: 1: name: “pedro”}, ...]
*/

let arrayOfNames = ["Joao", "pedro", "Gabriel", "Mari"]

newArray = arrayOfNames.map((user, index) => {
	return {name: user, id: index}
})

