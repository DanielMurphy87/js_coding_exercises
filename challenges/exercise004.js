export function findSmallNums(nums) {
    if (!nums) throw new Error("nums is required");

    let newNums = nums.filter(function(item) {
        if (item < 1) {
            return true;
        } else {
            return false;
        }
    });
    return newNums;
}

export function findNamesBeginningWith(names, char) {
    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");

    return names.filter(function(item) {
        if (item.charAt(0) == char)
            return item;
    });
}

export function findVerbs(words) {
    if (!words) throw new Error("words is required");

    return words.filter(function(item) {
        if (item.slice(0, 3) == "to ")
            return item;
    });
}

export function getIntegers(nums) {
    if (!nums) throw new Error("nums is required");

    return nums.filter(function(item) {
        if (Number.isInteger(item))
            return item;
    });
}

export function getCities(users) {
    if (!users) throw new Error("users is required");

    return users.map(function(item) {
        return item["data"]["city"]["displayName"];
    });
}

export function getSquareRoots(nums) {
    if (!nums) throw new Error("nums is required");

    return nums.map(function(item) {
        let temp = Math.sqrt(item);

        if (temp % 1 != 0) {
            temp = parseFloat(temp.toFixed(2));
        }
        return temp;
    });
}

export function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error("sentences is required");
    if (!str) throw new Error("str is required");

    return sentences.filter(function(item) {
        let senten = item.toLowerCase();
        let stri = str.toLowerCase();
        if (senten.includes(stri)) {
            return item;
        }
    });
}

export function getLongestSides(triangles) {
    if (!triangles) throw new Error("triangles is required");

    return triangles.map(function(item) {
        return Math.max(...item);
    });
}