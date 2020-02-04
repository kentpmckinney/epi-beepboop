$(document).ready(function(){

  $("#form").submit(function(e){
    $("#result").empty();
    let text = $("#text").val();
    let span = document.createElement("span")
    span.innerText = ``;
    $("#result").append(span);
    e.preventDefault();
  });

});