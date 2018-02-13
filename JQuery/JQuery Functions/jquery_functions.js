$(document).ready( function() {
   $("h1").hide(1000).show(1000);
   $("#b1").on("click", function(){
      $(".box").slideToggle(1000).slideDown(1000);
   });
   $(".b2").on("click", function(){
      $(".box").toggle(1000).fadeIn(1000);
   });
   $(".b3").on("click", function(){
      $(".box .one h2").fadeOut(1000).toggle();
   });
   $("#b4").click(function(){
      $("p").toggle(1000).html("New Text");
   });
   $(".b5").click(function(){
      $("#sd").append("!");
   });
   $(".b6").click(function(){
      $("img").slideUp().toggle();
   });
   $(".b7").click(function(){
      $("h2").addClass("blue");
   });
   $("img").attr("alt",
   "picture");
   $(".b8").click(function(){
      $(".one h2").before("<p>New Text <strong>BEFORE</strong> h2.</p>");
      $(".one h2").after("<p>New Text <strong>AFTER</strong> h2.</p>");
   });
   $("input").val("Insert Text");
   $("#sd").data("Do Not Push!");
   $(".b9").click(function(){
      $(".three h2").text("New Title");
   });
   $("#sd").click(function(){
      $("div:not(#sd)").hide();
   });
});
