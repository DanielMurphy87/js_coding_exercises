export const findNextNumber = (nums, n) => {
    if (nums === undefined) throw new Error("nums is required");
    if (n === undefined) throw new Error("n is required");

    const index = nums.findIndex(num => num == n);
    if (index === -1) {
        return null;
    }
    if (index === nums.length - 1) {
        return null;
    }
    return nums[index + 1];
};

export const count1sand0s = (str) => {
    if (str === undefined) throw new Error("str is required");
    let count1s = 0;
    let count0s = 0;

    str.split('').forEach(char => {
        if (char === "1") {
            count1s++;
        } else if (char === "0") {
            count0s++;
        }
    });
    return {
        1: count1s,
        0: count0s
    };
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
    let newArr = [...arr];

    [newArr[0], newArr[newArr.length - 1]] = [newArr[newArr.length - 1], newArr[0]];
    return newArr;
};

export const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");

    return Object.values(haystack).some(val => val.toString().toLowerCase().includes(searchTerm.toLowerCase()))
};

export const getWordFrequencies = (str) => {
    if (str === undefined) throw new Error("str is required");
    // Your code here!
};