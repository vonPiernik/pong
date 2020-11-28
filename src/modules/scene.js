export class Scene {
    constructor() {
        this.elements = [];
        this.canvas = null;

        this.canvasCircleRadius = 350;
        this.canvasCircleCenterX = 350;
        this.canvasCircleCenterY = 350;
    }

    addElement(element) {
        this.elements.push(element);
    }

    rerender() {
        this.drawElements()
    }

    getElements() {
        return this.elements;
    }

    createCanvas() {
        let canvas = document.createElement('canvas');
        canvas.id = "main_canvas";
        canvas.classList.add("main-canvas");
        canvas.width = this.canvasCircleRadius * 2;
        canvas.height = this.canvasCircleRadius * 2;

        const pong = document.querySelector('#pong')
        pong.innerHTML = "";
        pong.append(canvas);

        this.canvas = canvas;
    }

    drawElements() {
        this.getElements().forEach(element => {
            element.draw();
        })
    }

    clear() {
        this.get2DContext().clearRect(0, 0, this.canvasCircleRadius * 2, this.canvasCircleRadius * 2);
    }

    getCanvas() {
        return this.canvas;
    }

    get2DContext() {
        return this.canvas.getContext('2d');
    }
}
