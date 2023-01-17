export function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");
    if (nums.length > 0) {
        for (let i = 0; i < nums.length; i++) {
            nums[i] = nums[i] ** 2;
        }
        return nums;
    } else return nums;
}

export function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");
    let newWord = "";

    for (let i = 0; i < words.length; i++) {
        if (i == 0) {
            newWord += words[i];
        } else if (i > 0) {
            newWord += words[i][0].toUpperCase() + words[i].substring(1);
        } else break;
    }
    return newWord;
}

export function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
    let num = 0;

    for (let i = 0; i < people.length; i++) {
        if (people[i]["subjects"].length > 0) {
            for (let j = 0; j < people[i]["subjects"].length; j++) {
                num++;
            }
        }
    }
    return num;
}

export function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");

    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i]["ingredients"].length; j++) {
            if (menu[i]["ingredients"][j] == ingredient) {
                return true;
            }
        }
    }
    return false;
}

export function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    // Your code here!
}