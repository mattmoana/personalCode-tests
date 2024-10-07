import {UserEstonia} from "../src/userEstonia";
import {KysVerification} from "../src/kycVerification";
import {UserLatvia} from "../src/userLatvia";

describe("test kyc for Estonia", () => {
    let userEstonia: UserEstonia;
    let kycVerificaition: KysVerification

    beforeEach(() => {
        userEstonia = new UserEstonia("Matt", "Moana", 35, "323232323", "34343434", "narva mnt 128");
        kycVerificaition = new KysVerification()
    });

    test("Verify that the mobileIDAuthorization field is undefined by default", () => {
        expect(userEstonia.mobileIdAuthorization).toBeUndefined();
    });

    test("Verify that the activateMobileIDForEstonia method activates Mobile ID if the user's age is greater than 16.", () => {
        kycVerificaition.activateMobileIDForEstonia(userEstonia)
        expect(userEstonia.mobileIdAuthorization).toBe(true)
    });

    test("Verify that after activation, the mobileIDAuthorization field changes to true.", () => {
        userEstonia.age = 15
        expect(() => {
            kycVerificaition.activateMobileIDForEstonia(userEstonia);
        }).toThrow('User is too young')
    });
});


describe("test kyc for Latvia", () => {
    let userLatvia: UserLatvia;
    let kycVerificaition: KysVerification

    beforeEach(() => {
        userLatvia = new UserLatvia("Matt", "Moana", 35, "323232323", "34343434", "narva mnt 128");
        kycVerificaition = new KysVerification()
    });

    test("Verify that the eParakstsForLatvia field is undefined by default.", () => {
        expect(userLatvia.activateEParakstsForLatvia).toBeUndefined();
    });

    test("Verify that the activateMobileIDForEstonia method activates Mobile ID if the user's age is greater than 16.", () => {
        kycVerificaition.activateMobileIDForLatvia(userLatvia)
        expect(userLatvia.activateEParakstsForLatvia).toBe(true)
    });

    test("Verify that after activation, the mobileIDAuthorization field changes to true.", () => {
        userLatvia.age = 15
        expect(() => {
            kycVerificaition.activateMobileIDForLatvia(userLatvia);
        }).toThrow('User is too young')
    });
});
