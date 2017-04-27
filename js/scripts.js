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
      //when img is clicked, h2 is toggled
      $("#giraffe-info").slideToggle()
      //when this img is clickeed, hide all other -info's
      $("h2#giraffe-info").siblings("h2").hide();

  });

  $("#bear").click(function(){
    $("#bear-info").slideToggle();
    $("h2#bear-info").siblings("h2").hide();
  });

  $("#lion").click(function(){
    $("#lion-info").slideToggle();
    $("h2#lion-info").siblings("h2").hide();
  });

  $("#zebra").click(function(){
    $("#zebra-info").slideToggle();
    $("h2#zebra-info").siblings("h2").hide();
  });

  $("#dolphin").click(function(){
    $("#dolphin-info").slideToggle();
    $("h2#dolphin-info").siblings("h2").hide();
  });

  $("#falcon").click(function(){
    $("#falcon-info").slideToggle();
    $("h2#falcon-info").siblings("h2").hide();
  });

  //prompts user for time, stores time in variable, calls time_spent function.
  var time = parseInt(prompt("How much time do you have? (in minutes)"));
  var exhibits_seen = time_spent(time);
});
