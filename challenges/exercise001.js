// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
    if (word === undefined) throw new Error("word is required");
    return word[0].toUpperCase() + word.substring(1);
}

export function generateInitials(firstName, lastName) {
    if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");
    return firstName[0] + "." + lastName[0];
}

export function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error("originalPrice is requied");
    if (vatRate === undefined) throw new Error("vatRate is required");
    let newPrice = originalPrice * (vatRate / 100 + 1);
    if (newPrice % 1 !== 0) {
        return parseFloat(newPrice.toFixed(2));
    } else return newPrice;
}

export function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (reduction === undefined) throw new Error("reduction is required");
    let newPrice = originalPrice - (originalPrice * (reduction / 100));
    if (newPrice % 1 !== 0) {
        return parseFloat(newPrice.toFixed(2));
    } else return newPrice;
}

export function getMiddleCharacter(str) {
    if (str === undefined) throw new Error("str is required");
    let len = str.length;
    if (len % 2 === 1) {
        len = (len - 1) / 2;
        return str[len];
    } else return str.substring(len / 2 - 1, len / 2 + 1);
}

export function reverseWord(word) {
    if (word === undefined) throw new Error("word is required");
    return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");
    return words.map(word => word.split('').reverse().join(''));
}

export function countLinuxUsers(users) {
    if (users === undefined) throw new Error("users is required");
    return users.filter(user => user.type === 'Linux').length;
}

export function getMeanScore(scores) {
    if (scores === undefined) throw new Error("scores is required");
    let count = 0;
    let total = 0;
    let mean = 0;

    // Trying out a forEach loop.
    scores.forEach(function(item) {
        total += item;
        count++;
    });
    mean = total / count;
    if (mean % 1 !== 0) {
        return parseFloat(mean.toFixed(2));
    } else return mean;
}

export function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");
    if (n % 15 === 0) {
        return "fizzbuzz";
    } else if (n % 5 === 0) {
        return "buzz";
    } else if (n % 3 === 0) {
        return "fizz";
    } else return n;
}