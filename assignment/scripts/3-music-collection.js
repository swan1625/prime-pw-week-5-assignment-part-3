console.log('***** Music Collection *****')

var collection = []

function addToCollection(title, artist, yearPublished){
 let a = title + artist + yearPublished;
 collection.push(a)
 return a;
}

console.log( 'Adding to collection:', addToCollection( 'Are you Experienced?,', ' Jimi Hendrix,', ' 1967' ));
console.log( 'Adding to collection:', addToCollection( 'Innerspeaker,', ' Tame Impala,', ' 2009' ));
console.log( 'Adding to collection:', addToCollection( 'Digital Ash In a Digital Urn,', ' Bright Eyes,', ' 2005' ));
console.log( 'Adding to collection:', addToCollection( 'Shame, Shame, ', 'Dr. Dog,', ' 2010' ));
console.log( 'Adding to collection:', addToCollection( 'Strange Mercy,', ' St. Vincent,', ' 2011' ));
console.log( 'Adding to collection:', addToCollection( 'Rocket,', ' Alex G,', ' 2017' ));
console.log(collection);
