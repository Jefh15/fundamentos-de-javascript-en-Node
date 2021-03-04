// setTimeout( function() {
//     console.log('Hola Mundo');
// }, 1000);

// setTimeout( () => {
//     console.log('Hola Mundo');
// }, 1000);


// CALLBACKS SON UNA FUNCION QUE SE MANDA COMO ARGUEMNTO A OTRA FUNCION
const getUsuarioById = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callback(user);
    }, 1500);
}

getUsuarioById( 10, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
});