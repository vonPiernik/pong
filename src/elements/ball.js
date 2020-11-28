import {Element} from '../modules/element';

export class Ball extends Element {
    constructor() {
        super();
    }

    process(ms) {
        this.centerX += 5;
        this.centerY += 7;
    }

    draw(canvas) {
        this.processCanvasOverflow(canvas);

        this.drawBall(canvas);
    }

    drawBall(canvas) {
        const ctx = canvas.getContext('2d');
        const radius = 10;

        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    }

    processCanvasOverflow(canvas) {
        if(this.centerY > canvas.height || this.centerY < 0){
            this.centerY = 0;
        }

        if(this.centerX > canvas.width || this.centerX < 0) {
            this.centerX = 0;
        }
    }
}