import { LightningElement, api } from 'lwc';

export default class OrderComponent extends LightningElement {
    @api message = '';

    get orderPlaced() {
        return this.message !== '';
    }
}
