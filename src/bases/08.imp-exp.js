//import  heroes , { owners }   from './data/heroes';
import heroes , { owners } from '../data/heroes';

//heroes , al ir solo es cuando la exportacion es por defecto
//{ owners } cuando es mas especifico

//Con el fin encuentro uno
//Es para consultas mas especificas, individuales
export const getHeroeById = ( id ) => heroes.find( ( heroe ) => heroe.id === id );

export const getHeroeByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

//console.log( owners );
//console.log( getHeroeById(2) );
// console.log( getHeroeByOwner('DC') );
// console.log( getHeroeByOwner('Marvel') );
