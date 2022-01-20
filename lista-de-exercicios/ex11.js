let lado1 = 2
let lado2 = 1
let lado3 = 5

if(lado1 === lado2 && lado2 === lado3 && lado3 === lado1) {
    console.log('Triângulo Equilátero')
} else if(lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1) {
    console.log('Triângulo Escaleno')
} else {
    console.log('Triângulo Isósceles')
}