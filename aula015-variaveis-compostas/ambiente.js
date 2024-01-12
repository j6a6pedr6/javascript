let num = [1,2,3,4,5]
num[5]=0 // Adiciona um elemento na posição decidida
num.push(-1) // Adiciona um elemento na ultima posição
num.sort() // Pôe os valores em ordem crescente
console.log(`O vetor possui ${num.length} elementos e seus valores do vetor são: ${num}`)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`Ovalor esta na possição ${pos}`)
}