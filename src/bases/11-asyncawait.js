

// const getImagenPromesa = ()=>{
//     return new Promise( ( resolve , reject ) => {
//         resolve('http://www.bci.cl');
//     } );


// }

// getImagenPromesa().then( console.log )

const getImagen = async() => {
    
    try{
        const api_key = 'M1n7HIlIvMrFcnGmftUM8sBIlXsc5YmN';
    const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);
    //Espera a que esta promesa termine antes de ejecutar la siguiente linea de codigo
    const { data } = await resp.json(); //Revisar esta desestructuracion

    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
    } catch( error ){
        //Manejo del error
        console.log( error );
    }
    
    
}

getImagen();


// //Promesas en cadena
//  peticion
//      .then( resp => resp.json() )
//      .then( ({ data }) => {
//          const { url } = data.images.original;
//          const img = document.createElement('img');
//          img.src = url;

//          document.body.append( img );
//      })
//      .catch( console.warn ) ;



