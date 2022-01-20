const value = 333;

decomposingValue = (value) => {
	console.log(value)
	banknotesOf100 = value / 100
	rest = value % 100

	banknotesOf50 = rest / 50
	rest = rest % 50

	banknotesOf20 = rest / 20
	rest = rest % 20

	banknotesOf10 = rest / 10
	rest = rest % 10

	banknotesOf5 = rest / 5
	rest = rest % 5

	banknotesOf1 = rest / 1
	rest = rest % 1

	console.log(`${Math.floor(banknotesOf100)} nota(s) de 100,00`)
	console.log(`${Math.floor(banknotesOf50)} nota(s) de 50,00`)
	console.log(`${Math.floor(banknotesOf20)} nota(s) de 20,00`)
	console.log(`${Math.floor(banknotesOf10)} nota(s) de 10,00`)
	console.log(`${Math.floor(banknotesOf5)} nota(s) de 5,00`)
	console.log(`${Math.floor(banknotesOf1)} nota(s) de 1,00`)
}

console.log(totalBanknotes(value))
