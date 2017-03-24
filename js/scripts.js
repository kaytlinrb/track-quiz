$(function() {
  
  $("#track-form").submit(function(event) {
    event.preventDefault();
    var question1= $("#development").val();
    var question2= $("#produce").val();
    var question3= $("#workplace").val();
    var question4= $("#object-orientation").val();
    var question5= $("#product").val();
    var userName= $("#user-name").val();

    if ((question1 === "frontend") && (question5 === "design")) {
      $("form, hr").hide();
      $("#css").show();
    } else if ((question1 === "backend") && (question3 === "startup")) {
      $("form, hr").hide();
      $("#ruby").show();
    } else if ((question3 === "large-business") && (question2 === "soft")) {
      $("form, hr").hide();
      $("#csharp").show();
    } else {
      $("form, hr").hide();
      $("#any").show();
    }

    $("span.name").text(userName);

  });
});
