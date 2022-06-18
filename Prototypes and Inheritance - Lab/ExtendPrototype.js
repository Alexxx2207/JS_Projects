function extendClass(classParam) {

    classParam.prototype.species = 'Human';
    classParam.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
