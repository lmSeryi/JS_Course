const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = {crossDomain: true}

function obtenerPersonaje(id){
    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(url, OPTS,  function(data){
            resolve(data)
        })
        .fail(()=> reject(id))
    })    
}

function onError(id){
    console.log(`Sucedio un error al obtener al personaje ${id}`)
}


async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7,8,9]
    var promesas = ids.map(id =>  obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes[1].name)
    }catch(id){
        onError(id)
    }
}

obtenerPersonajes()