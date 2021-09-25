import { Centena } from "./Centena.js"
import { Unidade } from "./Unidade.js"
import { Dezena } from "./Dezena.js"

export class Milhar{
    constructor(numero){
        let centena = new Centena(numero.substring(1))
        let dezena = new Dezena(numero.substring(2))
        let mil = 'mil'
        let numArrayUnidade = ['','','dois','tres','quatro','cinco','seis','sete','oito','nove']
        if(numero == '1000')
            this.res = mil
        else if(centena.res.substring(0,1) != 0)
            this.res = numArrayUnidade[numero.substring(0,1)] + ' ' + mil + ' ' + centena.res
        else
            this.res = numArrayUnidade[numero.substring(0,1)] + ' ' + mil + centena.res


        console.log(this.res)
        }
}