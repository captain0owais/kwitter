
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCu906z1gwu0EtJaGzYXqtSXaWn69u2p4E",
      authDomain: "kwitter-b92e8.firebaseapp.com",
      databaseURL: "https://kwitter-b92e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-b92e8",
      storageBucket: "kwitter-b92e8.appspot.com",
      messagingSenderId: "368667463803",
      appId: "1:368667463803:web:a880d14ad06514fc8252de"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name_display").innerHTML="Welcome " + user_name + "!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      
      row="<div id="+Room_names+" class='room_name' onClick='redirect_to_room_name(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect_to_room_name(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location="index.html";
}
