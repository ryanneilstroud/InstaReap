import { isCurrentUser, isInvalid, USER_ID } from '../app/Validation';

describe("Input is null", () => {
    it("should return true", () => {
        expect(isInvalid(null)).toBe(true);
    });
});

describe("Input is an empty string", () => {
    it("should return true", () => {
        expect(isInvalid("")).toBe(true);
    });
});

describe("Is current user", () => {
    it("should return true", () => {
        expect(isCurrentUser(USER_ID)).toBe(true);
    });
});