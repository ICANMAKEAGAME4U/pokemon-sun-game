/**
 * Battle system
 */
class Battle {
    constructor(playerPokemon, opponentPokemon) {
        this.playerPokemon = playerPokemon;
        this.opponentPokemon = opponentPokemon;
        this.turn = 0;
        this.battleLog = [];
        this.isPlayerTurn = true;
    }

    playerAttack(moveIndex) {
        if (moveIndex >= this.playerPokemon.moves.length) {
            return false;
        }

        const move = this.playerPokemon.moves[moveIndex];
        const damage = this.calculateDamage(this.playerPokemon, this.opponentPokemon, move);
        this.opponentPokemon.takeDamage(damage);
        this.battleLog.push(`${this.playerPokemon.name} used ${move.name}! Dealt ${damage} damage.`);

        if (!this.opponentPokemon.isFainted()) {
            this.opponentAttack();
        }

        this.turn++;
        return true;
    }

    opponentAttack() {
        if (this.opponentPokemon.moves.length === 0) {
            return;
        }

        const move = this.opponentPokemon.moves[Math.floor(Math.random() * this.opponentPokemon.moves.length)];
        const damage = this.calculateDamage(this.opponentPokemon, this.playerPokemon, move);
        this.playerPokemon.takeDamage(damage);
        this.battleLog.push(`${this.opponentPokemon.name} used ${move.name}! Dealt ${damage} damage.`);
    }

    calculateDamage(attacker, defender, move) {
        const baseDamage = move.power || 50;
        const attackerStat = move.category === 'physical' ? attacker.attack : attacker.spAttack;
        const defenderStat = move.category === 'physical' ? defender.defense : defender.spDefense;

        let damage = (((2 * attacker.level / 5 + 2) * baseDamage * attackerStat / defenderStat) / 50 + 2);
        damage = damage * (0.85 + Math.random() * 0.15); // STAB and random variance
        return Math.max(1, Math.floor(damage));
    }

    isBattleOver() {
        return this.playerPokemon.isFainted() || this.opponentPokemon.isFainted();
    }

    getWinner() {
        if (this.playerPokemon.isFainted()) {
            return 'opponent';
        } else if (this.opponentPokemon.isFainted()) {
            return 'player';
        }
        return null;
    }
}
