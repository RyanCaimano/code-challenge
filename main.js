// #1 Write a function that finds the sum of an array of numbers and that returns a number
const findSum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}



// #4 Write a function that takes an array of integers and finds the pair of adjacenet elements that has the largest product and return that product
const largestPair = function (array) {
    let maxProduct = 0;
    // we need to do (n-1) iterations since the last element's product has already been evaluated in the previous run
    for (let i = 0; i < array.length - 1; i++) {
        let productPair = array[i] * array[i + 1];
        if (productPair > maxProduct) {
            maxProduct = productPair;
        }
    }
    return maxProduct;
}


// #3 Write a function that determines the truth value of a word being a palindrome
const isPalindrome = function (str) {
    let comparisons = Math.floor(str.length / 2);
    for (let i = 0; i < comparisons; i++) {
        if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('canal'));


// #5 Write a function that removes all the characters between the open and closing parentheses of a sentence
const removeParenth = function (str) {
    // to remove a substring that is embodied in parentheses, we first need to locate the index of the open parenthesis and the index of the closing parenthesis
    let openIndex = str.indexOf('(');
    let closeIndex = str.indexOf(')');
    return str.substring(0, openIndex) + str.substring(closeIndex + 1);
}

// #2 Write a function to find the most frequent and least frequent item in an array of strings
const findFrequency = function (array) {
    let frequency = {};

    for (let i = 0; i < array.length; i++) {
        let character = array[i];
        if (frequency[character] != null) {
            frequency[character]++;
        } else {
            frequency[character] = 1;
        }
    }

    return frequency;
};

// #6 
const scoreScrabble = function (str) {
    let score = 0;
    const points = {
        'a': 1,
        'b': 3,
        'c': 3,
        'd': 2,
        'e': 1,
        'f': 4,
        'g': 2,
        'h': 4,
        'i': 1,
        'j': 8,
        'k': 5,
        'l': 1,
        'm': 3,
        'n': 1,
        'o': 1,
        'p': 3,
        'q': 10,
        'r': 1,
        's': 1,
        't': 1,
        'u': 1,
        'v': 4,
        'w': 4,
        'x': 8,
        'y': 4,
        'z': 10,
    };

    for (let i = 0; i < str.length; i++) {
        score += points[str.charAt(i)];
    }

    return score;
}
