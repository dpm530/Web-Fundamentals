$(document).ready(function(){
   $("form").submit(function(){
      return false;
   })

   $("button").click(function(){
      var fname= $("#firstName").val();
      var lname= $("#lastName").val();
      var email= $("#email").val();
      var number= $("#number").val();

      var answer="<tr>"+
      "<td>"+fname+"</td>"+
      "<td>"+lname+"</td>"+
      "<td>"+email+"</td>"+
      "<td>"+number+"</td>"+
      "</tr>";
      $("#table").append(answer);

      $("#firstName").val("");
      $("#lastName").val("");
      $("#email").val("");
      $("#number").val("");

   });
});
