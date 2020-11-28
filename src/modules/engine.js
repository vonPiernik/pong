import {Ball} from "../elements/ball";
import {Scene} from "./scene";

export class Engine {
    start() {
        this.runScene();
    }

    runScene() {
        this.scene = new Scene();
        this.scene.createCanvas();
        const ball = new Ball();
        this.scene.addElement(ball);

        this.processScene();
    }

    processScene() {
        this.scene.clear();

        this.scene.rerender();

        this.scene.getElements().forEach(element => {
            element.process();
        });

        requestAnimationFrame(() => this.processScene());
    }
}