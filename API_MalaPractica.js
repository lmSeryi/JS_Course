    const API_URL = 'https://swapi.co/api/'
    const PEOPLE_URL = 'people/:id'
    const OPTS = {crossDomain: true}

    

    function obtenerPersonaje(id, callback){
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        
        $.get(url, OPTS,  function(Character){
            console.log(`Hola, yo soy ${Character.name}`)

            if(callback){
                callback()
            }
        })
    }

    obtenerPersonaje(1, function(){
        obtenerPersonaje(2, function(){
            obtenerPersonaje(3)
        })
    })
    
    