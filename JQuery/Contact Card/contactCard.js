$(function(){
   $("#selector").click(function(){
      var fname= $("#firstName").val();
      var lname= $("#lastName").val();
      var description= $("textarea").val();
      $(".contactCards").append("<div class='card'><h3>"+fname+" "+lname+"</h3><p id='back'>"+description+"</p></div>")
   $(document).on("click",".card", function(){
      $(this).children().toggle();
   })
      return false;
   });
});
