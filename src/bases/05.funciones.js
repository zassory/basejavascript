

const saludar = function( nombre ){
    return `Hola, ${ nombre }`
}

const saludar2 = ( nombre )=> {
    return `Hola, ${ nombre }`
}

const saludar3 = ( nombre )=> `Hola, ${ nombre }`;
const saludar4 = ()=> `Hola mundo`;//Valor primitivo que se lee facilmente


//console.log(saludar("Nicolas"));
console.log( saludar('Nicolas') );
console.log( saludar2 );
console.log( saludar3('Nico chico') );
console.log( saludar4() );

const getUser = ()=>{
    return {
        uid: 'ABC123',
        username: 'zenakulee'
    }
}
//Los parentesis para devolver el objeto de forma implicita
const getUser2 = ()=>
    ({
        uid: 'ABC123',
        username: 'zenakulee'
    });


console.log( getUser() );
console.log( getUser2() );

function getUsuarioActivo( nombre ){
    return {
       uid: 'ZENAKULEE',
       username: 'nombre' 
    }
};

const getUsuarioActivo2 = ( nombre ) => ({
    uid:'ZENAKULEE',
    username: nombre
});

const usuarioActivo = getUsuarioActivo2('Nicolas Caceres');
console.log(usuarioActivo);
console.log(getUsuarioActivo2('Katherine Muñoz'));

//1. transformar a funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas