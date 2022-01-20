let valor1 = 1
let valor2 = 2
let valor3 = 3

function maiorValor(v1, v2, v3){
    if (v3 < v1 && v1 < v2) {
        console.log(v1 + v2)
    }else if(v2 < v1 && v1 < v3){
        console.log(v1 + v3)
    }else {
        console.log(v2 + v3)
    }
}

maiorValor(valor1, valor2, valor3);