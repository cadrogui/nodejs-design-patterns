var request = require('request')
var async = require('async')

var endpoints = [
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206396',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206392',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206394',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206393',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206391',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206398',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206397',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206395',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206399',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206344',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206324',
  'http://www.mikelcarozzi.cl',
  'http://www.scaffold.cl',
  'http://www.estiv.cl'
]

function requestToUrl(url, cb){
  cb == undefined ? cb = function noop(){} : cb=cb
  if(!url){
    reject(new TypeError('No hay url para realizar el request'))
  }

  request(url, function (error, response, body) {
    if (!error) {
      cb(null, body)
    }else{
      cb(error, null)
    }
  })
}

var cargo = async.cargo(function(tasks, cb){
  for(var i = 0; i < tasks.length; i++){
    console.log(tasks[i]);
    requestToUrl(tasks[i])
  }
  cb()
}, 3)

endpoints.forEach(function(e, i){
  cargo.push(e, function(err, data){
    console.log('terminada tarea', i);
  })
})
