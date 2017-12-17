// origin flagstaff station
// destination kooyong station
// write a for loop that displays the 4 stops that the passenger will be taking.
//
//

// train lines
var lines = {
	alamein: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
  glenWaverly: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  sandringham: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

// user input
var origin = 'Richmond';
var destination = 'Windsor';

// calculating indexes
var originIndex = lines.sandringham.indexOf(origin);
var destIndex = lines.sandringham.indexOf(destination);

// calculating number of stopss
debugger
if (originIndex > -1 && destIndex > -1) {
  var numberOfStops = destIndex - originIndex;
}

// creating journey
var journey = lines.sandringham.slice(originIndex, destIndex + 1)

var outputToUser = function() {
	console.log("origin: " + origin);
	console.log("destination: " + destination);
	console.log(numberOfStops + " stops");
	console.log(journey.join(" ---> "))
}

outputToUser();
