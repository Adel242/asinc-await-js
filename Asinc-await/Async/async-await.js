// onj con datos 
const datos = [{
    id: 1,
    tittle: 'iron man',
    year: 2008,
},
{
    id: 2,
    tittle: 'Spiderman: Homecoming',
    year: 2017,
},
{
    id: 3,
    tittle: 'Avengers: Avengers: Endgame',
    year: 2019,
}]


// creamos la funcion para llama a nuestro obj 'datos' (a modo de ej)
// const getDatos = () => {
//     return datos
// }

// simulamos la espera que normalmente tiene el lamado a un endpoint 
const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 2000);
    })
}

getDatos().then((datos) => console.log(datos)); // esto es una manera de llamar al obj con .net

async function fechingData() {
    try {
        const datosFeched = await getDatos() //otra forma de llamr a los datos podemos usar el method async
        console.log(datosFechet)
    } catch(err){
        console.log(err)
    }
};
