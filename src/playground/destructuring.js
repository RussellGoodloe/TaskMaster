//------------------------------------------------------------------------------------
//----------------------Obyect Destructuring------------------------------------------
//------------------------------------------------------------------------------------


// const person = {
//     name: 'Russell',
//     age: 21,
//     location: {
//         city: 'Mobile',
//         temp: 100
//     }
// };

// const { name: nombre = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${nombre} is ${age}`);

// if (city && temperature) {
//     console.log(`It's ${ temperature } in ${ city }`);
// }

// const book = {
//     title: 'The 4 hour workweek',
//     author: 'Danny Devito',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { title, author} = book;
// const { name: publisherName = "Self published" } = book.publisher;

// console.log(publisherName)




//----------------------------------------------------------------------------------------
//---------------------------Array Destructuring------------------------------------------
//----------------------------------------------------------------------------------------

const address = ['1299 S Juniper St', 'Mobile', 'AL', '36608'];
const [ , city, state, zipCode ] = address;

console.log(`You are in ${city}, ${state}`);

const item = [`Coffee (hot)`,'$2.00','$2.50','$2.75'];
const [ itemName, , mPrice ] = item;
console.log(`A medium ${itemName} costs ${mPrice}`);