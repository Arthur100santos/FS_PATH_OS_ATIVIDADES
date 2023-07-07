const fs = require('fs')

fs.rename('nomeVelho', 'nomeNovo', (err)=>{
    if(err) throw(err)

    console.log('Renomeado')
})