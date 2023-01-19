export function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error("ingredients is required");
    return sandwich["fillings"];
}

export function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    return person.city === "Manchester";
}

export function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    if (people % 40 !== 0) {
        return Math.floor(people / 40) + 1;
    }
    return Math.floor(people / 40);
}

export function countSheep(arr) {
    if (arr === undefined) throw new Error("arr is required");
    let sheep = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "sheep") {
            sheep++;
        }
    }
    return sheep;
}

export function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    let postCode = person["address"]["postCode"];

    if (postCode[0] === "M") {
        // Check if second character is a number using RegEx.
        if (/^\d$/.test(postCode[1])) {
            return true;
        } else return false;
    } else return false;
}