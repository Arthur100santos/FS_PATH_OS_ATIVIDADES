const fs = require('fs')

fs.appendFile('existente.txt', 'Lobisomen & Vampiro', function(err){
    if
    (err) throw(err)

    console.log('LEGAL')
})