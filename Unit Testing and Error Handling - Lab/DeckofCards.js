function deckOfCards(cards) {
    // One way
    // function createCard(face, suit) {
    //     face = face.toUpperCase();
    //     suit = suit.toUpperCase();

    //     let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
    //         'J', 'Q', 'K', 'A'];
    //     let suits = {
    //         'S': '\u2660',
    //         'H': '\u2665',
    //         'D': '\u2666',
    //         'C': '\u2663',
    //     };

    //     let card = {};

    //     if (faces.includes(face) && suits[suit]) {
    //         card = {
    //             face,
    //             suit: suits[suit]
    //         };
    //         card.toString = function () { return this.face + this.suit; };

    //         return card;
    //     } else {
    //         throw new Error('Invalid card: ' + face + suit);
    //     }
    // }

    // Second way with require
    const cardsFactory = require('./playingCards.js');
    
    function createCard() {}

    createCard = cardsFactory;

    let convertedCardsList = [];

    try {
        cards.forEach(card => {
            convertedCardsList.push(createCard(card.slice(0, -1), card.slice(-1)));
        });

        console.log(convertedCardsList.join(' '));
    } catch (error) {
        console.log(error.message);
    }
}