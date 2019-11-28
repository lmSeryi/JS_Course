    const API_URL = 'https://swapi.co/api/'
    const PEOPLE_URL = 'people/:id'
    const OPTS = {crossDomain: true}

    

    function obtenerPersonaje(id, callback){
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        
        $.get(url, OPTS,  callback)
        .fail(()=>{
            console.log('Sucedio un error, no se pudo obtener el personaje.')
        })
    }

    obtenerPersonaje(1, function(Character){
        console.log(`Hola, yo soy ${Character.name}`)
        obtenerPersonaje(2, function(Character){
            console.log(`Hola, yo soy ${Character.name}`)
            obtenerPersonaje(3, function(Character){
                console.log(`Hola, yo soy ${Character.name}`)
                obtenerPersonaje(4, function(Character){
                    console.log(`Hola, yo soy ${Character.name}`)
                    obtenerPersonaje(5, function(Character){
                        console.log(`Hola, yo soy ${Character.name}`)
                        obtenerPersonaje(6, function(Character){
                            console.log(`Hola, yo soy ${Character.name}`)
                            obtenerPersonaje(7, function(Character){
                                console.log(`Hola, yo soy ${Character.name}`)
                            })
                        })
                    })
                    
                })
            })
        })
    })
    
    