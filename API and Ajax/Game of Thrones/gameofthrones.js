$(function(){
   $(document).on("click","img", function(){
      var banner=this.id;
      // $.get("http://anapioficeandfire.com/api/houses/"+banner, function(res){
      //    var html_a=""
      //    html_a+="<h3>"+res.name+"</h3>"
      //    $("#bottom").html(html_a);
      // });

      $.ajax({
         url: "https://anapioficeandfire.com/api/houses/"+banner,
         type: "GET",
         crossDomain: true,
         headers: { 'Access-Control-Allow-Origin': '*' },
         dataType: "json",
         success: function(res) {
            var html_a=""
            html_a+="<h3>"+res.name+"</h3>"
            $("#bottom").html(html_a);
         },
         error: function(xhr, status) {
            console.log(xhr);
            // console.log(status);
         }
      })
   })
})
