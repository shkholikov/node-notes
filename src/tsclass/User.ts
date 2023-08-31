class User {
	name: string;
	surname: string;
	private contact: { phone: number; email: string };
	constructor(name: string, surname: string, contact: { phone: number; email: string }) {
		this.name = name;
		this.surname = surname;
		this.contact = contact;
	}

	getUserInfo(): void {
		console.log(`User: ${this.name} ${this.surname}; Contacts: ${this.contact.phone}, ${this.contact.email}`);
	}
}

let user1 = new User();
