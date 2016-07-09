var async = require('async')
var request = require('request')

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

function process(){
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
      console.log(result);
  });
}

process()
