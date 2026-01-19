class Student {
	#username;
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
		this.#username = "@" + firstName;
	}

	static logStudentInfo() {
		console.log("This is a Student class");
	}

	getAge() {
		return 2025 - this.birthYear;
	}

	getUsername() {
		return this.#username;
	}

	get handler() {
		return this.#username;
	}

	set handler(value) {
		this.#username = value;
	}

	get func() {
		return this.#username;
	}

	set func(value) {
		this.#username = value;
	}
}

console.log(typeof Student);
console.dir(Student);

const student1 = new Student("Omar", 2003);
console.log(student1.getUsername());
console.log(student1.handler);
student1.func = "Omar1234";
console.log(student1.func);
// console.log(student1.logStudentInfo());
console.log(Student.logStudentInfo());

class OSStudent extends Student {
	constructor(firstName, birthYear, currentCourse) {
		super(firstName, birthYear);

		this.currentCourse = currentCourse;
	}

	getUsername() {
		// return this.#username + "";
	}
}

const osstudent1 = new OSStudent("Ali", 2001, "js");
console.log(osstudent1);
console.log(osstudent1);
console.log(osstudent1.getUsername());
