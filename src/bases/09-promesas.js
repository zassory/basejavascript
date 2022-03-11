
import { getHeroeById , getHeroeByOwner } from './bases/08.imp-exp';


// const promesa = new Promise( (resolve,reject) => {

//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         //resolve( heroe );
//         resolve(p1); 
//         //reject('No se pudo encontrar el heroe');
//     }, 2000);

// });//El resolve le transfiere la data al then

// promesa.then( ( heroe )=>  {
//     console.log( 'Super heroe: ',heroe );
// }).catch( ( err ) => console.warn( err ) );

//Crear una funcion que reciba como parametro el id
const getHeroeByIdAsync = ( id )=> {

    return new Promise( ( resolve , reject ) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No hay heroe con ese id');
            }            
        }, 2000);

    });

}

getHeroeByIdAsync(1)
.then( console.log )
.catch( console.warn )

