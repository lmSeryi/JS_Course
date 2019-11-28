class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Soy ${nombre} ${apellido}`)
        if (fn){
            fn(nombre, apellido, false)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`No sabia que eras dev`)
    }
}

var Seryi = new Persona('Sergio', 'Dominguez', 1.70)
var Joe = new Persona('Joe', 'Dominguez', 1.68)
var Connor = new Desarrollador('Connor', 'Dominguez', 1.80)

Seryi.saludar()
Joe.saludar(responderSaludo)
Connor.saludar(responderSaludo)