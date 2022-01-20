let v1 = 1
let v2 = 5
let v3 = 10

if(v1 > v2 && v2 > v3){
    console.log(v1 + ' ' + v2 + ' ' + v3)
}else if(v1 > v3 && v3 > v2){
    console.log(v1 + ' ' + v3 + ' ' + v2)
}else if(v2 >= v1 && v1 > v3){
    console.log(v2 + ' ' + v1 + ' ' + v3)
}else if(v2 > v3 && v3 > v1){
    console.log(v2 + ' ' + v3 + ' ' + v1)
}
