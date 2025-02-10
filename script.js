function convertToRoman(num) {
    const obj = [
        ['M', 1000], ['CM', 900],
        ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90],
        ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9],
        ['V', 5], ['IV', 4],
        ['I', 1]
    ];

    let result = "";

    for (let i = 0; i < obj.length; i++) {
        while (num >= obj[i][1]) {
            result += obj[i][0]; // Append the Roman numeral
            num -= obj[i][1]; // Subtract the corresponding value
        }
    }

    return result;
}

// Example usage:
console.log(convertToRoman(14));  // Output: "XIV"
console.log(convertToRoman(798)); // Output: "DCCXCVIII"
console.log(convertToRoman(3999)); // Output: "MMMCMXCIX"
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
