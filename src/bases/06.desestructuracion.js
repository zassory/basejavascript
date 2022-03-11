// Desestructuracion
// Asignacion desestructurando

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const { nombre:nombre2 , edad , clave } = persona;//Extrae de este objeto

const Context = ({ clave , nombre , edad , rango = 'Capitan' })=>{
    //Desestructuracion del argumento    
    return {
        nombreClave: nombre,
        anios: edad,
        latlng:{
            lat: 14.12,
            lng: -12.32
        }
    }
}

//Desestructuracion mas profunda
//const { nombreClave , anios , latlng : { lat , lng } } = Context( persona );
const { nombreClave , anios  } = Context( persona );
//Otra forma
const { latlng } = Context( persona );
const { lat , lng } = latlng;
console.log( nombreClave , anios , lat , lng );