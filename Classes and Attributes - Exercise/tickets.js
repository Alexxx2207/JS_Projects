function tickets(ticketsInfo, sortCriteria) {
    class Ticket {
        constructor(destinationName, price, status) {
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    ticketsInfo.forEach(ticketInfo => {
        let tokens = ticketInfo.split('|');

        tickets.push(new Ticket(tokens[0], Number(tokens[1]), tokens[2]));
    });

    let sortingAlgorithms = {
        'destination': (array) => array.sort((ticket1, ticket2) => {
            if(ticket1.destination < ticket2.destination)
            {
                return -1;
            }
            else if(ticket1.destination > ticket2.destination) {
                return 1;
            }
            return 0;
        }),
        'price': (array) => array.sort((ticket1, ticket2) =>  ticket1.price - ticket2.price),
        'status': (array) => array.sort((ticket1, ticket2) => {
            if(ticket1.status < ticket2.status)
            {
                return -1;
            }
            else if(ticket1.status > ticket2.status) {
                return 1;
            }
            return 0;
        }),
    };

    sortingAlgorithms[sortCriteria](tickets);

    return tickets;
}
