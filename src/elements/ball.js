import {Element} from '../modules/element';
import {RoundObject} from "../modules/round_object";

export class Ball extends RoundObject {
    constructor() {
        super();

        this.canOverflowCanvas = true;

        this.radius = 10;
    }

    process(ms) {
        this.processMovement();

        super.process(ms);
    }

    processMovement() {
        this.centerX += 5;
        this.centerY += 7;
    }
}