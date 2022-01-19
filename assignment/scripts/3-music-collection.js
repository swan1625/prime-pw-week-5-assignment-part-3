console.log('***** Music Collection *****')

let collection = [] // starting an empty array

function addToCollection(title, artist, yearPublished){ //starting addToCollection function
 let a = title + artist + yearPublished;
 collection.push(a)
 return a;
} //end of addToCollection function


//adding 6 different albums to collection using our addToCollection function
console.log( 'Adding to collection:', addToCollection( 'Are you Experienced?', 'Jimi Hendrix', '1967' ));
console.log( 'Adding to collection:', addToCollection( 'Innerspeaker', 'Tame Impala', ' 2009' ));
console.log( 'Adding to collection:', addToCollection( 'Digital Ash In a Digital Urn', 'Bright Eyes', '2005' ));
console.log( 'Adding to collection:', addToCollection( 'Shame, Shame', 'Dr. Dog', '2010' ));
console.log( 'Adding to collection:', addToCollection( 'Strange Mercy', 'St. Vincent', '2011' ));
console.log( 'Adding to collection:', addToCollection( 'Rocket', 'Alex G', ' 2017' ));


console.log(collection); //showing new collection with recently added artists

function showCollection(array) {
  console.log('there are', array.length, 'albums in my collection');
  for (let i of array) {
  console.log(`${i.title} by ${i.artist} published in ${i.yearPublished}`);

  }
}
console.log(showCollection(collection)); // showing my collection through showCollection function *Currently showing undefined

function findByArtist(artist){
  let artistArray =[];
  for ( let i = 0; i<collection.length; i++){
    if (collection[i].artist === artist){
      artistArray.push(collection[i].artist);
    }
  }
  console.log(artistArray);
}

findByArtist('Jimi Hendrix'); //shows an empty array ?
