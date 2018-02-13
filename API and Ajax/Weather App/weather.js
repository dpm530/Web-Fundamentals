$(function(){
   $("form").submit(function(){
      var api_id="39d6fc076776afceb21a2c2769a73514"
      var input=$("#city").val();
      $.get("http://api.openweathermap.org/data/2.5/weather?q="+input+"&units=imperial&appid="+api_id, function(res){
         var html_a=""
         html_a+="<h1>"+res.name+"</h1>"
         html_a+="<h3>Temperature: "+res.main.temp+"°F</h3>"
         $('#response').html(html_a)
      }, 'json')
      return false;
   })
})
