# Pokémon Sun Game - JavaScript Edition

A fan-made Pokémon Sun-inspired game built with vanilla JavaScript and HTML5 Canvas.

## Features

- **Player Character**: Control your trainer through the world with arrow keys
- **World Exploration**: Navigate through different terrain types (grass, water, mountains)
- **Pokémon System**: Manage your team of Pokémon with experience and leveling
- **Battle System**: Turn-based battle mechanics with damage calculation
- **Inventory System**: Collect and manage items
- **Time of Day Cycle**: Dynamic day/night system affecting gameplay
- **Real-time UI Updates**: Live information about your player and active Pokémon

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/ICANMAKEAGAME4U/pokemon-sun-game.git
cd pokemon-sun-game
```

2. Open in your browser:
- Simply open `index.html` in your web browser
- Or use a local server: `python -m http.server 8000` then navigate to `http://localhost:8000`

## Controls

- **Arrow Keys or WASD**: Move your character
- **Space**: Interact (coming soon)
- **P**: Pause game (coming soon)
- **Q**: Quit game (coming soon)

## Project Structure

```
pokemon-sun-game/
├── index.html                 # Main HTML file
├── README.md                  # This file
├── styles/
│   └── main.css              # Game styling
└── js/
    ├── utils/
    │   ├── vector.js         # 2D vector math utilities
    │   └── input.js          # Keyboard input handling
    ├── entities/
    │   ├── pokemon.js        # Pokémon class definition
    │   └── player.js         # Player character class
    ├── world/
    │   └── world.js          # World and map management
    └── game/
        ├── game-state.js     # Game state management
        ├── battle.js         # Battle system
        └── game.js           # Main game loop
```

## Game Features

### Player Mechanics
- Smooth movement with arrow keys
- Team of up to 6 Pokémon
- Inventory system for items
- Level progression

### Pokémon System
- Level-based stats progression
- Experience gain system
- Move sets with different types
- HP and damage calculations
- Faint status tracking

### World
- Tile-based map with different terrain types
- NPC support (coming soon)
- Item placement (coming soon)
- Collision detection

## Features in Development

- [ ] NPC interactions and dialogue system
- [ ] Pokémon encounters and catching mechanics
- [ ] Gym battles and trainer battles
- [ ] Move and ability system expansion
- [ ] Save/load game functionality
- [ ] Sprite graphics and animations
- [ ] Sound and music system
- [ ] Pokédex implementation
- [ ] Trading system
- [ ] Multiplayer connectivity

## How to Extend

### Adding New Pokémon

```javascript
const myPokemon = new Pokemon('MyPokémon', 'SpeciesName', 5);
myPokemon.addMove({ name: 'Move Name', power: 80, category: 'special' });
player.addPokemon(myPokemon);
```

### Adding New Moves

```javascript
const move = {
    name: 'Awesome Attack',
    power: 100,
    category: 'physical', // or 'special'
    accuracy: 100
};
pokemon.addMove(move);
```

### Starting Battles

```javascript
const opponentPokemon = new Pokemon('Rival\'s Pokémon', 'Species', 5);
const battle = new Battle(playerPokemon, opponentPokemon);
battle.playerAttack(0); // Attack with move at index 0
```

## Contributing

Feel free to fork this repository and submit pull requests for improvements!

## License

This is a fan project. Pokémon is owned by Nintendo/Game Freak.

## Credits

Built with vanilla JavaScript and HTML5 Canvas - no external game engines required!
