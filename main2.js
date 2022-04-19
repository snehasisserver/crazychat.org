var firebaseConfig = {
    apiKey: "AIzaSyAqgqA96mJJx8Iwgjhu8BK_YRuNHxp_bvk",
    authDomain: "socialprojectdatabase.firebaseapp.com",
    databaseURL: "https://socialprojectdatabase-default-rtdb.firebaseio.com",
    projectId: "socialprojectdatabase",
    storageBucket: "socialprojectdatabase.appspot.com",
    messagingSenderId: "495778207724",
    appId: "1:495778207724:web:e987e60f425d1d7d05d2c9"
  };

  
  firebase.initializeApp(firebaseConfig);

    var o = localStorage.getItem("user_name_of_project2");
    document.getElementById("welcome").innerHTML = "Welcome " + o + " !";
    function add(){
        
        room_name = document.getElementById("group_input").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_ename",room_name);
      window.location="roompage.html";
    }
    function logout(){
      localStorage.removeItem("user_name_of_project2");
      window.location="index.html"
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code

     console.log("The room name is : " + Room_names);
     row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();
function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_ename",name);
   window.location="roompage.html";
}


