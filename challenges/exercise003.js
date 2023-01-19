export function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");

    return nums.map(num => num ** 2);
}

export function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");

    return words.map((word, index) => {
        if (index === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
    }).join('');
}

export function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");

    return people.reduce((num, person) => num + person.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");

    return menu.some(item => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");

    return [...new Set(arr1.filter(num => arr2.includes(num)))].sort((a, b) => a - b);
}