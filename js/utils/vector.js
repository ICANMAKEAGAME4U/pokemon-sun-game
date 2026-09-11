/**
 * Vector utility class for 2D math
 */
class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    subtract(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    distance(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    normalize() {
        const dist = Math.sqrt(this.x * this.x + this.y * this.y);
        if (dist === 0) return new Vector(0, 0);
        return new Vector(this.x / dist, this.y / dist);
    }
}
