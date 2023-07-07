const os = require('os')

console.log(os.networkInterfaces(), os.tmpdir())


var Totalsecundos = os.uptime()
var Totalmin = Totalsecundos / 60
var Totalhoras = Totalmin / 60

Totalsecundos = Math.floor(Totalsecundos)
Totalhoras = Math.floor(Totalhoras)
Totalmin = Math.floor(Totalmin)

Totalhoras = Totalhoras % 60
Totalmin = Totalmin % 60
Totalsecundos =Totalsecundos % 60

console.log(`Tempo usado: ${Totalhoras} horas, ${Totalmin} minutos, ${Totalsecundos}segunndos`)
