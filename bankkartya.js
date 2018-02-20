var frauder= ['4444-4444-4444-4442', '4444-4444-4444-4443', '4444-4444-4444-4445', '4444-4444-4444-4446']


    function payment(cardnumber, cvv) {
 
        var transaction= {
            cardnumber: '4444-4444-4444-4444',
            cvv: 345,
            name: 'Kovacs Bela',
            amount: 1000,
            
            
            validation: function (cardnumber, amount, name) {
                if (this.cardnumber == ""  && this.name == "" && this.amount == "")
                    return false;
                }

                if (this.cardNumber == "" || this.name == "") {
                    return true
                }
            
            },

            frauddetection: function () {
                for (i = 0; i < frauder.length; i++) {
                    if (frauder[i] == this.cardNumber) {
                        return false;
                    }
                    return (!frauder.includes(this.cardNumber);
            }
        
            pay: function payment () {
                console. log('cardnumber:' + this.cardnumber)
                console. log('name:'this.name)
                console. log('cvv:' this.cvv)
                console. log('amount:' this.amount)
                console. log('payment success!')
            },
    
    };

    if (!transaction.validation()) {        
        return 'rejected';
}
    
    if (!transaction.frauddetection()) {
        return 'rejected';
    }
        
};    


console.log(payment("4444-4444-4444-4442", 345, 'Kovacs Bela', 1000));
console.log(payment("4444-4444-4444-4443", 345, 'Kovacs Bela', 1000));
console.log(payment("4444-4444-4444-4445", 345, 'Kovacs Bela', 1000));