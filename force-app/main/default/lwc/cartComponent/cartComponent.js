import { LightningElement, api, track } from 'lwc';

export default class CartComponent extends LightningElement {
    @api cartItems = [];

    connectedCallback() {
        this.addEventListener('cartupdate', this.handleCartUpdate);
    }

    disconnectedCallback() {
        this.removeEventListener('cartupdate', this.handleCartUpdate);
    }

    handleCartUpdate(event) {
        this.cartItems = event.detail;
    }

    get calculateTotal() {
        return this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    }

    get cartItemsWithSubtotal() {
        return this.cartItems.map(item => ({
            ...item,
            subtotal: item.quantity * item.price
        }));
    }

    handleSubmit(event) {
        this.dispatchEvent(new CustomEvent('orderplaced', {detail: 'Successfully placed Order'}))
    }
}
