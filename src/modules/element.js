export class Element {
    constructor() {
        this.centerX = 0;
        this.centerY = 0;
        this.posX = 0;
        this.posY = 0;
        this.width = 0;
        this.height = 0;
        this.radius = 0;

        this.canOverflowCanvas = false;
        this.isRound = false;
    }

    process(ms) {
        if(this.canOverflowCanvas) {
            this.processCanvasOverflow();
        }
    };

    draw() {
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
}