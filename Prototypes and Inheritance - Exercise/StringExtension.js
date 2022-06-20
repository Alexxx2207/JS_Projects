(() => {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str.concat(this);
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this.toString().concat(str);
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        return this.toString().length <= 0;
    }
    String.prototype.truncate = function (n) {
        let string = this.toString();

        if (n >= string.length) {
            return string;
        }
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (!string.includes(' ')) {
            return string.slice(0, n - 3) + '...';
        }

        let words = string.split(' ').filter(el => el.length > 0);

        let result = '';

        for (let index = 0; index < words.length; index++) {
            if (result.length + words[index].length + 3 > n) {
                break;
            }
            result = result.concat((words[index] + ' '));
        }

        result = result.trim();

        result = result.concat('...');

        return result;
    }
    String.format = function(string, ...params) {
        
        params.forEach((param, index) => {
            string = string.replace(`{${index}}`, param);
        })

        return string;
    }
})();