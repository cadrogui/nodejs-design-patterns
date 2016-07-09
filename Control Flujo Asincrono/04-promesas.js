var Promise = require('bluebird')

function creaNombre(name){
  return new Promise(function(resolve, reject){
    if(!name){
      reject(new TypeError('Debes ingresar un nombre'))
    }

    resolve({
      nombre: name
    })
  })
}

function addApellidoPaterno(obj){
  return new Promise(function(resolve, reject){
    obj.apellidoPaterno = 'Carozzi'
    resolve(obj)
  })
}

function addApellidoMaterno(obj){
  return new Promise(function(resolve, reject){
    obj.apellidoMaterno = 'Sanchez'
    resolve(obj)
  })
}

var name = new creaNombre('Mikel')

name
.then(addApellidoPaterno)
.then(addApellidoMaterno)
.then(function(e){
  console.log(e);
})
.catch(function(err){
  console.log(err);
})
