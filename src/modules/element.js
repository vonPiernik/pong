export class Element {
    constructor() {
        this.centerX = 0;
        this.centerY = 0;
    }

    process(ms) {

    };

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