console.log('***** Music Collection *****')
let collection = [];

console.log(collection);

function addToCollection(array, title, artist, yearPublished){
    console.log('In addToCollection');
    let album = {
        Title: title,
        Artist: artist,
        yearPublished: yearPublished
    }
    array.push(album)
}

addToCollection(collection, 'Nightmare', 'Avenged Sevenfold', '2010')
console.log(collection);

addToCollection(collection, 'The Black Parade', 'My Chemical Romance', '2006')
console.log(collection);

addToCollection(collection, 'Tickets to My Downfall', 'Machine Gun Kelly', '2020')
console.log(collection);

addToCollection(collection, 'The Pick of Destiny', 'Tenacious D', '2006')
console.log(collection);