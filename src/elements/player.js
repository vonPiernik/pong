import {Element} from '../modules/element';
import {
    KEYBOARD_ARROW_DOWN,
    KEYBOARD_ARROW_LEFT,
    KEYBOARD_ARROW_RIGHT,
    KEYBOARD_ARROW_UP
} from "../modules/input";
import {RoundObject} from "../modules/round_object";

export class Player extends RoundObject {
    constructor() {
        super();

        this.canOverflowCanvas = true;

        this.centerX = $engine.getScene().canvasCircleRadius;
        this.centerY = 0;
        this.angle = -180;
        this.radius = 20;
        this.fillStyle = 'red';
    }

    process(ms) {
        this.processKeyboardInput(ms);

        super.process(ms);
    }

    pointsOnCircle({ radius, angle, cx, cy }){
        angle = angle * ( Math.PI / 180 ); // Convert from Degrees to Radians
        const x = cx + radius * Math.sin(angle);
        const y = cy + radius * Math.cos(angle);
        return [ x, y ];
    }

    processKeyboardInput(ms) {
        if($engine.input.isKeyPressed(KEYBOARD_ARROW_LEFT)) {
            this.angle += 1.5;
        }

        if($engine.input.isKeyPressed(KEYBOARD_ARROW_RIGHT)) {
            this.angle -= 1.5;
        }

        const [ x, y ] = this.pointsOnCircle({ radius: $engine.getScene().canvasCircleRadius, angle: this.angle, cx: $engine.getScene().canvasCircleCenterX, cy: $engine.getScene().canvasCircleCenterX });

        this.centerX = x;
        this.centerY = y;
    }
}