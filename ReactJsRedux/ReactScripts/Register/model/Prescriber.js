export class Prescriber {
	constructor(id = 0, name = "", userType = "1", email = "", license = "") {
		this.id = id
		this.userType = userType;
		this.name = name;
		this.email = email;
		this.license = license;
	}
	load(data) {
		this.id = data.id
		this.userType = data.userType;
		this.name = data.name;
		this.email = data.email;
		this.license = data.license;
		return this;
	}
}