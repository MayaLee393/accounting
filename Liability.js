class Liability{
    #accPay;
    #notePay;
    constructor(){
        this.accPay = 0;
        this.notePay = 0;
    }
    constructor(accPay, notePay){
        this.accPay = accPay;
        this.notePay = notePay;
    }

    get accountsPayable(){
        return this.accPay;
    }

    get notesPayable(){
        return this.notePay;
    }

    *getTotal(){
        return this.accPay+this.#notePay;
    }
}