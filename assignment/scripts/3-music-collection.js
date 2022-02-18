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
        if (artist == '' || null  && yearPublished == '' || null){
            console.log('No Input');
            searchArray = array;
        }
    }
        return searchArray;
}

console.log('The search results for Avenged Sevenfold in 2010 are: ', search(collection, 'Avenged Sevenfold', '2010'));
console.log('The search results for Avenged Sevenfold in 2007 are: ', search(collection, 'Avenged Sevenfold', '2007'));
console.log('The search results for Linkin Park in 2003 are: ', search(collection, 'Linkin Park', '2003'));
console.log('The search results for blank are: ', search(collection, '', '' ));
console.log('The search results for blank are: ', search(collection, '', null ));


let collection2 = [];

function addToCollection2(array, title, artist, yearPublished, tracks, duration ){
    console.log('In addToCollection2');
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks,
        duration: duration
    }
    array.push(album)
    return album;
}

console.log(addToCollection2(collection2, 'Nightmare', 'Avenged Sevenfold', '2010', ['Nightmare', 'Welcome to the Family', 'So Far Away'], ['6:14', '4:06', '5:27']));
console.log(addToCollection2(collection2, 'The Black Parade', 'My Chemical Romance', '2006', ['This is How I Disappear', 'Welcome to the Black Parade', 'Famous Last Words'], ['3:59', '5:11', '4:59']));
console.log(addToCollection2(collection2, 'The Pick of Destiny', 'Tenacious D', '2006', ['Kickapoo', 'Master Exploder', 'Beelzeboss'], ['4:14', '2:25', '5:36']));
console.log(collection2);

function search2(array, artist, yearPublished, trackName){
    console.log('In search2');
    let searchArray = [];
    let tracksearch;
    for (let info of array){
        if (info.artist === artist && info.yearPublished === yearPublished && info.tracks == trackName){
            searchArray.push(info)
        } 
        if (artist == '' || null  && yearPublished == '' || null && trackName == '' || null){
            console.log('No Input');
            searchArray = array;
        }
    }
        return searchArray;
}

console.log('The search results for Avenged Sevenfold, 2010, Nightmare are: ', search2(collection2, 'Avenged Sevenfold', '2010', 'Nightmare'));
console.log('The search results for Avenged Sevenfold, 2010, Fiction are: ', search2(collection2, 'Avenged Sevenfold', '2010', 'Fiction'));
console.log('The search results for blank are: ', search(collection2, '', '', '' ));

console.log(collection2[0].tracks);

function showCollection2(array){
    console.log('In showCollection2');
    console.log(`The number of items in this collection is ${array.length}`);
    
    for(let i = 0; i < array.length; i++){   
        let track = array[i].tracks;
         let time = array[i].duration;
            console.log(`${array[i].title} by ${array[i].artist}, published in the year ${array[i].yearPublished}:`); 
    for(let i = 0; i < array.length; i++){  
            console.log(`${i + 1}. ${track[i]}: ${time[i]}`);
        }      
    }
    return true;
}

//console.log(`${i + 1}. ${track[i]}: ${time[i]}`);
showCollection2(collection2);