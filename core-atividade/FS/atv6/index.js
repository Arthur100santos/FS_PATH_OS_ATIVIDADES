const fs = require('fs')

fs.unlink('apagado.txt', function(err){
    if(err) throw err

    console.log('Foi pra lixeira❀')
})