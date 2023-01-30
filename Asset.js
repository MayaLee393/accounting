class Asset{
    #cash;
    #supplies;
    #accRec;
    #equip;

    constructor(){
        this.cash = {
            amount: 0,
            type: "N/A"
        };
        this.supplies = 0;
        this.accRec = 0;
        this.equip = 0; 
    }
    constructor(cash, supplies, acctRec, equip){
        this.cash = cash;
        this.supplies = supplies;
        this.#accRec = acctRec;
        this.equip = equip;
    }

    get cashAmount(){
        return this.cash.amount;
    }

    get cashType(){
        return this.cash.type;
    }

    get supplies(){
        return this.supplies;
    }

    get accountsReceivable(){
        return this.acctRec;
    }

    get equipment(){
        return this.equip;
    }

    *getTotal(){
        return this.cash.amount+this.supplies+this.accRec+this.equip;
    }
}