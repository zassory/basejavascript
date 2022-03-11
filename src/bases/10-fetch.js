const api_key = 'M1n7HIlIvMrFcnGmftUM8sBIlXsc5YmN';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);

//Promesas en cadena
 peticion
     .then( resp => resp.json() )
     .then( ({ data }) => {
         const { url } = data.images.original;
         const img = document.createElement('img');
         img.src = url;

         document.body.append( img );
     })
     .catch( console.warn ) ;



