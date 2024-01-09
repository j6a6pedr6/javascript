var agora = new Date()
var diaSem = agora.getDay()
/*
    console.log(diaSem)

    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta 
    5 - Sexta
    6 - Sabado
*/

switch (diaSem) {

    case 0:
        console.log('Bom Domingo!')
        break
    
    case 1: 
        console.log('Boa Segunda!')
        break
        
    case 2:
        console.log('Boa Terça!')
        break
    
    case 3: 
        console.log('Boa Quarta!')
        break  

    case 4:
        console.log('Boa Quinta!')
        break
    
    case 5: 
        console.log('Boa Sexta!')
        break
        
    case 6:
        console.log('Bom Sabado!')
        break
        
    default:
        console.log('ERRO')
        break
}