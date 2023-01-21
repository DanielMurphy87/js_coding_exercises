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