import {Escrever} from './Escrever.js';
let resultado = document.querySelector('#extenso')
let botao = document.querySelector('#botao')
botao.addEventListener('click', function(){
    var numero = document.querySelector('#numero').value
    var numeroExtenso = new Escrever(numero)
    console.log(numeroExtenso.res)
    resultado.value = numeroExtenso.res.trim()
})