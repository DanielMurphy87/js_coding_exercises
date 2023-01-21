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