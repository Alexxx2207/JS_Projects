let { Repository } = require("./solution.js");
let { expect } = require("chai");

describe("Tests Repository class", function () {
    describe("Constructor", function () {
        it("correct settings", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            expect(Object.keys(repository.props).length).to.equal(3);
            expect(repository.nextId()).to.equal(0);
        });
        it("correct nextId()", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);
            repository.nextId();

            expect(repository.nextId()).to.equal(2);
        });
        it("incorrect settings", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);

            expect(repository.something).to.equal(undefined);
            expect(repository.nextId()).to.not.equal(1);
        });
    });
    describe("Count", function () {
        it('count correctly', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);
            repository.add(entity);

            expect(repository.count).to.equal(2);
            expect(repository.count).to.not.equal(0);
            expect(repository.count).to.not.equal(1);
            expect(repository.count).to.not.equal(3);
            expect(repository.count).to.not.equal(-1);
            expect(repository.count).to.not.equal(4);
        })
        it('count with empty map', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            expect(repository.count).to.equal(0);

        })
    });

    describe('add', function () {
        it('add correct param', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);

            expect(repository.count).to.equal(1);
            expect(repository.getId(0)).to.equal(entity);
            expect(repository.add(entity)).to.equal(1);
        });

        it('do not add insufficient param name', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property name is missing from the entity!`)
            expect(repository.count).to.equal(0);
        });

        it('do not add insufficient param age', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'a',
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property age is missing from the entity!`)
            expect(repository.count).to.equal(0);
        });

        it('do not add insufficient param birthday', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'a',
                age: 5,
            };

            expect(() => repository.add(entity)).to.throw(`Property birthday is missing from the entity!`)
            expect(repository.count).to.equal(0);
        });

        it('do not add incorrect param name as int', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 1,
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property name is not of correct type!`)
            expect(repository.count).to.equal(0);
        });

        it('do not add incorrect param name as boolean', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: true,
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property name is not of correct type!`)
            expect(repository.count).to.equal(0);
        });
        
         it('do not add incorrect param name as function', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: function() {},
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property name is not of correct type!`)
            expect(repository.count).to.equal(0);
        });
        it('do not add incorrect param name as array', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: [1,2,3],
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property name is not of correct type!`)
            expect(repository.count).to.equal(0);
        });
        it('do not add incorrect param name as object', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: {name:'sa'},
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property name is not of correct type!`)
            expect(repository.count).to.equal(0);
        });

        it('do not add incorrect param age as string', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: '22',
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property age is not of correct type!`)
            expect(repository.count).to.equal(0);
        });

        it('do not add incorrect param name as boolean', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: false,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repository.add(entity)).to.throw(`Property age is not of correct type!`)
            expect(repository.count).to.equal(0);
        });
        it('do not add incorrect param birthday as string', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: 'str'
            };

            expect(() => repository.add(entity)).to.throw(`Property birthday is not of correct type!`)
            expect(repository.count).to.equal(0);
        });

        it('do not add incorrect param birthday as boolean', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: true
            };

            expect(() => repository.add(entity)).to.throw(`Property birthday is not of correct type!`)
            expect(repository.count).to.equal(0);
        });
    });
    describe('get', function () {
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);

            expect(() => repository.getId(1)).to.throw(`Entity with id: 1 does not exist!`);
        });
        it('should return desired object', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);

            expect(repository.getId(0)).to.equal(entity);
        });
    });
    describe('update', function () {
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);

            expect(() => repository.update(1, entity)).to.throw(`Entity with id: 1 does not exist!`);
        });
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name1: 'Stamat',
                age: 29,
                birthday: new Date(1991, 0, 21)
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property name is missing from the entity!`);
        });
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: 'Stamat',
                age1: 29,
                birthday: new Date(1991, 0, 21)
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property age is missing from the entity!`);
        });
        
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday1: new Date(1991, 0, 21)
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property birthday is missing from the entity!`);
        });
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: true,
                age: 29,
                birthday: new Date(1991, 0, 21)
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property name is not of correct type!`);
        });
        
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: 1,
                age: 29,
                birthday: new Date(1991, 0, 21)
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property name is not of correct type!`);
        });
        
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: 'name',
                age: true,
                birthday: new Date(1991, 0, 21)
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property age is not of correct type!`);
        });

        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: 'name',
                age: 'text',
                birthday: new Date(1991, 0, 21)
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property age is not of correct type!`);
        })
        
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: 'name',
                age: 22,
                birthday: 'text'
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property birthday is not of correct type!`);
        });
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: 'name',
                age: 22,
                birthday: true
            };

            repository.add(entity);

            expect(() => repository.update(0, anotherEntity)).to.throw(`Property birthday is not of correct type!`);
        });
        
        it('should update entity', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday: new Date(1991, 0, 21)
            };

            repository.add(entity);
            repository.update(0, anotherEntity);

            expect(repository.getId(0)).to.equal(anotherEntity);
        });
    });
    describe('del', function () {
        it('should delete object', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);
            repository.del(0);

            expect(repository.count).to.equal(0);
        });
        it('should throw error', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);

            expect(() => repository.del(1)).to.throw(0);
        });
        it('should delete object', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            let entity = {
                name: 'name',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            repository.add(entity);
            repository.add(entity);
            repository.del(1);

            expect(repository.data.has(1)).to.equal(false);
        });
    });

    describe('integration test', function() {
        it('should all work correctly', function() {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity); 
            repository.add(entity); 

            entity = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            
            repository.update(1, entity);
            repository.del(0);
            let anotherEntity = {
                name1: 'Stamat',
                age: 29,
                birthday: new Date(1991, 0, 21)
            };
            anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday: 1991
            };

            expect(repository.count).to.equal(1);
        });
    });
});
