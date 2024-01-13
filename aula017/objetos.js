let amigo = {nom: 'José',
sexo: 'M',
idade: 19,
envelheceu(e=0) {
    console.log('Envelheceu')
    this.idade += e
}}


amigo.envelheceu(3)
console.log(`${amigo.nom} esta hojé com ${amigo.idade}`)