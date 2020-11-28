import {Element} from '../modules/element';

export class Ball extends Element {
    constructor() {
        super();

        this.canOverflowCanvas = true;
        this.isRound = true;

        this.radius = 10;
    }

    process(ms) {
        this.processMovement();

        super.process(ms);
    }

    draw() {
        this.drawBall();
    }

    drawBall() {
        const ctx = $engine.getScene().get2DContext();

        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    }

    processMovement() {
        this.centerX += 5;
        this.centerY += 7;
    }
}