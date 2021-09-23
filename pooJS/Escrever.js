import { CriarExtenso } from "./criarExtenso.js"

export class Escrever{

    constructor(numero){
        this._numero = numero
        let resultado = new CriarExtenso(numero)
        this._resultado = resultado.resultado
    }


}