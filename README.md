# Train-Scheduler

**Link to page: https://joditivis.github.io/Train-Scheduler/**

# About:
University of Denver Coding Bootcamp seventh week assignment: Required us to create a Train Scheduler using Firebase real-time database and API.

# How It Works:
- Make up your own European train
- Enter the destination you wish to travel to
- Make up a time for the first train of the day to arrive and how frequently you want the train to come to the station
- Once you enter all of these fields, it will then calculate how many minutes away the next train is based on the first trains arrival time and its frequency

# Tools + Languages Used:
* HTML - markup language
* CSS -styling
* Bootstrap - web styling framework
* Google Fonts
* JavaScript - programming language
* Firebase real-time data-base
* Moment.js - javascript library

# Using and setting up firebase configuration in your .js file:

You will have to create your own app within Firebase to generate your own API key.

```javascript
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
```

# Using Moment.js
```javascript
// next train time
    var nextTrain = moment().add(minAway, "minutes");
    nextTrain = moment(nextTrain).format("hh:mm");
```

# Features:
![Image](trainpage.png)
![Image](trainpage2.png)