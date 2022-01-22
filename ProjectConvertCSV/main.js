import fs from "fs"

let csv = fs.readFileSync("./lista.csv", "utf8")

let csvJSON = (csv) => {
	let lines = csv.split("\n")
	let result = []
	let headers = lines[0].split(",")

	lines.map((line, indexline) => {
		if (indexline < 1) return
		let obj = {}
		let currentLine = line.split(",")

		headers.map((header, indexReader) => {
			obj[header] = currentLine[indexReader]
		})
		result.push(obj)
	})
	result.pop()

	return result
}
//console.log(csv)
console.log(csvJSON(csv))
