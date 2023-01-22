import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} from "../challenges/exercise007";

describe('sumDigits', () => {
    test('should return the sum of digits of 123', () => {
        expect(sumDigits(123)).toBe(6);
    });
    test('should return the sum of digits of 1234', () => {
        expect(sumDigits(1234)).toBe(10);
    });
    test('should return the sum of digits of 0', () => {
        expect(sumDigits(0)).toBe(0);
    });
});

describe('createRange', () => {
    test('should return the range [3, 5, 7, 9, 11] when start=3, end=11, step=2', () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    });
    test('should return the range [1, 2, 3, 4, 5] when start=1, end=5, step is not provided', () => {
        expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });
    test('should return the range [2, 4, 6, 8, 10] when start=2, end=10, step=2', () => {
        expect(createRange(2, 10, 2)).toEqual([2, 4, 6, 8, 10]);
    });
    test('should return an empty array when start is greater than end', () => {
        expect(createRange(5, 1)).toEqual([]);
    });
});

describe("getScreentimeAlertList", () => {
    const users = [{
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ],
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ],
        },
    ];

    test("should return an array of usernames of users who have used more than 100 minutes of screen time for a given date", () => {
        const date = "2019-05-04";
        const result = getScreentimeAlertList(users, date);
        expect(result).toEqual(["beth_1234"]);
    });
    test("should return an empty array if no users have used more than 100 minutes of screen time for a given date", () => {
        const date = "2019-06-11";
        const result = getScreentimeAlertList(users, date);
        expect(result).toEqual([]);
    });
});

describe("hexToRGB", () => {
    test("should convert hexadecimal color code to RGB format", () => {
        const hexStr = "#FF1133";
        const result = hexToRGB(hexStr);
        expect(result).toEqual("rgb(255, 17, 51)");
    });
    test("should convert another hexadecimal color code to RGB format", () => {
        const hexStr = "#AABBCC";
        const result = hexToRGB(hexStr);
        expect(result).toEqual("rgb(170, 187, 204)");
    });
});

describe("findWinner", () => {
    test("should return 'X' if player X has won", () => {
        const board = [
            ["X", "X", "X"],
            [null, null, null],
            [null, null, null]
        ];
        const result = findWinner(board);
        expect(result).toEqual("X");
    });
    test("should return '0' if player 0 has won", () => {
        const board = [
            ["0", "X", "X"],
            ["0", "0", "X"],
            ["0", null, null]
        ];
        const result = findWinner(board);
        expect(result).toEqual("0");
    });
    test("should return 'X' ", () => {
        const board = [
            ["X", "0", "X"],
            ["0", "X", "0"],
            ["X", "0", "X"]
        ];
        const result = findWinner(board);
        expect(result).toEqual("X");
    });
});