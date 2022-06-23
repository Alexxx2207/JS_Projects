
let bookSelection = require('./bookSelection');

let expect = require('chai').expect;

describe("Tests book Selection", function () {
    describe("isGenreSuitable()", function () {

        it("should return not suitable", function () {
            expect(bookSelection.isGenreSuitable('Horror', 5)).to.equal(`Books with Horror genre are not suitable for kids at 5 age`);
        });
        it("should return not suitable", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equal(`Books with Thriller genre are not suitable for kids at 5 age`);
        });
        it("should return not suitable", function () {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 5 age`);
        });
        it("should return not suitable", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 5 age`);
        });
        it("should return suitable", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
        });
        it("should return suitable", function () {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
        });
    });

    describe("isItAffordable()", function () {
        it('should return not enough money', function () {
            expect(bookSelection.isItAffordable(51, 50)).to.equal("You don't have enough money");
        });
        it('should return bought', function () {
            expect(bookSelection.isItAffordable(49, 50)).to.equal(`Book bought. You have 1$ left`);
        });
        it('should return bought', function () {
            expect(bookSelection.isItAffordable(50, 50)).to.equal(`Book bought. You have 0$ left`);
        });
        it('invalid input', function () {
            expect(() => bookSelection.isItAffordable('49', '50')).to.throw("Invalid input");
        });
        it('invalid input', function () {
            expect(() => bookSelection.isItAffordable(true, false)).to.throw("Invalid input");
        });
        it('invalid input', function () {
            expect(() => bookSelection.isItAffordable({}, [])).to.throw("Invalid input");
        });
    });

    describe("suitableTitles()", function () {
        it('valid input', function () {
            let books = [
                {
                    title: 'SW',
                    genre: 'Horror'
                },
                {
                    title: 'JK',
                    genre: 'Horror'
                },
                {
                    title: 'AA',
                    genre: 'Comedy'
                },
            ]

            expect(bookSelection.suitableTitles(books, 'Action')).to.have.ordered.members([])
        });
        it('valid input', function () {
            let books = [
                {
                    title: 'SW',
                    genre: 'Horror'
                },
                {
                    title: 'JK',
                    genre: 'Horror'
                },
                {
                    title: 'AA',
                    genre: 'Comedy'
                },
            ]

            expect(bookSelection.suitableTitles(books, 'Horror')).to.have.ordered.members(['SW', 'JK'])
        });
       
        it('Invalid input', function () {
            expect(() => bookSelection.suitableTitles('books', 'Horror')).to.throw("Invalid input");
        });
        it('Invalid input', function () {
            let books = [
                {
                    title: 'SW',
                    genre: 'Horror'
                },
                {
                    title: 'JK',
                    genre: 'Horror'
                },
                {
                    title: 'AA',
                    genre: 'Comedy'
                },
            ]

            expect(() => bookSelection.suitableTitles(books, true)).to.throw("Invalid input");
        });
    });
});
