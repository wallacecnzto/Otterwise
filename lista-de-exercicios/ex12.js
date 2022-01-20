let nomeCompleto ='Marcelo Lima'
let servidor = true
let professor = false

if(servidor === true && professor === false) {
    console.log(nomeCompleto + ', você tem acesso a nossa linha de crédito para servidores.')
}else if(servidor === true && professor === true) {
    console.log('Parabéns ' + nomeCompleto + '! Você tem acesso a nossa linha de crédito especial!')
}else {
    console.log(nomeCompleto + ' infelizmente você não tem uma linha de crédito disponível.')
}