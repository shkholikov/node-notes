class Employee {
	private firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getDetails(): string {
		return `${this.firstName} + ${this.lastName}`;
	}
	// constructor(firstName: string, lastName: string) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// }

	// abstract getSalary(): number;
}

class Developer extends Employee {
	age: number;
	salary: number;
	constructor(firstName: string, lastName: string, age: number, salary: number) {
		super(firstName, lastName);
		this.age = age;
		this.salary = salary;
	}
}

// class Developer extends Employee {
// 	salary: number;
// 	constructor(salary: number) {
// 		super(firstName, lastName);
// 		this.salary = salary;
// 	}

// 	getSalary(): number {
// 		return this.salary;
// 	}
// }

let developer = new Employee("Fsafas", "asfas");
let oops = new Developer();
