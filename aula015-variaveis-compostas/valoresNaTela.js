let valores = [2,6,3,8,7,5,4]

valores.sort()

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

/------------------------------------------

for (let pos = 0; poss < valores.length; pos++ ) {
    console.log(`O valor da posição ${pos} é: ${valores[pos]}`)
}
*/

for (pos in valores) {
    console.log(`O valor da posição ${pos} é: ${valores[pos]}`)
}