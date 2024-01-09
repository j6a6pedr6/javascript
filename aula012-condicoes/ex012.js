var idade = 87
console.log(`A sua idade é ${idade} você: `)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opsinoal')
} else {
    console.log('Voto obrigatorio')
}