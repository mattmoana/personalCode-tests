import { UserEstonia } from "../src/userEstonia";
import { Contract } from "../src/contract";
import {UserLatvia} from "../src/userLatvia";

describe("Contract signing for EE user", () => {
    let userEstonia: UserEstonia;
    let contract: Contract

    beforeEach(() => {
        userEstonia = new UserEstonia("Matthew", "Moana", 25, "423232323", "5554434", "Pirita Street 5");
        contract = new Contract("Employment Contract");
    });

    test("Contract cannot be signed if Mobile ID authorization is not activated", () => {
        expect(userEstonia.mobileIdAuthorization).toBeUndefined();
        contract.signEEuser(userEstonia);
        expect(contract.signed).toBe(false);
    });

    test("Contract can be signed after activating Mobile ID authorization", () => {
        userEstonia.mobileIdAuthorization = true;
        contract.signEEuser(userEstonia);
        expect(contract.signed).toBe(true);
    });
});

describe("Contract signing for LV user", () => {
    let userLatvia: UserLatvia;
    let contract: Contract

    beforeEach(() => {
        userLatvia = new UserLatvia("Tom", "DeLonge", 18, "34343434", "55331234", "Viimsi Street 5");
        contract = new Contract("Employment Contract");
    });

    test("Contract cannot be signed if eParakstas authorization is not activated", () => {
        expect(userLatvia.activateEParakstsForLatvia).toBeUndefined();
        contract.signLVuser(userLatvia);
        expect(contract.signed).toBe(false);
    });

    test("Contract can be signed after activating eParakstas authorization", () => {
        userLatvia.activateEParakstsForLatvia = true;
        contract.signLVuser(userLatvia);
        expect(contract.signed).toBe(true);
    });
});