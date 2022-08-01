class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if(this.allCustomers.some((c => c.firstName === customer.firstName || c.lastName === customer.lastName))) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        customer.totalMoney = 0;
        customer.transactions = [];

        return customer;
    }

    depositMoney (personalId, amount) {
        if(!this.allCustomers.some((c => c.personalId == personalId))) {
            throw new Error(`We have no customer with this ID!`);
        }

        let customer = this.allCustomers.find(c => c.personalId == personalId);
        customer.totalMoney += amount;
        customer.transactions.push(`${customer.transactions.length+1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        
        return `${customer.totalMoney}$`;
    }
    
    withdrawMoney (personalId, amount) {
        if(!this.allCustomers.some((c => c.personalId == personalId))) {
            throw new Error(`We have no customer with this ID!`);
        }
        
        let customer = this.allCustomers.find(c => c.personalId == personalId);

        if(customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.transactions.length+1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        if(!this.allCustomers.some((c => c.personalId == personalId))) {
            throw new Error(`We have no customer with this ID!`);

        }
        let customer = this.allCustomers.find(c => c.personalId == personalId);

        let info = [];
        info.push(`Bank name: ${this._bankName}`);
        info.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        info.push(`Customer ID: ${customer.personalId}`);
        info.push(`Total Money: ${customer.totalMoney}$`);
        info.push(`Transactions:`);
        customer.transactions.reverse().forEach(transaction => {
            info.push(transaction);
        });

        return info.join('\n');
    }
}
