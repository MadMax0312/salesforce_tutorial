import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track cartItems = [];

    handleAddToCart(event) {
        const productId = parseInt(event.detail, 10);
        console.log(productId, 'productId');
        const products = [
            { id: 1, name: 'Product 1', price: 100, imageUrl: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834/150' },
            { id: 2, name: 'Product 2', price: 200, imageUrl: 'https://cdn.jwplayer.com/v2/media/5WeYEf1q/poster.jpg/150' },
            { id: 3, name: 'Product 3', price: 300, imageUrl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D/150' },
            { id: 4, name: 'Product 4', price: 400, imageUrl: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834/150' },
        ];
        const product = products.find(product => product.id === productId);
        console.log('product', product.name);
        if (product) {
            const existingItem = this.cartItems.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                console.log('ffff')
                this.cartItems = [...this.cartItems, { ...product, quantity: 1 }];
            }
        }

        console.log('Products in cart:');
        this.cartItems.forEach(item => console.log(item.name,item.quantity));

        this.dispatchEvent(new CustomEvent('cartupdate', { detail: this.cartItems }));
    }
}
