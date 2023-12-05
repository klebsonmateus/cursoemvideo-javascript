var boxnumero = document.getElementById('txtn')
var divconta = document.getElementById('conta')
var btnsoma = document.getElementById('btnsoma')
var btnsubtracao = document.getElementById('btnsubtracao')
var btnmultiplicacao = document.getElementById('btnmultiplicacao')
var btndivisao = document.getElementById('btndivisao')
var btnresultado = document.getElementById('btnresultado')
var operacao = ''
var acumulador = []
divconta.innerHTML=''

function calcular(){

}

function somar(){
    let numero = Number(boxnumero.value)
    let parcial = Number(acumulador[acumulador.length-1])
    if(acumulador.length == 0){
        acumulador.push(numero)
        console.log(acumulador)
    }else {
        let res = parcial + numero
        acumulador.push(res)
        console.log(acumulador)
        console.log('oi')
        boxnumero.value = `${res}`
    }
    divconta.innerHTML += `${numero} +`
}