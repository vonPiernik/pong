import {Engine} from "./modules/engine";

const engine = new Engine();

document.querySelector('.run-game').addEventListener('click', function () {
    engine.runScene();
})