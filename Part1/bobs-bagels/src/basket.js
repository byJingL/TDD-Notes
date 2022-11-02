class Basket {

    basketItems;
    basketCapacity;

    constructor(basketItems = [], basketCapacity = 0){
        this.basketItems = basketItems;
        this.basketCapacity = basketCapacity;
    }

    checkAdd = (item) => {
        let haveIt = false;
        for(let i = 0; i < this.basketItems.length; i++){
            if(this.basketItems[i].id === item.id){
                haveIt = true;
            }
        }
        return haveIt;
    }

    add = (item) => {
        this.basketItems.push(item);
    };

    checkRemove = (item)=>{
        let inBasket = false;
        for(let i = 0; i < this.basketItems.length; i++){
            if(this.basketItems[i].id === item.id){
                inBasket = true;
            }
        }
        return inBasket;
    }

    remove =  (item) => {
        this.basketItems.pop(item);
    };

    isBasketFull = () => {
        if (this.basketItems.length === this.basketCapacity){
            return true
        }else{
            return false
        }
    };

    largeBasketCapacity = () => {
        this.basketCapacity = this.basketCapacity + 5
        return true
    }

    totalSumBagels = () => {
        return this.basketItems.length
    }

    checkPriceofBagel = () => {
        let priceofBagels = []
        for(let i = 0; i < this.basketItems.length; i++){
            priceofBagels.push(this.basketItems[i].id[1])
        }
        console.log(priceofBagels)
        return priceofBagels
    }
}

module.exports = {
    Basket,
}