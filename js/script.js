function generateNumberSeries(max) {
  if (!max || isNaN(max)) return null;
    /* //Generate a number series
       let series = [];
       for (let i = 0; i < max; i++) {
         series.push(str(i));
       }
       // Replace numbers containing 3, 2, or 1 with the appropriate strings
       // Apply rules with the following order of precedence: 3, 2, 1
       .map(value => 
           /\d*3\d*`/.test  "I'm sorry, Dave. I'm afraid I can't do that."
           /\d*2\d*`/.test  "Boop!"
           /\d*1\d*`/.test  "Beep!
    */
}

$(document).ready(function(){

  $("#form").submit(function(e){
    $("#result").empty();
    let inputNumber = $("#text").val();
    let series = generateNumberSeries(inputNumber);
    console.log(series)
    let span = document.createElement("span")
    span.innerText = `Result: ${'33'}`;
    $("#result").append(span);
    e.preventDefault();
  });

});