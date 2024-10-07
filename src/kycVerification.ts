import {UserEstonia} from "./userEstonia";
import {UserLatvia} from "./userLatvia";

export class KysVerification{

    activateMobileIDForEstonia(user: UserEstonia) {
        if (user.age < 16) {
            throw new Error('User is too young')
        } else {
            user.mobileIdAuthorization = true
        }
    }

    activateMobileIDForLatvia(user: UserLatvia) {
        if (user.age < 18) {
            throw new Error('User is too young')
        } else {
            user.activateEParakstsForLatvia = true
        }
    }
}