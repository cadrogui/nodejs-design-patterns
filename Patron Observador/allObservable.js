var EventEmitter = require('events').EventEmitter
var fs = require('fs')
var util = require('util')
var path = require('path')

function Files(file){
  var self = this

  EventEmitter.call(self)
  self.file = file
}

// ES5
// https://nodejs.org/docs/latest/api/util.html#util_util_inherits_constructor_superconstructor

util.inherits(Files, EventEmitter)

Files.prototype.read = function(){
  var self = this

  fs.readFile(self.file, function(err, data){
    if(err){
      self.emit('error', err)
    }else{
      self.emit('contenido', data.toString())
    }
  })

  return self
}

var f = path.normalize(process.cwd() + '../../01-file.txt')

var txt = new Files(f)

txt
  .read()
  .on('error', function(err){
    console.log('[Error]', err);
  })
  .on('contenido', function(cont){
    console.log('[Contenido 1]', cont);
  })
  .on('contenido', function(cont){
    console.log('[Contenido 2]', cont);
  })
