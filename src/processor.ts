import { User } from "./user";

export class Processor {
    giveConsent(userInput: User): void {
        userInput.consentGiven = true;
    }

    checkConsent(userInput: User): boolean {
        return userInput.consentGiven === true;
    }

    checkUserAge(userInput: User): boolean {
        return userInput.age >= 18;
    }

    revokeConsent(userInput: User): boolean {
        if (!this.checkUserAge(userInput)) {
            userInput.consentGiven = false;
            return true;
        } else {
            return false;
        }
    }
}
