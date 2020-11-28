import {Element} from '../modules/element';

export class Ball extends Element {
    constructor() {
        super();
    }

    process(ms) {
        this.centerX += 10;
        this.centerY += 10;
    }

    draw(canvas) {
        const ctx = canvas.getContext('2d');
        const radius = 70;

        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    }
}