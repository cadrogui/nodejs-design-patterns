// Asinchronous Passing Style

var fs = require('fs')
var path = require('path')

function leer(ruta, cb){
  fs.readFile(ruta, function(err, data){
    if(!err){
      cb(null, data)
    }else{
      cb(err, null)
    }
  })
}

var r = path.normalize(process.cwd() + '../../01-file.txt').replace(/(\s)/, "\\ ")

leer(r, function(err, t){
  if(!err){
    console.log('contenido: ', t.toString());
  }else{
    console.log('error: ', err);
  }
})
