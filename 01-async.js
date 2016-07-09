var fs = require('fs')

// Funcion Asyncrona
function readFile(file, cb){
  fs.readFile(file, function(err, data){
    cb(err, data)
  })
}

// Fucion sincrona
function printData(){
  console.log('Simple salida por consola');
}

console.log('ejecuto readFile()');

readFile(process.cwd() + '/01-file.txt', function(err, data){
  if(err){
    console.log(err);
  }else{
    console.log(data.toString());
  }
})

console.log('ejecuto printData()');

printData()
