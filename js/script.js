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

  // Respond to key presses on the input field
  $('#input').bind('keypress',function(e) {
    let event = e || window.event;
    let keycode = event.keyCode || event.which;
    let key = String.fromCharCode(keycode);

    // Respond to the ENTER key
    if(keycode == '13') $("#form").submit();

    // Filter out key presses for invalid characters
    let invalid = /\D/;
    if (invalid.test(key)) {
        e.preventDefault();
        return;
    }
  });

  $("#form").submit(function(e){
    
    // Clear existing data from the user interface
    $("#hal-display").empty();

    // Hide the introductory text
    // $("#intro").hide();

    // Get and validate input from the user interface
    let inputText = $("#input").val();
    let inputNumber = parseInt(inputText);
    if (inputNumber <= 0) return null;

    // Perform business logic
    let series = generateNumberSeries(inputNumber);
    
    // Output number series to the user interface
    series.forEach(function(value){
      let div = document.createElement("div")
      div.innerText = `${value}`;
      $("#hal-display").append(div);
    });

    // Prevent screen refresh on form submission
    e.preventDefault();
  });

});