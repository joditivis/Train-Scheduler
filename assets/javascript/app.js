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
var trainName;
var destination;
var firstTrain;
var frequency = 0;

// capture button clicks for adding a train
$("#add-train").on("click", function (event) {
    event.preventDefault();

    // grabs users input
    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#first-train-time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    // pushing to database
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dataAdded: firebase.database.ServerValue.TIMESTAMP
    });

    // logs all info to console
    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);

    // clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time-input").val("");
    $("#frequency-input").val("");
});

// creates firebase event for adding train to the database and a row in the html when a user adds a new train's information
database.ref().on("child_added", function (childSnapshot) {

    // // storing everything as a variable
    // var trainName = childSnapshot.val().trainName;
    // var trainDestination = childSnapshot.val().destination;
    // var firstTrain = childSnapshot.val().firstTrain;
    // var trainFrequency = childSnapshot.val().frequency;

    // // logging everything that's coming out of snapshot
    // console.log(trainName);
    // console.log(trainDestination);
    // console.log(firstTrain);
    // console.log(trainFrequency);

    // var minAway;

    // change year so first train comes before now
    var firstTrainTime = moment(childSnapshot.val().firstTrain, "hh:mm").subtract(1, "years");

    // difference between the current time and first train arrival
    var timeDiff = moment().diff(moment(firstTrainTime), "minutes");
    var timeRemainder = timeDiff % childSnapshot.val().frequency;

    // minutes until next train arrives
    var minAway = childSnapshot.val().frequency - timeRemainder;

    // next train time
    var nextTrain = moment().add(minAway, "minutes");
    nextTrain = moment(nextTrain).format("hh:mm");

    // linking html diplay to reflect what user inputs
    $("#add-row").append("<tr><td>" + trainName + 
    "</td><td>" + trainDestination + 
    "</td><td>" + trainFrequency + 
    "</td><td>" + nextTrain + 
    "</td><td>" + minAway + "</td></tr>");

    $("#train-table > tbody").append(newRow);

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});