function dosomething(value) {
  if (!value || isNaN(value)) return null;

  // Pseudocode:
    // Generate a number series
      // For loop
    // Filter values and replace with strings
      // .filter(value => 
      //   return value.replace(/\D?(\d+)\D?/, function(m, c){
      //     return /\d*3\d*/.test(c) ? "I'm sorry, Dave. I'm afraid I can't do that." :
      //       /\d*2\d*/.test(c) ? "Boop!" :
      //       /\d*1\d*/.test(c) ? "Beep! : c;
      // }));
    // Output array as string
      // Join with newline

  /*
  Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

      Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
      Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
      Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

  These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

      The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
      The number 21 should be replaced with "Boop".
      The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

  A user should be able to enter a new number and see new results over and over again.

  Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "I'm Sorry...", 4, 5
  */

}

$(document).ready(function(){

  $("#form").submit(function(e){
    dosomething()
    dosomething("343")
    dosomething("john")
    $("#result").empty();
    let text = $("#text").val();
    let span = document.createElement("span")
    span.innerText = `Result: ${dosomething(text)}`;
    $("#result").append(span);
    e.preventDefault();
  });

});