
export class User {
    name: string
    surname: string
    phone: string
    address: string
    consentGiven: boolean | undefined
    age: number


    constructor(name: string, surname: string, phone: string, address: string, userAge: number) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.address = address;
        this.consentGiven = undefined
        this.age = userAge
    }
}