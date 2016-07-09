// Revealing Module Pattern

module.exports = (function(){

  var _datos = {
    nombre: 'Mikel Carozzi',
    email: 'me@mikelcarozzi.cl'
  }

  var addItems = function(item, data){
    _datos[item] = data
  }

  var exports = {
    getDatos: function(cb){
      cb(null, _datos)
    },

    add: addItems
  }

  return exports
})()
