export class Numero{
    constructor(numero){
        this.res = ''
        this.numero = numero
        switch(numero.length)
        {
            case 1:     
                this.res = this.unidade(numero)
            break;
            
            case 2: 
                this.res = this.dezena(numero)   
            break;
            
            case 3:     
                this.res = this.centena(numero)
            break;
            
            case 4:     
                this.res = this.milhar(numero)
            break;
            
            default: 
                this.res = ''
            break;
        }
    }

    unidade(numero){
        let numArray = ['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
        return numArray[numero] 
    }
    
    dezena(numero){
        let unidade = this.unidade(numero.substring(1,2))

        let numArray = ['dez','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa']
        let numEspecialArray = ['onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove']
        if(numero == '10')
            return numArray[numero.substring(0,1) -1]
        else if(numero.substring(0,1) == '0')
            return unidade
        else if(numero.substring(1,2) == '0')
            return numArray[numero.substring(0,1) -1]
        else if(numero.substring(0,1) == '1' && numero.substring(1,2) != '0')
            return numEspecialArray[numero.substring(1,2) -1]
        else
            return numArray[numero.substring(0,1) -1] + ' e ' + unidade
    }
    
    centena(numero){
        let dezena = this.dezena(numero.substring(1))
        let cem = 'cem'
        let numArray = ['cento','duzentos','trezentos','quatrocentos','quinhentos','seiscentos','setecentos','oitocentos','novecentos']
        if(numero == '100')
            return cem
        else if(numero.substring(0,1) == '0')
            return ' e ' + dezena
        else
            return numArray[numero.substring(0,1) -1] + ' e ' + dezena
    }
    
    milhar(numero){
        let centena = this.centena(numero.substring(1))
        let mil = 'mil'
        let numArrayUnidade = ['','','dois','tres','quatro','cinco','seis','sete','oito','nove']
        if(numero == '1000')
            return mil
        else if(centena.substring(0,1) != 0)
            return numArrayUnidade[numero.substring(0,1)] + ' ' + mil + ' ' + centena
        else
            return numArrayUnidade[numero.substring(0,1)] + ' ' + mil + centena
    }
    
}