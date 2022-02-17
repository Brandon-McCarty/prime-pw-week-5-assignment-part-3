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
// console.log(collection);

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

console.log('Searching for albums by Tenacious D: ', findByArtist(collection, 'Tenacious D'));
console.log('Searching for albums by Avenged Sevenfold: ', findByArtist(collection, 'Avenged Sevenfold'));
console.log('Searching for albums by Eminem: ', findByArtist(collection, 'Eminem'));
console.log('Searching for albums by Volbeat: ', findByArtist(collection, 'Volbeat'));

console.log(addToCollection(collection, 'City of Evil', 'Avenged Sevenfold', '2005'));
console.log('Searching for albums by Avenged Sevenfold: ', findByArtist(collection, 'Avenged Sevenfold'));

console.log('-----Stretch Goals-----');

function search(array, artist, yearPublished){
    console.log('In search');
    let searchArray = [];
    for (let info of array){
        if (info.artist === artist && info.yearPublished === yearPublished){
            searchArray.push(info)
        }    
    }
    return searchArray;
}

console.log('The search results for Avenged Sevenfold in 2010 are: ', search(collection, 'Avenged Sevenfold', '2010'));
console.log('The search results for Avenged Sevnfold in 2007 are: ', search(collection, 'Avenged Sevenfold', '2007'));
console.log('The search results for Linkin Park in 2003 are: ', search(collection, 'Linkin Park', '2003'));
