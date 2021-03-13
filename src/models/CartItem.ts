export class CartItem {
    title: string;
    image: string;
    price: number;
    qty: number

    constructor() {
        this.title = '';
        this.image = '';
        this.price = 0;
        this.qty = 0;
    }
}