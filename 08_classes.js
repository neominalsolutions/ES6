// JS de generic Type, interface yok, Abstracy Class da yok.
// Ama Typescript de her ikiside var. Abstract class var.

// JS de Inheritance kalıtım var -> Normalda JS de Proto based bir inheritance var fakat ES6+ birlikte OOP Inheritance geldi.

export class Employee {
	sicilNo;
	constructor(sicilNo) {
		this.sicilNo = sicilNo;
	}
	getInfo() {
		return this.sicilNo;
	}
}

export class Manager extends Employee {
	#salary;

	constructor(sicilNo, salary) {
		super(sicilNo); // kalıtım varsa super this den önce tanımlanmalı super class önce doldurulmalı.
		this.#salary = salary;
	}

	// getter setter otomatik olarak publictir.
	get getSalary() {
		return this.#salary;
	}

	// setter yazımı
	set setSalary(value) {
		this.#salary = value;
	}
	// otomatik olarak aynı isimdeyse ovveride eder.
	getInfo() {
		super.getInfo(); // base class method tetikleme.
		return 'manager Info';
	}
}

const emp = new Manager(1, 15000);
console.log(emp.getInfo());
emp.setSalary = 25;
console.log('emp', emp);
