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
  var trainDestination = "";
  var firstTrainTime = 0;
  var nextArrival = 0;
  var minutesAway = 0;

  // capture button clicks for adding a train
$("#add-train").on("click", function(event) {
    event.preventDefault();

    trainName = $("#train-name-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    firstTrainTime = $("#first-train-time-input").val().trim();
    trainFrequency = $("#frequency-input").val().trim();

    database.ref().set({
        trainName: trainName,
        trainDestination: trainDestination,
        firstTrainTime: firstTrainTime,
        trainFrequency: trainFrequency
    });
});

// firebase initial loader 
database.ref().on("value", function(snapshot) {

    // logging everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().trainDestination);
    console.log(snapshot.val().firstTrainTime);
    console.log(snapshot.val().trainFrequency);
})