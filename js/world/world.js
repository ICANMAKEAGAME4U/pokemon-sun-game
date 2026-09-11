/**
 * Game world and map management
 */
class World {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tileSize = 32;
        this.tiles = this.generateMap();
        this.npcs = [];
        this.items = [];
    }

    generateMap() {
        const tiles = [];
        const tilesY = this.height / this.tileSize;
        const tilesX = this.width / this.tileSize;

        for (let y = 0; y < tilesY; y++) {
            const row = [];
            for (let x = 0; x < tilesX; x++) {
                // Simple map generation: grass, water, and mountains
                if (y < 5) {
                    row.push(0); // Grass
                } else if (y < 10) {
                    row.push(1); // Water
                } else {
                    row.push(0); // Grass
                }
            }
            tiles.push(row);
        }

        return tiles;
    }

    update() {
        this.npcs.forEach(npc => npc.update());
    }

    draw(ctx) {
        const tileColors = {
            0: '#64c864', // Grass - green
            1: '#6496c8', // Water - blue
            2: '#969696'  // Mountain - gray
        };

        for (let y = 0; y < this.tiles.length; y++) {
            for (let x = 0; x < this.tiles[y].length; x++) {
                const tile = this.tiles[y][x];
                const color = tileColors[tile] || '#64c864';
                const tileX = x * this.tileSize;
                const tileY = y * this.tileSize;

                ctx.fillStyle = color;
                ctx.fillRect(tileX, tileY, this.tileSize, this.tileSize);

                // Draw tile border
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 1;
                ctx.strokeRect(tileX, tileY, this.tileSize, this.tileSize);
            }
        }
    }

    addNPC(npc) {
        this.npcs.push(npc);
    }

    addItem(item, x, y) {
        this.items.push({ item, x, y });
    }

    isWalkable(x, y) {
        const tileX = Math.floor(x / this.tileSize);
        const tileY = Math.floor(y / this.tileSize);

        if (tileX < 0 || tileX >= this.tiles[0].length || tileY < 0 || tileY >= this.tiles.length) {
            return false;
        }

        const tile = this.tiles[tileY][tileX];
        return tile !== 1; // 1 = water, not walkable
    }
}
