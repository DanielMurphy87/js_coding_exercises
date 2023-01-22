export const findNextNumber = (nums, n) => {
    if (nums === undefined) throw new Error("nums is required");
    if (n === undefined) throw new Error("n is required");

    const nextNumIndex = nums.findIndex((num, i) => num === n && i !== nums.length - 1);
    return nextNumIndex === -1 ? null : nums[nextNumIndex + 1];
};

export const count1sand0s = (str) => {
    if (str === undefined) throw new Error("str is required");
    const count = { 1: 0, 0: 0 };
    str.split('').forEach(char => count[char] ? count[char]++ : count[char] = 1);
    return count;
};

export const reverseNumber = (n) => {
    if (n === undefined) throw new Error("n is required");
    return parseInt(n.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
    if (arrs === undefined) throw new Error("arrs is required");
    let sum = 0;

    arrs.forEach(arr => {
        arr.forEach(num => {
            sum += num;
        });
    });
    return sum;
};

export const arrShift = (arr) => {
    if (arr === undefined) throw new Error("arr is required");
    const newArr = [...arr];

    [newArr[0], newArr[newArr.length - 1]] = [newArr[newArr.length - 1], newArr[0]];
    return newArr;
};

export const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");

    return Object.values(haystack).some(val => val.toString().toLowerCase().includes(searchTerm.toLowerCase()));
};

export const getWordFrequencies = (str) => {
    if (str === undefined) throw new Error("str is required");
    const cleanedString = str.toLowerCase().replace(/[^\w\s]/gi, '');
    const wordList = cleanedString.split(" ");
    let wordFrequency = {};

    wordList.forEach((word) => {
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    });
    return wordFrequency;
};