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
  var trainName = "";
  var destination = "";
  var frequency = 0;
  var firstTrain = "";

  // capture button clicks for adding a train
$("#add-train").on("click", function(event) {
    event.preventDefault();

    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#first-train-time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    database.ref().set({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    });
});

// firebase initial loader 
database.ref().on("value", function(snapshot) {

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