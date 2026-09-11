/**
 * Pokémon class definition
 */
class Pokemon {
    constructor(name, species, level = 1) {
        this.name = name;
        this.species = species;
        this.level = level;
        this.experience = 0;
        this.hp = 100;
        this.maxHP = 100;
        this.attack = 10;
        this.defense = 10;
        this.spAttack = 10;
        this.spDefense = 10;
        this.speed = 10;
        this.moves = [];
        this.status = 'healthy'; // healthy, poisoned, burned, paralyzed, asleep, frozen
    }

    gainExperience(amount) {
        this.experience += amount;
        this.checkLevelUp();
    }

    checkLevelUp() {
        const expThreshold = this.level * 100;
        if (this.experience >= expThreshold) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.maxHP += 10;
        this.hp = this.maxHP;
        this.attack += 2;
        this.defense += 2;
        this.spAttack += 2;
        this.spDefense += 2;
        this.speed += 1;
        console.log(`${this.name} leveled up to level ${this.level}!`);
    }

    takeDamage(damage) {
        this.hp = Math.max(0, this.hp - damage);
    }

    heal(amount) {
        this.hp = Math.min(this.maxHP, this.hp + amount);
    }

    addMove(move) {
        if (this.moves.length < 4) {
            this.moves.push(move);
        }
    }

    isFainted() {
        return this.hp <= 0;
    }
}
