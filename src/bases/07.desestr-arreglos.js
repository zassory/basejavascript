const personajes = ['Goku','Vegeta','Broly'];

//Forma no optioma de verlos ni recorrerlos
// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

//const [ , ,p3 ] = personajes; //De ese modo llama al tercer elemento del arreglo
//no importando su nombre

//console.log(p3);

const retornaArreglo = ()=> {
    return ['ABC',123]; //Tengo dos objetos en este arreglo
}

const [letras,numeros] = retornaArreglo(); //Aqui loi desestructura, no importa el nombre que
//le de , lo importante es la posicion
console.log(letras,numeros);

const funcionDosValores = ( valor ) => {
    return [ valor , ()=>{ console.log('Hola mundo') } ]; //Dos valores, el segundo
    //es una funcion
    //Al desestructurarla, por la posicion le doy un valor
}

const [ nombre, snombre ] = funcionDosValores( 'Goku' );//Le doy el nombre al metodo
console.log( nombre );
snombre();
//arr[1]();