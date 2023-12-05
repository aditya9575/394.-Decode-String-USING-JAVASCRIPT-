/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let finalAnswer = "";
    const numStack = [];
    const charStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            // Check condition for numbers
            if (!isNaN(parseInt(s[i]))) {
                let num = 0;
                while (!isNaN(parseInt(s[i]))) {
                    num = num * 10 + parseInt(s[i]);
                    i++;
                }
                i--; // Decrement i to account for the extra increment in the loop
                numStack.push(num);
            } else {
                // If it's a character
                charStack.push(s[i]);
            }
        } else {
// If we encounter a closing bracket, pop everything from the charStack and store it
            let charStr = "";  
            while (charStack.length > 0 && charStack[charStack.length - 1] !== '[') {
                charStr = charStack.pop() + charStr;
            }

            // Pop the opening bracket '['
            charStack.pop();

            // Get the repeat number from numStack
            const repeatNum = numStack.pop();

            // Repeat the characters and push back to charStack
            const repeatedStr = charStr.repeat(repeatNum);
            charStack.push(repeatedStr);
        }
    }

    // Concatenate all strings in charStack to get the final answer
    finalAnswer = charStack.join("");
    return finalAnswer;
};


