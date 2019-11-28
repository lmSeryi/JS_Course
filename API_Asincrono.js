    const API_URL = 'https://swapi.co/api/'
    const PEOPLE_URL = 'people/:id'
    const OPTS = {crossDomain: true}

    const onResponse = function(Character){
        console.log(`Hola, yo soy ${Character.name}`)
    }

    function obtenerPersonaje(id){
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, OPTS, onResponse)
    }

    obtenerPersonaje(1)
    obtenerPersonaje(2)
    obtenerPersonaje(3)
    