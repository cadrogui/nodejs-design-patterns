/*

function crearImagen(nombre){
  return new Image(nombre)
}

var img = crearImagen('yo.jpeg')

// Basada en condiciones

function crearImagen(nombre){
  if(nombre.match(/\.jpeg$/)){
    return new ImagenJpeg(nombre)
  }else if(nombre.match(/\.gif$/)){
    return new ImagenGif(nombre)
  }else if(nombre.match(/\.png$/)){
    return new ImagenPng(nombre)
  }else{
    throw new Exception('formato no soportado')
  }
}

*/

// Encapsulamiento

function crearPersona(nombre){
  var _propsPrivadas = {}

  var persona = {
    setNombre: function(nombre){
      if(!nombre){
        throw new Error('Una persona debe tener un nombre')
      }
      _propsPrivadas.nombre = nombre
    },
    getNombre: function(){
      return _propsPrivadas.nombre
    }
  }

  persona.setNombre(nombre)

  return persona
}

var p = crearPersona('Mikel')

console.log(p.getNombre());
