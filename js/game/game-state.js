/**
 * Game state management
 */
class GameState {
    constructor() {
        this.currentState = 'exploration'; // exploration, battle, menu, dialogue
        this.timeOfDay = 'day';
        this.gameTime = 0;
        this.paused = false;
        this.dayLength = 3600; // frames in a game day
    }

    update() {
        if (!this.paused) {
            this.gameTime++;
            this.updateTimeOfDay();
        }
    }

    updateTimeOfDay() {
        const hour = (this.gameTime / (this.dayLength / 24)) % 24;

        if (hour >= 6 && hour < 12) {
            this.timeOfDay = 'morning';
        } else if (hour >= 12 && hour < 17) {
            this.timeOfDay = 'afternoon';
        } else if (hour >= 17 && hour < 20) {
            this.timeOfDay = 'evening';
        } else {
            this.timeOfDay = 'night';
        }
    }

    changeState(newState) {
        this.currentState = newState;
    }

    togglePause() {
        this.paused = !this.paused;
    }
}
