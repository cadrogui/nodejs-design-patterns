var EventEmitter = require('events').EventEmitter
var fs = require('fs')
var path = require('path')

function readFile(file){
  var emitter = new EventEmitter()

  fs.readFile(file, function(err, data){
    if(err){
      emitter.emit('error', err)
    }else{
      emitter.emit('fileRead', data.toString())
    }
  })

  return emitter
}

var f = path.normalize(process.cwd() + '../../01-file.txt').replace(/(\s)/, "\\ ")

readFile(f)
.on('error', function(err){
  console.log(err);
})
.on('fileRead', function(data){
  console.log('fileRead 1', data);
})
.on('fileRead', function(data){
  console.log('fileRead 2', data);
})
