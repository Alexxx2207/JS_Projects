function playingCards(face, suit) {
    face = face.toUpperCase();
    suit = suit.toUpperCase();

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
                 'J', 'Q', 'K', 'A'];
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    let card = {};

    if (faces.includes(face) && suits[suit]) {
        card = {
            face,
            suit: suits[suit]
        };
        card.toString = function () { return this.face + this.suit; };

        return card;
    } else {
        throw new Error('Invalid card: ' + face + suit);
    }
}

module.exports = playingCards;