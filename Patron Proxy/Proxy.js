var fs = require('fs')
var path = require('path')

function readFiles(file){
  var self = this
  self._file = file

  self.getContent = function(){
    var data = fs.readFileSync(self._file)
    return {
      content: data
    }
  }
}

function proxyReadFiles(file){
  var self = this
  self._file = file

  return {
    readFile: function(){
      var _exists = fs.existsSync(self._file)

      if(_exists){
        var r = new readFiles(file)
        return {
          content: r.getContent().content
        }
      }else{
        return new Error('El archivo no existe')
      }
    }
  }
}

var f = path.normalize(process.cwd() + '../../01-file.txt')

var p = new proxyReadFiles(f)
console.log(p.readFile().content.toString());
