export const KEYBOARD_ARROW_UP = 'ArrowUp';
export const KEYBOARD_ARROW_DOWN = 'ArrowDown';
export const KEYBOARD_ARROW_LEFT = 'ArrowLeft';
export const KEYBOARD_ARROW_RIGHT = 'ArrowRight';

export class Input
{
    constructor() {
        this.pressedKeys = [];

        document.addEventListener("keydown", event => {
            if (event.isComposing || event.keyCode === 229) {
                return;
            }

            this.pressedKeys.push(event.code);
        });

        document.addEventListener("keyup", event => {
            if (event.isComposing || event.keyCode === 229) {
                return;
            }

            this.pressedKeys = this.pressedKeys.filter(function(value, index, arr){
                return value !== event.code;
            });
        });
    }

    isKeyPressed(keyCode) {
        return this.pressedKeys.includes(keyCode);
    }
}