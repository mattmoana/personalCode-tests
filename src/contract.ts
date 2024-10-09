import {UserEstonia} from "./userEstonia";
import {UserLatvia} from "./userLatvia";

export class Contract{
    titles: string
    signed: boolean


    constructor(titles: string) {
        this.titles = titles;
        this.signed = false;
    }

    signEEuser(user: UserEstonia): void {
        this.signed = user.mobileIdAuthorization === true;
    }

    signLVuser(user: UserLatvia): void {
        this.signed = user.activateEParakstsForLatvia === true;
    }
}