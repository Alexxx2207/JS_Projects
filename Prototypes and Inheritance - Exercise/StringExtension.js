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
        return this.toString().length <= 0;
    }
})();