const fs = require('fs');

fs.copyFile('gemeo1.txt', 'gemeo2.txt', (err) => {
  if (err) throw err;

  console.log('nasceu mermo igual!');

});