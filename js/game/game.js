/**
 * Main game class
 */
class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.running = true;
        this.fps = 60;
        this.frameTime = 1000 / this.fps;
        this.lastTime = 0;

        this.initGame();
    }

    initGame() {
        // Initialize input handler
        this.input = new InputHandler();

        // Initialize game components
        this.gameState = new GameState();
        this.world = new World(this.width, this.height);
        this.player = new Player('Trainer', this.width / 2, this.height / 2);

        // Add some starter Pokémon
        this.initializePokemon();

        // Start game loop
        this.gameLoop(0);
    }

    initializePokemon() {
        // Create some starter Pokémon
        const starter = new Pokemon('Pikachu', 'Pikachu', 5);
        starter.addMove({ name: 'Thunderbolt', power: 90, category: 'special' });
        starter.addMove({ name: 'Quick Attack', power: 40, category: 'physical' });
        this.player.addPokemon(starter);

        const second = new Pokemon('Charizard', 'Charizard', 5);
        second.addMove({ name: 'Flamethrower', power: 90, category: 'special' });
        second.addMove({ name: 'Slash', power: 70, category: 'physical' });
        this.player.addPokemon(second);
    }

    update(deltaTime) {
        this.gameState.update();
        this.world.update();
        this.player.update(this.input);
        this.checkCollisions();
        this.updateUI();
    }

    checkCollisions() {
        // Clamp player position to world bounds
        if (this.player.position.x < 0) {
            this.player.position.x = 0;
        }
        if (this.player.position.x + this.player.width > this.width) {
            this.player.position.x = this.width - this.player.width;
        }
        if (this.player.position.y < 0) {
            this.player.position.y = 0;
        }
        if (this.player.position.y + this.player.height > this.height) {
            this.player.position.y = this.height - this.player.height;
        }
    }

    render() {
        // Clear canvas
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw world
        this.world.draw(this.ctx);

        // Draw player
        this.player.draw(this.ctx);

        // Draw game info
        this.drawGameInfo();
    }

    drawGameInfo() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(10, 10, 200, 100);

        this.ctx.fillStyle = '#fff';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText(`Time: ${this.gameState.timeOfDay}`, 20, 35);
        this.ctx.fillText(`Pokémon: ${this.player.pokemonTeam.length}/6`, 20, 55);
        this.ctx.fillText(`Level: ${this.player.level}`, 20, 75);

        // Draw team Pokémon info
        if (this.player.pokemonTeam.length > 0) {
            const activePokemon = this.player.pokemonTeam[0];
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(this.width - 210, 10, 200, 120);
            this.ctx.fillStyle = '#fff';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText(`Active: ${activePokemon.name}`, this.width - 200, 30);
            this.ctx.fillText(`Lv. ${activePokemon.level}`, this.width - 200, 50);
            this.ctx.fillText(`HP: ${activePokemon.hp}/${activePokemon.maxHP}`, this.width - 200, 70);
            this.ctx.fillText(`XP: ${activePokemon.experience}`, this.width - 200, 90);
        }
    }

    updateUI() {
        document.getElementById('player-name').textContent = this.player.name;
        document.getElementById('player-level').textContent = `Level: ${this.player.level}`;
        document.getElementById('pokemon-count').textContent = `Pokémon: ${this.player.pokemonTeam.length}/6`;
        document.getElementById('time-of-day').textContent = `Time: ${this.gameState.timeOfDay.charAt(0).toUpperCase() + this.gameState.timeOfDay.slice(1)}`;
    }

    gameLoop(currentTime) {
        if (!this.running) return;

        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        if (deltaTime >= this.frameTime) {
            this.update(deltaTime);
            this.render();
        }

        requestAnimationFrame((time) => this.gameLoop(time));
    }
}

// Start the game when the page loads
window.addEventListener('load', () => {
    const game = new Game('gameCanvas');
});
