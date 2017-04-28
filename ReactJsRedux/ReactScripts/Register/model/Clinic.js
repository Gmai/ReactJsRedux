export class Clinic {
	constructor(id = 0, name = "", province = "", postalcode = "") {
		this.id = id
		this.name = name
		this.province = province
		this.postalcode = postalcode
	}
	load(data) {
		this.id = data.id
		this.name = data.name
		this.province = data.province
		this.postalcode = data.postalcode
		return this;
	}
}