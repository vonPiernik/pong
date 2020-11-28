import {Element} from "./element";

export class RoundObject extends Element {
    constructor() {
        super();

        this.isRound = true;
        this.fillStyle = 'green';
        this.strokeWidth = 5;
        this.strokeStyle = '#003300';
    }

    process(ms) {
        if(this.canOverflowCanvas) {
            this.processCanvasOverflow();
        }
    };

    draw() {
        this.drawRoundObject();
    }

    processCanvasOverflow() {
        if(this.isRound) {
            this.processCanvasOverflowForRoundObject();
        } else {
            this.processCanvasOverflowForRectObject()
        }
    }

    processCanvasOverflowForRoundObject() {
        let canvasHeight = $engine.getScene().getCanvas().height;
        let canvasWidth = $engine.getScene().getCanvas().width;

        let margin = this.radius;

        if(this.centerY > canvasHeight + margin){
            this.centerY = 0;
        }

        if(this.centerY < 0 - margin){
            this.centerY = canvasHeight;
        }

        if(this.centerX > canvasWidth + margin) {
            this.centerX = 0;
        }

        if(this.centerX < 0 - margin) {
            this.centerX = canvasWidth;
        }
    }

    processCanvasOverflowForRectObject() {
        let canvasHeight = $engine.getScene().getCanvas().height;
        let canvasWidth = $engine.getScene().getCanvas().width;
        let marginY = this.height;
        let marginX = this.width;

        if(this.centerY > canvasHeight + marginY){
            this.posY = 0;
        }

        if(this.centerY < 0 - marginY){
            this.posY = canvasHeight;
        }

        if(this.centerX > canvasWidth + marginX) {
            this.posX = 0;
        }

        if(this.centerX < 0 - marginX) {
            this.posX = canvasWidth;
        }
    }

    drawRoundObject() {
        const ctx = $engine.getScene().get2DContext();

        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();
    }
}