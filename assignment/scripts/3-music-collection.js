console.log('***** Music Collection *****')
let collection = [];

console.log(collection);

function addToCollection(array, title, artist, yearPublished){
    console.log('In addToCollection');
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    array.push(album)
    return album;
}


console.log(addToCollection(collection, 'Nightmare', 'Avenged Sevenfold', '2010'));
// console.log(collection);
console.log(addToCollection(collection, 'The Black Parade', 'My Chemical Romance', '2006'));
// console.log(collection);
console.log(addToCollection(collection, 'Tickets to My Downfall', 'Machine Gun Kelly', '2020'));
// console.log(collection);
console.log(addToCollection(collection, 'The Pick of Destiny', 'Tenacious D', '2006'));
// console.log(collection);
console.log(addToCollection(collection, 'Swan Songs', 'Hollywood Undead', '2008'));
// console.log(collection);
console.log(addToCollection(collection, 'Meteora', 'Linkin Park', '2003'));
console.log(collection);

function showCollection(array){
    console.log('In showCollection');
    console.log(`The number of items in this collection is ${array.length}`);
    
    for(let i = 0; i < array.length; i++){
        // let album = array[i];
        console.log(`${array[i].title} by ${array[i].artist}, published in the year ${array[i].yearPublished}`); 
        // console.log(`${album.title} by ${album.artist}, published in the year ${album.yearPublished}`);    
    }
    return true;
}

console.log('Should return true: ', showCollection(collection));

function findByArtist(array, artist){
    console.log('In findByArtist');
    let artistArray = [];
    for (let singer of array){
        if (singer.artist === artist){
            artistArray.push(singer)
        }
    }
    return artistArray;
}

console.log(findByArtist(collection, 'Tenacious D'));
console.log(findByArtist(collection, 'Avenged Sevenfold'));
console.log(findByArtist(collection, 'Eminem'));