// my web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzJk-N1KIMrnYZoTe9e_nK6lN45skKrWY",
    authDomain: "train-scheduler-4e898.firebaseapp.com",
    databaseURL: "https://train-scheduler-4e898.firebaseio.com",
    projectId: "train-scheduler-4e898",
    storageBucket: "train-scheduler-4e898.appspot.com",
    messagingSenderId: "255012387202",
    appId: "1:255012387202:web:a8ac5d41b9fbdb1149379b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // variable to reference the database
  var database = firebase.database();

  // initial values
//   var trainName = "";
//   var destination = "";
//   var frequency = 0;
//   var firstTrain = "";

  // capture button clicks for adding a train
$("#add-train").on("click", function(event) {
    event.preventDefault();

    // grabs users input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var firstTrain = $("#first-train-time-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();

    // creates local "temporary" object for holding train data
        var newTrain = {
        name: trainName,
        destination: trainDestination,
        first: firstTrain,
        frequency: trainFrequency
    };

    // uploads train data to the database
    database.ref().push(newTrain);

    // logs all info to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

    // clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time-input").val("");
    $("#frequency-input").val("");
});

// creates firebase event for adding train to the database and a row in the html when a user adds a new train's information
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    

    // logging everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().firstTrain);
    console.log(snapshot.val().frequency);

    // linking html diplay to reflect what user inputs
    $("#train-name-display").text(snapshot.val().trainName);
    $("#destination-display").text(snapshot.val().destination);
    $("#next-arrival-display").text(snapshot.val().firstTrain);
    $("#frequency-display").text(snapshot.val().frequency);

}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});