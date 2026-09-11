/**
 * Player character class
 */
class Player {
    constructor(name, x, y) {
        this.name = name;
        this.position = new Vector(x, y);
        this.width = 32;
        this.height = 32;
        this.speed = 3;
        this.direction = 'down'; // down, up, left, right
        this.isMoving = false;
        this.pokemonTeam = [];
        this.inventory = {};
        this.level = 1;
        this.experience = 0;
    }

    update(input) {
        const { dx, dy } = input.getMovementDirection();

        if (dx !== 0 || dy !== 0) {
            if (dx < 0) this.direction = 'left';
            if (dx > 0) this.direction = 'right';
            if (dy < 0) this.direction = 'up';
            if (dy > 0) this.direction = 'down';

            this.position.x += dx * this.speed;
            this.position.y += dy * this.speed;
            this.isMoving = true;
        } else {
            this.isMoving = false;
        }
    }

    draw(ctx) {
        // Draw player as a colored rectangle
        ctx.fillStyle = '#ff6464';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        // Draw eye
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.position.x + 8, this.position.y + 8, 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw direction indicator
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const centerX = this.position.x + this.width / 2;
        const centerY = this.position.y + this.height / 2;

        if (this.direction === 'up') {
            ctx.moveTo(centerX, centerY - 10);
            ctx.lineTo(centerX, centerY);
        } else if (this.direction === 'down') {
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX, centerY + 10);
        } else if (this.direction === 'left') {
            ctx.moveTo(centerX - 10, centerY);
            ctx.lineTo(centerX, centerY);
        } else if (this.direction === 'right') {
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(centerX + 10, centerY);
        }
        ctx.stroke();
    }

    addPokemon(pokemon) {
        if (this.pokemonTeam.length < 6) {
            this.pokemonTeam.push(pokemon);
            return true;
        }
        return false;
    }

    addItem(itemName, quantity = 1) {
        if (this.inventory[itemName]) {
            this.inventory[itemName] += quantity;
        } else {
            this.inventory[itemName] = quantity;
        }
    }
}
