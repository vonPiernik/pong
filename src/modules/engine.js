import {Ball} from "../elements/ball";
import {Scene} from "./scene";
import {Input} from "./input";
import {Player} from "../elements/player";

export class Engine {
    start() {
        this.input = new Input();

        this.runScene();
    }

    runScene() {
        this.scene = new Scene();
        this.scene.createCanvas();

        const ball = new Ball();
        const player = new Player();

        this.scene.addElement(ball);
        this.scene.addElement(player);

        this.processScene();
    }

    getScene() {
        return this.scene;
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