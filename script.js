function unlockBike(){

let message = document.getElementById("message");
let map = document.getElementById("map-section");
let nav = document.getElementById("navigation-section");

message.innerHTML = "🔓 Bike Unlocked! Enjoy your ride.";
message.style.color = "lightgreen";

map.style.display = "block";
nav.style.display = "block";

map.scrollIntoView({behavior:"smooth"});

}

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("location-text").innerHTML =
"📍 Your Location: " + lat + ", " + lon;

});

}else{

alert("Geolocation not supported");

}

}

function showDestination(){

let dest = document.getElementById("destination").value;

let map = document.querySelector("#map-section iframe");

map.src = "https://maps.google.com/maps?q=" + dest + "&t=&z=13&ie=UTF8&iwloc=&output=embed";

}