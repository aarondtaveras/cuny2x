/**	
	Object-Oriented Mini-Project: 5/31/18 
	Author: Aaron Taveras 

	Implement an object model that allows you to store strings that 
	represent a Photo. Your model should include an Album object that 
	can contain many Photo objects in its photos attribute. Each Album
	should allow you to add a new photo, list all photos, and access a
	specific photo by the order it was added. Each Photo should tell you
	the photo's file name and the location the photo was taken in. 
	Create instances of each object defined to prove that your object model works.
**/

// Photo object stores filename and location as strings. 
function Photo(fileName, location){
	this.fileName = fileName;
	this.location = location;
}

// Album object takes no parameters, but creates an internal array of photos. 
function Album(){
	this.photos = [];
}

// addPhoto takes a single parameter p which represents a photo and adds it to 
// the internal array of photos which represents the album. 
Album.prototype.addPhoto = function(p){
	this.photos.push(p);
}

// listAll iterates over each photo in the album, printing its data to the console.
Album.prototype.listAll = function(){
	for(let i=0;i < this.photos.length;i++){
		console.log(this.photos[i]);
	}
}

/** ************************ CONSOLE TESTING ************************ **/ 

//Initialize three photos.
var myPhoto = new Photo("me.jpg","New York");
var myPhoto2 = new Photo("notme.jpg","France");
var myPhoto3 = new Photo("cuny2x.jpg","Hunter College");

//Initialize an album.
var myAlbum = new Album(myPhoto);

//Add two photos to the album, and then list them on the console.
myAlbum.addPhoto(myPhoto2);
myAlbum.addPhoto(myPhoto);
myAlbum.listAll();
//The console should have printed myPhoto2, then myPhoto. 

//Add third photo. 
myAlbum.addPhoto(myPhoto3);

//See if we can access photos from our album sequentially. Our first item added 
//is at index [0], and our last item is at index[photos.length - 1]. In this way
//we can access items by the order in which we added them.

myAlbum.photos[2];
