import {Element} from '../modules/element';

export class Ball extends Element {
    constructor() {
        super();
    }

    process(ms) {
        this.centerX += 5;
        this.centerY += 7;
    }

    draw() {
        this.processCanvasOverflow();

        this.drawBall();
    }

    drawBall() {
        const ctx = $engine.getScene().get2DContext();
        const radius = 10;

        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#003300';
        ctx.stroke();
    }

    processCanvasOverflow() {
        if(this.centerY > $engine.getScene().getCanvas().height || this.centerY < 0){
            this.centerY = 0;
        }

        if(this.centerX > $engine.getScene().getCanvas().width || this.centerX < 0) {
            this.centerX = 0;
        }
    }
}