import { Unidade } from "./Unidade.js";
import { Dezena } from "./Dezena.js";
import { Centena } from "./Centena.js";
import { Milhar } from "./Milhar.js";


export class CriarExtenso{

    constructor(numero){
        let resultado = '' 
        switch(numero.length)
        {
            case 1:     
                resultado = new Unidade(numero)
                this.resultado =  resultado.res
            break;
            
            case 2: 
                resultado = new Dezena(numero)    
                this.resultado =  resultado.res
            break;
            
            case 3:     
                resultado = new Centena(numero)
                this.resultado =  resultado.res
            break;
            
            case 4:     
                resultado = new Milhar(numero)
                this.resultado =  resultado.res
            break;
            
            default: this.resultado = ''
            break;
        }
        
    }


}