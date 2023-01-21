import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("returns the next number after the given number in the array", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(60);
        expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])).toBe(98);
        expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40])).toBe(168);
        expect(sumMultiples([1, -2, 3.1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40])).toBe(165);
    });
    test("returns 0 if there are no multiples of 3 or 5 in the array", () => {
        expect(sumMultiples([4, 2, 7, 8, 1, 13])).toBe(0);
    });
    test("returns number if only one element in array", () => {
        expect(sumMultiples([4])).toBe(0);
        expect(sumMultiples([3])).toBe(3);
        expect(sumMultiples([5])).toBe(5);
    });
});

describe("isValidDNA", () => {
    test("returns true if only valid characters are in the string", () => {
        expect(isValidDNA("CGTA")).toBeTruthy();
        expect(isValidDNA("CGTACGTACGTACGTACGTACGTACGTACGTA")).toBeTruthy();
        expect(isValidDNA("12345")).toBeFalsy();
    });
    test("returns false if invalid characters are in the string", () => {
        expect(isValidDNA("CGTAB")).toBeFalsy();
        expect(isValidDNA("ABCDEF")).toBeFalsy();
        expect(isValidDNA("abcdefgh")).toBeFalsy();
        expect(isValidDNA("12345")).toBeFalsy();
        expect(isValidDNA(32)).toBeFalsy();
    });
});

describe("getComplementaryDNA", () => {
    test("returns the complementary DNA string for a valid input", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
    test("returns 'Not a valid DNA string' for an invalid input", () => {
        expect(getComplementaryDNA("ACGTX")).toBe("Not a valid DNA string");
    });

});

describe("isItPrime", () => {
    test("test if the function returns true for a prime number input", () => {
        expect(isItPrime(7)).toBeTruthy();
        expect(isItPrime(47)).toBeTruthy();
    });
    test("test if the function returns false for a non-prime number input", () => {
        expect(isItPrime(6)).toBeFalsy();
        expect(isItPrime(-7)).toBeFalsy();
    });
});

describe("createMatrix", () => {
    test('should return a matrix of 3x3 filled with "foo"', () => {
        const matrix = createMatrix(3, 'foo');
        expect(matrix).toEqual([
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo'],
            ['foo', 'foo', 'foo'],
        ]);
    });

    test('should return a matrix of 2x2 filled with 0', () => {
        const matrix = createMatrix(2, 99);
        expect(matrix).toEqual([
            [99, 99],
            [99, 99],
        ]);
    });
});

describe("areWeCovered", () => {
    test('should return true if there are at least 3 staff scheduled for "Monday"', () => {
        const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "John", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Jane", rota: ["Monday", "Thursday", "Friday"] }
        ];
        expect(areWeCovered(staff, "Monday")).toBeTruthy();
    });

    test('should return false if there are less than 3 staff scheduled for "Sunday"', () => {
        const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "John", rota: ["Monday", "Tuesday", "Wednesday"] },
        ];
        expect(areWeCovered(staff, "Sunday")).toBeFalsy();
    });

    test('should return false when staff array is empty', () => {
        expect(areWeCovered([], "Monday")).toBeFalsy();
    });
});