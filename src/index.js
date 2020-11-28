import {Engine} from "./modules/engine";

document.querySelector('.run-game').addEventListener('click', function () {
    window.$engine = new Engine();

    $engine.start();
})