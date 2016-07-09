var ex = require('./01-revealing_module')

ex.add('github', 'github.com/cadrogui')
ex.add('ciudad', 'La Serena')

ex.getDatos(function(err, data){
  console.log(data);
})
