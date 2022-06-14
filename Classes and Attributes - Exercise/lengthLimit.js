class Stringer {
    constructor(initialString, length) {
        this.innerString = initialString;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength >= this.innerString.length)
            return this.innerString;
        else
            return this.innerString.slice(0, this.innerLength) + '...';
    }
}
