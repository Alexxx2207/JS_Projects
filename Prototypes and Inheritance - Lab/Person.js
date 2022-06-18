function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            const words = value.split(' ').filter(el => el.length > 0);
            if(words.length == 2) {
                this.firstName = words[0];
                this.lastName = words[1];
            }
        },
        configurable: false,
    });
}


let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName);  // Tesla
