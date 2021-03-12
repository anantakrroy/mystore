export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;

    constructor() {
        this.id = 0;
        this.title = 'Loading....';
        this.price = 0;
        this.description = 'Loading....';
        this.category = 'Loading....';
        this.image = 'Loading....';
    }
}