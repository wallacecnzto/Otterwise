import fs from "fs"

let csv = fs.readFileSync("./lista.csv", "utf8")

const CSVObj = (csv) => {

	let lines=csv.split(/\r?\n|\r/g)
	let result = []
  
	let headers=lines[0].split(",")
	headers.pop()
	for(let i=1;i<lines.length;i++){
  
		let obj = {}
		let currentline=lines[i].split(",")
  
		for(let j=0;j<headers.length;j++){
			obj[headers[j]] = currentline[j]
		}
  
		result.push(obj)
		
	}
	//return result; //JavaScript object

	const json = JSON.stringify(result) //JSON

	return	json
}

//console.log(CSVObj(csv))

let fileJSON = CSVObj(csv)

fileJSON.toString()

fs.writeFileSync('arquivo.json', fileJSON)