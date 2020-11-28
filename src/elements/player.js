import {Element} from '../modules/element';
import {
    KEYBOARD_ARROW_DOWN,
    KEYBOARD_ARROW_LEFT,
    KEYBOARD_ARROW_RIGHT,
    KEYBOARD_ARROW_Right,
    KEYBOARD_ARROW_UP
} from "../modules/input";

export class Player extends Element {
    constructor() {
        super();

        this.velocity = 7;
        this.width = 15;
        this.height = 40;
    }

    process(ms) {
        this.processKeyboardInput(ms);
    }

    draw(canvas) {
        this.drawPlayer();
    }

    drawPlayer() {
        const ctx = $engine.getScene().get2DContext();

        ctx.beginPath();
        ctx.rect(this.posX, this.posY, this.width, this.height );
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    processKeyboardInput(ms) {
        if($engine.input.isKeyPressed(KEYBOARD_ARROW_DOWN)) {
            this.posY += this.velocity;
        }

        if($engine.input.isKeyPressed(KEYBOARD_ARROW_UP)) {
            this.posY -= this.velocity;
        }

        if($engine.input.isKeyPressed(KEYBOARD_ARROW_LEFT)) {
            this.posX -= this.velocity;
        }

        if($engine.input.isKeyPressed(KEYBOARD_ARROW_RIGHT)) {
            this.posX += this.velocity;
        }
    }
}