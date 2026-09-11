/**
 * Input handler for keyboard controls
 */
class InputHandler {
    constructor() {
        this.keys = {};
        this.setupListeners();
    }

    setupListeners() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }

    isKeyPressed(key) {
        return this.keys[key.toLowerCase()] || false;
    }

    getMovementDirection() {
        let dx = 0;
        let dy = 0;

        if (this.isKeyPressed('arrowup') || this.isKeyPressed('w')) dy = -1;
        if (this.isKeyPressed('arrowdown') || this.isKeyPressed('s')) dy = 1;
        if (this.isKeyPressed('arrowleft') || this.isKeyPressed('a')) dx = -1;
        if (this.isKeyPressed('arrowright') || this.isKeyPressed('d')) dx = 1;

        return { dx, dy };
    }
}
