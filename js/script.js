/* ****************************************************************************************
  BUSINESS LOGIC
*/


/*
  Creates a number series
  HAL messes with the output by replacing certain numbers with text messages
*/
function generateNumberSeries(max, name) {

  // Input validation
  max = parseInt(max);
  if (max === null || isNaN(max)) return ["Error: Invalid number entered","Please try again"];
  if (name === null || name == "") name = "Dave";

  // Generate a number series from zero up to and including the input number
  let series = [];
  for (let i = 0; i <= max; i++) {
    let number = i.toString();
    series.push(number);
  }

  // Iterate through the array and conditionally map new values based on regex testing
  series = series.map(function(number){
    if (/\d*3\d*/.test(number)) return `I'm sorry, ${name}. I'm afraid I can't do that.`;
    else if (/\d*2\d*/.test(number)) return "Boop!"
    else if (/\d*1\d*/.test(number)) return "Beep!"
    else return number;
  });

  return series;
}


/*
  Generates a random number from zero to max
*/
function rand(max) { return Math.floor(Math.random() * (max+1)); }





/* ****************************************************************************************
  USER INTERFACE
*/


/*
  Creates a star with random attributes
*/
function createStar() {
  let star = $("<div />");
  let size = rand(2)+1;
  star.addClass("star");
  star.css("animation-name", `star-style-${rand(3)}`);
  star.css("animation-duration", `${rand(5)}s`);
  star.css("top", rand($(window).height()));
  star.css("left", rand($(window).width()));
  star.css("height", `${size}px`);
  star.css("width", `${size}px`);
  star.css("background-color", `hsla(60, 100%, 50%, ${rand(10)/10+0.01})`);
  star.css("z-index", -1);
  return star;
}


/*
  $(document).ready() executes after the page loads
*/
$(document).ready(function(){


  /* 
    Responds to window resizes
    Create a starry sky
  */
  $(window).on('resize', function(){
    $("#star-container").empty();
    for (let i = 0; i < 100; i++) {
      $("#star-container").append(createStar());
    }
  });


  /*
    Responds to key presses on the input field
  */
  $('#number').bind('keypress',function(e) {
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


  /*
    Responds to presses of the submit button
  */
  $("#form").submit(function(e){
    
    // Get input from the user interface
    let inputNumber = $("#number").val();
    let inputName = $("#name").val();

    // Clear existing output text from the user interface
    $("#hal-display").empty();

    // Perform business logic
    let series = generateNumberSeries(inputNumber, inputName);
    
    // Output number series to the user interface
    series.forEach(function(value){
      let div = document.createElement("div")
      div.innerText = `${value}`;
      $("#hal-display").append(div);
    });

    // Prevent screen refresh on form submission
    e.preventDefault();
  });


  // Trigger the window resize event
  $(window).trigger('resize');

});