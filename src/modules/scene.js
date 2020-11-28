export class Scene {
    constructor() {
        this.elements = [];
        this.canvas = null;
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
        canvas.width = 700;
        canvas.height = 700;

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
        this.get2DContext().clearRect(0, 0, 700, 700);
    }

    getCanvas() {
        return this.canvas;
    }

    get2DContext() {
        return this.canvas.getContext('2d');
    }
}
