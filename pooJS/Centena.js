import { Dezena } from "./Dezena.js"

export class Centena{
    constructor(numero){
        let dezena = new Dezena(numero.substring(1))
        let cem = 'cem'
        let numArray = ['cento','duzentos','trezentos','quatrocentos','quinhentos','seiscentos','setecentos','oitocentos','novecentos']
        //console.log(numArray[numero.substring(0,1) -1])
        if(numero == '100')
            this.res = cem
        else if(numero.substring(0,1) == '0')
            this.res = dezena.res
        else
            this.res = numArray[numero.substring(0,1) -1] + ' e ' + dezena.res


    }
}