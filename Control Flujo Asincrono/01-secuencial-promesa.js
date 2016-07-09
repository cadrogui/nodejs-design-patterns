var async = require('async')
var request = require('request')
var Promise = require('bluebird')

function requestToUrl(url, cb){
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

function readFiles(){
  return new Promise(function(resolve, reject){
    async.waterfall([
        function(callback) {
          requestToUrl('http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206396', function(err, data){
            callback(null, data)
          })
        },
        function(arg1, callback) {
          requestToUrl('http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206392', function(err, data){
            callback(null, data)
          })
        },
        function(arg1, callback) {
          requestToUrl('http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=206393', function(err, data){
            callback(null, data)
          })
        },
        function(arg1, callback) {
          requestToUrl('http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=207391', function(err, data){
            callback(null, data)
          })
        },
        function(arg1, callback) {
          requestToUrl('http://www.leychile.cl/Consulta/obtxml?opt=7&idNorma=226399', function(err, data){
            callback(null, data)
          })
        },
    ], function (err, result) {
        resolve(result);
    });
  })
}

readFiles()
.then(function(e){
  console.log('RESOLVED', e);
})
.catch(function(err){
  console.log('ERROR', err);
})
