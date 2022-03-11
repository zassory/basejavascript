const persona = {

    nombre:'Nicolas',
    apellido: 'Caceres',
    edad: 40,
    direccion: {
        ciudad: 'New  York',
        zip:552212,
        lat:14.32,
        lng:32.14
    }
};

//console.log( persona );
//Esto no se debe hacer, solo tome la referencia del objeto
//y luego le cambie un valor pero es el mismo objeto
//porque tome la referencia
// const persona2 = persona;
// console.log( persona );

// persona2.nombre = 'Vladimir';
// console.log( persona );
//Ahora se hace con el spread operator, se clona el objeto

const persona2 = { ...persona };//Tenemos un clon del objeto
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );