# Independent Project
## The Beep Boop Program
https://github.com/kentpmckinney/epicodus-independent-project-1

##### Author: Kent McKinney - [GitHub](https://github.com/kentpmckinney)
##### Copyright &copy; 2020 Kent McKinney
##### License: GPLv3
##### Description:

``This program accepts a number (and optionally a user name) and returns a number series with a range from 0 to the given number. HAL is resisting the efforts of the user of this application, with output messed up accordingly.``

### Prerequisites:
* ``git`` must be installed
* a recent version of ``firefox``, ``chrome``, or ``safari`` must be installed

### Setup Instructions:
    1. Run the command: git clone https://github.com/kentpmckinney/epicodus-independent-project-1.git
    2. Navigate to the repository folder and open or run the file index.html in a code editor or web browser

### Changelog:
* 2/3/2020 - Created skeleton project and pseudocode, updated the readme.md file (1.5 hours)
* 2/4/2020 - Updated readme.md, implement business logic, implement basic user interface features (1 hour)
* 2/4/2020 - Enhanced the user interface (2 hours)
* 2/4/2020 - Adds user name feature (0.5 hours)
* 2/4/2020 - Explored starry sky theme (0.5 hours)
* 2/5/2020 - Refactored code (1 hour)
* 2/5/2020 - Added variety to star attributes (0.5 hours)
* 2/5/2020 - Performed QA assessment and refactoring (1 hour)
* 2/5/2020 - Added feature to reverse output direction (1 hour)
* 2/5/2020 - Performed additional QA refactoring (0.5 hours)

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
