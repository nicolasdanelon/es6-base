import Base from "./base";
import CreateUser from "./user";

class Hola extends Base {
	run(br) {
		this.sayHi(br);
	}

	crearUsuario(a, b, c, d) {
		return new CreateUser(a, b, c, d);
	};
}

export default new Hola();

