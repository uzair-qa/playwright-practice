export class Product{
    name: string = '';
    price: number = 0;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }

    isCheap(): boolean{
        if(this.price >= 10){
            return false;
        }
        return true;
    }
}
