import Base from "./base";
import CreateUser from "./users";

class Hola extends Base {
	run(br) {
		this.sayHi(br);
	}

	createUser(fullName, email, color, birthdate) {
		return new CreateUser(fullName, email, color, birthdate);
	}
}

export default new Hola();
