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


