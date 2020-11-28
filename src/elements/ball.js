import {Element} from '../modules/element';

export class Ball extends Element {
    constructor() {
        super();
    }

    process(ms) {
        this.centerX += 10;
        this.centerY += 10;
    }
}