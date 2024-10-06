import { User } from "../src/user";
import { Processor } from "../src/processor";

describe("tests for consent", () => {
    let user: User;
    let processor: Processor;

    beforeEach(() => {
        user = new User("Matt", "Moana", "56773637", "pirita tee 22", 21);
        processor = new Processor();
    });

    test("Not processed user should initially have undefined consent", () => {
        expect(user.consentGiven).toBeUndefined();
    });

    test("Processor can give consent to the user", () => {
        processor.giveConsent(user);
        expect(user.consentGiven).toBe(true);
    });

    test("Verify fail consent when it is not given", () => {
        expect(processor.checkConsent(user)).toBe(false);
    });

    test("Processor should verify user age correctly - user older than 18", () => {
        expect(processor.checkUserAge(user)).toBe(true);
    });

    test("Processor should revoke consent for users under 18", () => {
        const underageUser = new User("Matt", "Morozov", "535536262", "Viimsi 12", 16);
        expect(processor.revokeConsent(underageUser)).toBe(true);
        expect(underageUser.consentGiven).toBe(false);
    });

    test("Processor should not revoke consent for users older than 18", () => {
        processor.giveConsent(user);
        expect(processor.revokeConsent(user)).toBe(false);
        expect(user.consentGiven).toBe(true);
    });
});
