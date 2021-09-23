import { Unidade } from "./Unidade.js"

export class Dezena{
    constructor(numero){
        this.res = ''
        let unidade = new Unidade(numero.substring(1,2))

        let numArray = ['dez','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa']
        let numEspecialArray = ['onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove']
        if(numero == '10')
            this.res = numArray[numero.substring(0,1) -1]
        else if(numero.substring(0,1) == '0')
            this.res = unidade.res
        else if(numero.substring(1,2) == '0')
            this.res = numArray[numero.substring(0,1) -1]
        else if(numero.substring(0,1) == '1' && numero.substring(1,2) != '0')
            this.res = numEspecialArray[numero.substring(1,2) -1]
        else
            this.res = numArray[numero.substring(0,1) -1] + ' e ' + unidade.res
            

    }
}