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

        console.log(canvas)
        this.canvas = canvas;
    }

    drawElements() {
        this.getElements().forEach(element => {
            element.draw(this.canvas, 1);
            element.draw(this.canvas, 2);
            element.draw(this.canvas, 3);
        })
    }

    clear() {
        this.canvas.getContext('2d').clearRect(0, 0, 700, 700);
    }
}
