$(function(){
   for (var i=1;i<=151;i+=1){
      $("#left").append("<img id="+i+" src=http://pokeapi.co/media/img/"+i+".png>")
   };
   $(document).on("click","img",function(){
      var current=this.id;
      $.get("http://pokeapi.co/api/v1/pokemon/"+current+"/", function(res) {
         var html_a=""
         html_a+="<h1>"+res.name+"</h1>"
         html_a+="<img src=http://pokeapi.co/media/img/"+current+".png>"
         html_a+="<p>Height: "+res.height+"</p>"
         html_a+="<p>Weight: "+res.weight+"</p>"
         html_a+="<h4>Types:</h4>"
         html_a+="<ul>"
         for(var i=0;i<(res.types).length;i+=1){
            html_a+="<li>"+res.types[i].name+"</li>"
         }
         html_a+="</ul>"
         $('#right').html(html_a);
       }, "json");
   })

});
