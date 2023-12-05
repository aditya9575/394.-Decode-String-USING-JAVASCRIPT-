# 394.-Decode-String-USING-JAVASCRIPT-
Given an encoded string, return its decoded string.  The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.




Code Explanation:
The provided JavaScript code implements a string decoding algorithm, primarily designed to decode strings containing encoded information. It utilizes two stacks, numStack and charStack, to keep track of numbers and characters during the decoding process.

The code iterates through each character of the input string s using a for loop.

If the current character is not a closing bracket ']', it checks whether it's a number or a character.

If it's a number, the code extracts the entire multi-digit number and pushes it onto the numStack.
If it's a character, it is pushed onto the charStack.
When a closing bracket ']' is encountered, the code processes the characters enclosed within the corresponding opening bracket '['.

It pops characters from the charStack until an opening bracket '[' is reached, creating the substring to be repeated.
It pops the opening bracket '[' from the charStack.
The code retrieves the repeat number from the numStack.

It repeats the substring the specified number of times and pushes the result back onto the charStack.

After processing the entire input string, the code concatenates all the strings in the charStack to obtain the final decoded string.

The final decoded string is returned.

GitHub Repository Description:
String Decoding Algorithm

This repository contains a JavaScript implementation of a string decoding algorithm. The algorithm efficiently decodes strings containing encoded information within square brackets. It uses a stack-based approach to handle both numbers and characters during the decoding process.

Features:
Efficient Decoding: The algorithm efficiently decodes strings with a focus on handling multi-digit numbers and repeating substrings enclosed within square brackets.

Clear Stack Management: Utilizes two stacks (numStack and charStack) to maintain clarity in managing numeric and character information during decoding.


// Example Usage:
const encodedString = "3[a2[b]c]";
const decodedString = decodeString(encodedString);
console.log(decodedString); // Output: "abbcbbaabbcbbaabbcbc"
How to Contribute:
Contributions to enhance performance, handle edge cases, or improve documentation are welcome! Please fork the repository, create a feature branch, and submit a pull request.

License:
This project is licensed under the MIT License - see the LICENSE.md file for details.

Feel free to customize the repository description based on additional features, use cases, or specific instructions for contributing.
