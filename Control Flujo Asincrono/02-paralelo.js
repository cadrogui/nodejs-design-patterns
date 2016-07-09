var Promise = require('bluebird')
var request = require('request')
var async = require('async')

function requestToUrl(url){
  return new Promise(function(resolve, reject){
    if(!url){
      reject(new TypeError('No hay url para realizar el request'))
    }

    request(url, function (error, response, body) {
      if (!error) {
        resolve(body)
      }else{
        reject(error)
      }
    })
  })
}

var promesas = []

var endpoints = [
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206396',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206392',
  'http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206394',
  'http://www.mikelcarozzi.cl',
  'http://www.scaffold.cl',
  'http://www.estiv.cl'
]

async.each(endpoints, function(e, next) {
  promesas.push(requestToUrl(e))
  next();
}, function(err){
  if( !err ) {
    Promise.all(promesas)
    .then(function(e){
      console.log(e);
    })
    .catch(function(err){
      console.log(err);
    })
  } else {
    console.log(err);
  }
});
