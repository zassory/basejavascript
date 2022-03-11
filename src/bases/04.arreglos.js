//const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//No es recomendable modificar el objeto principal

//Primero quiero clonar arreglo a arreglo2 con spread operator
//Luego de la coma, como segundo parametro le le doy el valor a añadir
let arreglo2 = [...arreglo,5];
//Esto crea un nuevo arreglo
const arreglo3 = arreglo2.map((numero)=>{
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );