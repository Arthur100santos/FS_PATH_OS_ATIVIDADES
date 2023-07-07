const fs = require('fs')

const filePath = './existente.txt'

if(fs.existsSync(filePath)){
    console.log('Existe :)')
}else{
    console.log('Não existe :(')
}