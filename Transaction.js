class Transaction{
    #assets;
    #lib;
    #equity
    constructor(asset, liability, equity){
        this.assets = asset;
        this.liability = liability;
        this.equity = equity
    }

    *isBalanced(){
        return this.assets.getTotal()-(this.lib.getTotal()+this.equity.getTotal())
    }
}