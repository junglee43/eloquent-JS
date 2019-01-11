/*****
Interlude
*****/

// I'm not understanding this on some fundamental level. Need to get into it more.
// http://reactivex.io/learnrx/

// Projecting Arrays
// Applying a function to a value and creating a new value is called a projection. To project one array into another, we apply a projection function to each item in the array and collect the results in a new array.

// Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()
// For each video, add a projected {id, title} pair to the videoAndTitlePairs array.
function project() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	],
	videoAndTitlePairs = [];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate {id, title} pairs from each video.
	// Put the results into the videoAndTitlePairs array using the Array's
	// push() method. Example: videoAndTitlePairs.push(newItem);
	// ------------ INSERT CODE HERE! -----------------------------------

    // newReleases.forEach(function(video) {
    //     videoAndTitlePairs.push({'id': newReleases['id'], 'name': newReleases['name']});
    // });
    // This returns:
    // [ { id: undefined, name: undefined },
    //   { id: undefined, name: undefined },
    //   { id: undefined, name: undefined },
    //   { id: undefined, name: undefined } ]

    newReleases.forEach(function(video) {
	videoAndTitlePairs.push({ id: video.id, title: video.title });
    });
        return videoAndTitlePairs;
}

// All array projections share two operations in common:
// Traverse the source array
// Add each item's projected value to a new array
// Why not abstract away how these operations are carried out?

// Exercise 4: Implement map()
// To make projections easier, let's add a map() function to the Array type. Map accepts the projection function to be applied to each item in the source array, and returns the projected array.

Array.prototype.map = function(projectionFunction) {
    var results = [];
    this.forEach(function(itemInArray) {
	results.push(projectionFunction(itemInArray));
    });
    return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

// Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs
// Let's repeat the exercise of collecting {id, title} pairs for each video in the newReleases array, but this time we'll use our map function.
function() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];
    // ------------ INSERT CODE HERE! -----------------------------------
    // Use map function to accumulate {id, title} pairs from each video.

    // return newReleases.map(video => {
    //     let newVideoItem = {};
    //     newVideoItem = {id: video.id, title: video.title};
    //     return newVideoItem;
    // });

    return newReleases.map(function(video) { return { id: video.id, title: video.title }; });

    // finish this expression!
    // ------------ INSERT CODE HERE! -----------------------------------
    }

// Notice that map allows us to specify what projection we want to apply to an array, but hides how the operation is carried out.

// Filtering Arrays
// Like projection, filtering an array is also a very common operation. To filter an array we apply a test to each item in the array and collect the items that pass into a new array.
// Exercise 6: Use forEach() to collect only those videos with a rating of 5.0
// Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array.
var newReleases = [
    {
	"id": 70111470,
	"title": "Die Hard",
	"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": 4.0,
	"bookmark": []
    },
    {
	"id": 654356453,
	"title": "Bad Boys",
	"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": 5.0,
	"bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
	"id": 65432445,
	"title": "The Chamber",
	"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": 4.0,
	"bookmark": []
    },
    {
	"id": 675465,
	"title": "Fracture",
	"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": 5.0,
	"bookmark": [{ id: 432534, time: 65876586 }]
    }
];

// Following code returns undefined, since the var 'topVideos' exists only within the inner scope of the forEach loop...
// Took a while to figure it out, it's subtle and confusing.
newReleases.forEach(video => {
    let topVideos = [];
    if(video.rating == 5) {
        topVideos.push(video);
        //console.log(topVideos);
    }
    return topVideos;
});

function getTopVideos(array) {
    let topVideos = [];
    array.forEach(video => {
        if(video.rating == 5) {
            topVideos.push(video);
        }
    });
    return topVideos;
}

// Notice that, like map(), every filter() operation shares some operations in common:
// Traverse the array
// Add objects that pass the test to a new array
// Why not abstract away how these operations are carried out?

// Exercise 7: Implement filter()
// To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a predicate. A predicate is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.
Array.prototype.filter = function(predicateFunction) {
    var results = [];
    this.forEach(function(itemInArray) {
	// ------------ INSERT CODE HERE! ----------------------------
	// Apply the predicateFunction to each item in the array.
	// If the result is truthy, add the item to the results array.
	// Note: remember you can add items to the array using the array's
	// push() method.
	// ------------ INSERT CODE HERE! ----------------------------
        if(predicateFunction(itemInArray)) {
            results.push(itemInArray);
        }
    });

    return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"
// Like map(), filter() lets us express what data we want without requiring us to specify how we want to collect the data.

// Query Data by Chaining Method Calls
// Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0
function chainMapAndFilter(array) {
    array.map((array.filter(video => video.rating == 5) => {
        return {id: video.id};
    }));
}

function chainMapAndFilter(array) {
    return array.filter(video => {return video.rating == 5}).
        map(video => {return video.id});
}

return newReleases.
    filter(function(video) {
	return video.rating === 5.0;
    }).
    map(function(video) {
	return video.id;
    });
}
