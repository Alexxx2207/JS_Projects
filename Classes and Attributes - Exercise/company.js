class Company {
    constructor() {
        this.departments = {};
        this.EmployeeClass = class Employee {
            constructor(name, salary, position) {
                this.name = name;
                this.salary = Number(salary);
                this.position = position;
            }
        };
    }

    addEmployee(name, salary, position, department) {
        if (name == '' || name == null || name == undefined ||
            salary == '' || salary == null || salary == undefined ||
            Number.isNaN(salary) || Number(salary) < 0 ||
            position == '' || position == null || position == undefined ||
            department == '' || department == null || department == undefined) {
            throw new Error("Invalid input!");
        }
        else {
            if (!(department in this.departments)) {
                this.departments[department] = [];
            }

            this.departments[department].push(new this.EmployeeClass(name, salary, position));
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let bestDepartment = '';
        let bestDepartmentAverage = Number.MIN_SAFE_INTEGER;

        for (const key in this.departments) {
            let average = this.departments[key].reduce((acc, current) => {
                return acc + current.salary;
            }, 0);

            average /= this.departments[key].length;

            if (average > bestDepartmentAverage) {
                bestDepartment = key;
                bestDepartmentAverage = average;
            }
        }

        this.departments[bestDepartment].sort((emp1, emp2) => {
            let result = emp2.salary - emp1.salary;

            if (result == 0) {
                if (emp1.name < emp2.name) {
                    return -1;
                } else if (emp1.name > emp2.name) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                return result;
            }
        });

        return `Best Department is: ${bestDepartment}\n` +
            `Average salary: ${bestDepartmentAverage.toFixed(2)}\n` +
            this.departments[bestDepartment].reduce((acc, current) => {
                return acc + `${current.name} ${current.salary} ${current.position}\n`
            }, '')
                .trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
