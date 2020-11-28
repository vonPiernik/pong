import {Engine} from "./modules/engine";

document.querySelector('.run-game').addEventListener('click', function () {
    const engine = new Engine();

    engine.start();
})