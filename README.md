
A terminal-based Snake-client implementation written in JavaScript (Node.js).


## Instructions

To play the game, one needs to connect to server.

## Localhost Server
Follow instruction below.

```bash
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer

# install and run via npm
npm install
npm run play
```

## Remote Server
Change server ip address and port in `input.js`. 

## Change Player Name
To change player, go into `client.js` line 15 and change `conn.write(name:"YOUR_NAME_HERE")`

## Start Game

To start game, run node `play.js` in `snake-client` folder.

# Movement Keys

Use WASD to move snake. (Case insensitive)
W - Up
S - Down
A - Left
D - Right
G - In game message: "GGEZ"
T - In game message: "Ez pz"

## Exit Game

To exit, press Ctrl+C.





