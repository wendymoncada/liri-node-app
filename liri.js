require("dotenv").config();

var Spotify = require("node-spotify-api");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var keys = require("keys.js");
var fs = require("fs");

var action = process.argv[2];

// command === concert-this

// get into object and retrieve info needed
// how to retrieve items from a json object, an array made out of json objects

axios.get("https://rest.bandsintown.com/artists/the+strokes/events?app_id=codingbootcamp")
    .then(function (response) {
        var data = response.data;
        // If the axios was successful...
        // Then log the body from the site!
        console.log(response.data);

        // need to get into object before getting into the array (i.e. data > position 0)
        // look up how to get into an array to print out each object w/ in the array
        var showDetails = [
            "Name of venue: " + data.venue.name,
            "Venue Location: " + data.venue.city,
            // need MM/DD/YY format - moment js
            "Date of the Event: " + data.datetime,
        ];
        console.log(showDetails);

    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });



