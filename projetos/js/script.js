function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Erro: Nenhum compo acima foi preenchido'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            alert('Passo sera conciderado = 1')
            p = 1
        }
        if (i < f) {
            for (let c = i;c <= f;c += p) {
                res.innerHTML += ` ${c}`
            }
        } else {
            for (let c = i;c >= f;c -= p) {
                res.innerHTML += ` ${c}`
            }
        }

        
    }
}