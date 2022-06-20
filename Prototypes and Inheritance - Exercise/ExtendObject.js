function extensibleObject() {
    let prototypeObj = {};
    let obj = Object.create(prototypeObj);

    obj.extend = function (toCopyObj) {
        Object.entries(toCopyObj).forEach(([key, value]) => {
            if (typeof value !== 'function')
                this[key] = value;
            else {
                prototypeObj[key] = value;
            }
        });
    }

    return obj;
}
