const firebaseConfig = {
    apiKey: "AIzaSyAtb5xuOtcei3hodymXCJhKgyXrDEbZ5G0",
    authDomain: "kwitter-54d0f.firebaseapp.com",
    databaseURL: "https://kwitter-54d0f-default-rtdb.firebaseio.com",
    projectId: "kwitter-54d0f",
    storageBucket: "kwitter-54d0f.appspot.com",
    messagingSenderId: "193829415901",
    appId: "1:193829415901:web:b2ddb9a59eda597d472434"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();