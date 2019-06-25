export default class User {
    constructor(fullName, email, color, birthdate) {
        this._fullName = fullName;
        this._email = email;
        this._color = color;
        this._birthdate = birthdate;
    }

    set fullName(fullName) {
        this._fullName = fullName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    set color(color) {
        this._color = color.toUpperCase();
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

    get color() {
        return "it's " + this._color + ' bro!';
    }

    get birthDate() {
        return this._birthDate;
    }
}
