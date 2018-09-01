$(document).ready(function() {
    if ($('#submit').length > 0 ) {
        contactScript('forcontact');
    }
});
document.getElementById(contactForm).addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();


//get values
var name = getInputValue('name');
var email = getInputValue('email');
var note = getInputValue('note');

console.log(name);
}


function getInputVal(id){
    return document.getElementById(id).value;

}

<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqoLntgM0rvHPZkkFbytPuh1Qf8krR9wQ",
    authDomain: "contact-page-1c2fb.firebaseapp.com",
    databaseURL: "https://contact-page-1c2fb.firebaseio.com",
    projectId: "contact-page-1c2fb",
    storageBucket: "contact-page-1c2fb.appspot.com",
    messagingSenderId: "42781243222"
  };
  firebase.initializeApp(config);
  var b = firebase.database().ref("messages");
        $("#submit").submit(function(a) { $(this), console.log("Submit to Firebase");
        var c = $("#name").val(),
            d = $("#email").val(),
            f = { name: c, email: d};
        return b.push(f).then(function(a) { 
            $(".sucess").css("display", "block"), 
            $(".sucess-none").css("display", "none") }), !1
         })