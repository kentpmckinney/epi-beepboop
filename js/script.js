function generateNumberSeries(max) {

  // Input validation
  if (!max || isNaN(max)) return null;

  // Generate a number series from zero up to and including the input number
  let series = [];
  for (let i = 0; i <= max; i++) {
    let number = i.toString();
    series.push(number);
  }

  // Iterate through the array and conditionally map new values based on regex testing
  series = series.map(function(number){
    if (/\d*3\d*/.test(number)) return "I'm sorry, Dave. I'm afraid I can't do that.";
    else if (/\d*2\d*/.test(number)) return "Boop!"
    else if (/\d*1\d*/.test(number)) return "Beep!"
    else return number;
  });

  return series;
}

$(document).ready(function(){

  $("#form").submit(function(e){
    
    // Clear existing data from the user interface
    $("#hal").empty();

    let inputNumber = $("#text").val();

    // Perform business logic
    let series = generateNumberSeries(inputNumber);
    
    // Output number series to the user interface
    series.forEach(function(value){
      let div = document.createElement("div")
      div.innerText = `${value}`;
      $("#hal").append(div);
    });

    // Prevent screen refresh on form submission
    e.preventDefault();
  });

});