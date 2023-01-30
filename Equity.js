class Equity{
    #comStock;
    #RE;

    constructor(){
        this.comStock = 0;
        this.RE = {
            amount: 0,
            type: "N/A"
        };
    }

    constructor(comStock, RE){
        this.comStock = comStock;
        this.RE = RE;
    }

    get commonStock(){
        return this.comStock;
    }

    get retainedEarningsAmount(){
        return this.RE.amount;
    }

    get retainedEarningsType(){
        return this.RE.type;
    }

    *getTotal(){
        return this.comStock+this.RE.amount;
    }
}