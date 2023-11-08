// complete this js code
function Person(name, age) {
	this.name = name;
    this.age = age;
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
