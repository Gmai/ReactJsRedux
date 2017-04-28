export class Secondary {
	constructor(id = 0, name = "", userType = "1", email = "") {
		this.id = id
		this.userType = userType;
		this.name = name;
		this.email = email;
	}
	load(data) {
		this.id = data.id
		this.userType = data.userType;
		this.name = data.name;
		this.email = data.email;
		return this;
	}
}