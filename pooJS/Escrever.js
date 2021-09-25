import { CriarExtenso } from "./criarExtenso.js"

export class Escrever{

    constructor(numero){
        this._numero = numero
        let resultado = new CriarExtenso(numero)
        resultado.resultado = resultado.resultado.trim().charAt(0).toUpperCase() + resultado.resultado.trim().slice(1)
        this._resultado = resultado.resultado
    }


}