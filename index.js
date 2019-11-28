 let nombre = 'Sacha'
 let apellido = 'Lifszyc'

    function pasarAMayusculas(nombre) {
      return nombre.toUpperCase()
    }

    let a = pasarAMayusculas(nombre + ' ' + apellido)
    let b = pasarAMayusculas('Lucía')
    let c = pasarAMayusculas('')

    console.log(a)
    console.log(b)
    console.log(c)