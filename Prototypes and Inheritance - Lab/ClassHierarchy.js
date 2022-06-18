function solution() {

    class Figure {
        constructor() {
            this.unit = 'cm';
        }

        get area() {
        }

        changeUnits(newUnit) {
            if (['m', 'cm', 'mm'].includes(newUnit)) {
                this.unit = newUnit;
            }
        }

        toString() {
            return `Figures units: ${units}`
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `Figures units: ${this.unit} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super();
            this.width = width;
            this.height = height;
            this.unit = unit;
        }

        get area() {

            this.ratio = 1;

            if (this.unit == 'mm') {
                this.ratio = 10;
            } else if (this.unit == 'm') {
                this.ratio = 0.01;
            }

            return this.width * this.height * this.ratio ** 2;
        }

        toString() {
            return `Figures units: ${this.unit} Area: ${this.area} - width: ${this.width * this.ratio}, height: ${this.height * this.ratio}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

let classes = solution();

let c = new classes.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new classes.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area);

