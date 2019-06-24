export default class User {
    constructor(firstName, lastName, favoritColour, birthDate) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._favoritColour = favoritColour;
        this._birthDate = birthDate;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    set favoritColour(favoritColour) {
        this._favoritColour = favoritColour.toUpperCase();
    }

    set birthDate(birthDate) {
        this.birthDate = birthDate;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get favoritColour() {
        return "it's " + this._favoritColour + ' bro!';
    }

    get birthDate() {
        return this._birthDate;
    }
}
