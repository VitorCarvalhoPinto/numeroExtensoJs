import { Numero } from "./Numero.js"

export class Escrever extends Numero{

    constructor(numero){
        super(numero)

        this.res = this.res.trim().charAt(0).toUpperCase() + this.res.trim().slice(1)
        this._resultado = this.res


    }


}