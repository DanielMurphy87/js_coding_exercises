export function findSmallNums(nums) {
    if (!nums) throw new Error("nums is required");
    let newNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 1) {
            newNums.push(nums[i]);
        }
    }
    return newNums;
}

export function findNamesBeginningWith(names, char) {
    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");
    let newNames = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i][0] == char) {
            newNames.push(names[i]);
        }
    }
    return newNames;
}

export function findVerbs(words) {
    if (!words) throw new Error("words is required");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].slice(0, 3) == "to ") {
            newWords.push(words[i]);
        }
    }
    return newWords;
}

export function getIntegers(nums) {
    if (!nums) throw new Error("nums is required");
    let newNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (Number.isInteger(nums[i])) {
            newNums.push(nums[i]);
        }
    }
    return newNums;
}

export function getCities(users) {
    if (!users) throw new Error("users is required");
    let newUsers = [];

    for (let i = 0; i < users.length; i++) {
        newUsers.push(users[i]["data"]["city"]["displayName"]);
    }
    return newUsers;
}

export function getSquareRoots(nums) {
    if (!nums) throw new Error("nums is required");
    let newNums = [];

    for (let i = 0; i < nums.length; i++) {
        let temp = Math.sqrt(nums[i]);

        if (temp % 1 != 0) {
            temp = parseFloat(temp.toFixed(2));
        }
        newNums.push(temp);
    }
    return newNums;
}

export function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error("sentences is required");
    if (!str) throw new Error("str is required");
    let newSentences = [];

    for (let i = 0; i < sentences.length; i++) {
        let senten = sentences[i].toLowerCase();
        let stri = str.toLowerCase();
        if (senten.includes(stri)) {
            newSentences.push(sentences[i]);
        }
    }
    return newSentences;
}

export function getLongestSides(triangles) {
    if (!triangles) throw new Error("triangles is required");
    let newTriangles = [];

    for (let i = 0; i < triangles.length; i++) {
        newTriangles.push(Math.max(...triangles[i]));
    }
    return newTriangles;
}