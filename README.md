<!-- Category: Epicodus;HTML/CSS/JS -->
<!-- Portfolio: Yes -->

# Beep Boop

This program accepts a number (and optionally a user name) and returns a number series with a range from 0 to the given number. HAL is resisting the efforts of the user of this application, with output messed up accordingly.

https://github.com/kentpmckinney/epi-beepboop

## Previewing this Project

This project is hosted at: https://kentpmckinney.github.io/epi-beepboop

## Working with the Source Code

The following instructions explain how to set up a development environment for this project on MacOS. Steps will differ depending on the operating system.

### Prerequisites

The following software must be installed and properly configured on the target machine. 

```
An updated web browser (Internet Explorer is not compatible)
```
```
Git (optional but recommended)
```

### Setting up a Development Environment

1. Download a copy of the source code from: https://github.com/kentpmckinney/epi-beepboop
   or clone using the repository link: https://github.com/kentpmckinney/epi-beepboop.git
2. Navigate to the folder location of the source files in Finder or in the Terminal
3. Launch a web browser so that it opens index.html

## Deployment

Source files are deployable as-is

## Technologies Used

* JavaScript
* HTML
* CSS

## Authors

Kent McKinney - [GitHub](https://github.com/kentpmckinney) - [LinkedIn](https://www.linkedin.com/in/kentpmckinney/)

### Copyright &copy; 2020 Kent P. McKinney

## Acknowledgments

https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-jquery/javascript-and-jquery-independent-project

### Specifications:

| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **Rule: output numbers that contain a 3 are replaced with text** | All Digits (Takes precedence over the rules for numbers containing 1 and 2) | "I'm sorry, Dave. I'm afraid I can't do that." |
| **Rule: output numbers that contain a 2 are replaced with text** | All Digits (Takes precedence over the rule for numbers containing 1) | "Boop!" |
| **Rule: output numbers that contain a 1 are replaced with text** | All Digits | "Beep!" |
| **Program accepts an integer greater than or equal to zero and returns a series from 0 to the input number with exceptions listed below** | 5 | "0", "Beep!", "Boop", "I'm Sorry...", 4, 5 |
| **Program handles an empty or invalid number and presents an error message to the user** | "" | "Error: Invalid number entered","Please try again" |
| **Program accepts a user name and personalizes output with that name** | 3, 'Kent' | "0", "Beep!", "Boop", "I'm sorry, Kent. I'm afraid I can't do that." |
| **Program replaces an empty or invalid user name with a default name** | "" | "Dave" |
| **Program adds a sort up/down arrow icon and reverses the order of output if the arrow is down** | arrow icon is down | output starts at the highest number |
| **Program cancels keypresses to the input field that are not numbers** | non-numeric charcters | do not get entered into the number input field |
| **Program responds to the ENTER key in the number input field** | ENTER | does the same thing as the Submit button |
| **Program clears old output prior to displaying new output** | old output | gets cleared when new output is displayed |