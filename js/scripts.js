$(function() {
  $("#track-form").submit(function(event) {
    event.preventDefault();
    var question1= $("#development").val();
    var question2= $("#produce").val();
    var question3= $("#workplace").val();
    var question4= $("#object-orientation").val();
    var question5= $("#product").val();

    if ((question1 === "frontend") && (question5 === "design")) {
      $("#css").show();
    } else if ((question1 === "backend") && (question3 === "startup")) {
      $("#ruby").show();
    } else if ((question3 === "large-business") && (question2 === "soft")) {
      $("#csharp").show();
    } else {
      $("#any").show();
    }


  });
});
