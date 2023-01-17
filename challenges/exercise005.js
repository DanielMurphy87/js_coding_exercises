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
    // Your code here!
};

export const sumArrays = (arrs) => {
    if (arrs === undefined) throw new Error("arrs is required");
    // Your code here!
};

export const arrShift = (arr) => {
    if (arr === undefined) throw new Error("arr is required");
    // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");
    // Your code here!
};

export const getWordFrequencies = (str) => {
    if (str === undefined) throw new Error("str is required");
    // Your code here!
};