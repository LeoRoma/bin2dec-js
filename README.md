# Description

- First exercise from https://github.com/ImraanMeyer/app-ideas.
- To build the followed application I have used Test Driven Development (TDD) with red-green-refactor cycle.

# User Stories

- User can enter up to 8 binary digits in one input field. (complete)
- User must be notified if anything other than a 0 or 1 was entered. (complete)
- User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered. (complete)

# Instructions

- Open your terminal.
- Clone the repository in a folder by typing: ```git clone https://github.com/LeoRoma/bin2dec-js.git```.
- Type ```cd bin2dec-js``` to move folder.
- Run ```npm install``` to install the dependencies.
- Run ```npm test``` to check the tests.

# Approach

- I have created a class BinaryConverter, in case I needed to refactor or implement more functions.
- I have implemented the class BinaryConverter with ```input()``` function.
- I have started with first checking if the function was working.
- After I started to check the edge cases, such as the input cannot take more than 8 digits and the input is invalid if is not 0 and 1.
- Once the edge cases were done I have created a loop to calculate the decimals.
- I have extracted the loop in ```convert()``` function for refactoring.