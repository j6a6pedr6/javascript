function tabuada() {
    var num = document.getElementById('txtn')
    var res = document.getElementById('res')

    if (num.value.length == 0) {
        res.innerHTML = 'Preecha o campo acima!'
    } else {
        let n = Number(num.value)
        res.innerHTML = 'Tabuada: <br>'
        for (let c = 1;c <= 10; c++)
        res.innerHTML += `${n} x ${c} = ${n*c} <br>`
    }
    
}