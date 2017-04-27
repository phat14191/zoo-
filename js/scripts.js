//Back End Logic
var time_spent = function(time) {
  //if over 30
 if (time > 30) {
   $("#over-30").show();
   $("#exact-30").show();
   $("#under-30").show();
 }
 //if exactly 30
 else if (time === 30) {
   $("#exact-30").show();
   $("#under-30").show();
 }
 //if under 30
 else {
   $("#under-30").show();
 }
};



//Front End
$(document).ready(function() {
  //click each photo for slide information
  $("#giraffe").click(function(){
    //when img is clicked, p is toggled
      $("#giraffe-info").slideToggle();
  });

  $("#bear").click(function(){
    $("#bear-info").slideToggle();
  });

  $("#lion").click(function(){
    $("#lion-info").slideToggle();
  });

  $("#zebra").click(function(){
    $("#zebra-info").slideToggle();
  });

  $("#dolphin").click(function(){
    $("#dolphin-info").slideToggle();
  });

  $("#falcon").click(function(){
    $("#falcon-info").slideToggle();
  });

  //prompts user for time, stores time in variable, calls time_spent function.
  var time = parseInt(prompt("How much time do you have? (in minutes)"));
  var exhibits_seen = time_spent(time);
});
