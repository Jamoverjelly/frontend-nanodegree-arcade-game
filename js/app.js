// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

function Player() {
    this.cross = 101;
    this.rise = 83;
    this.startPosX = this.cross * 2;
    this.startPosY = (this.rise * 5) - 20;
    this.x = this.startPosX;
    this.y = this.startPosY;
    this.sprite = 'images/char-boy.png';
};

// Adding an update() method to the Player class, initially does nothing
Player.prototype.update = function(dt) {

};

// Draw the player on the screen and test
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Update player object instance with new x and y properties according to input
Player.prototype.handleInput = function(input) {
    switch(input) {
        case 'left':
            if (this.x > 0) {
                this.x -= this.cross;
            }
            break;
        case 'right':
            if (this.x < this.cross * 4) {
                this.x += this.cross;
            }            
            break;
        case 'up':
            if (this.y > 0) {
                this.y -= this.rise;
            }
            break;
        case 'down':
            if (this.y < this.rise * 4) {
                this.y += this.rise;
            }
            break;
    }
}

/** ######## Begin Attribution ########
 *  Referenced helper code for handling user input to control player movement at
 *  https://discussions.udacity.com/t/classic-arcade-game-grade/183326
 *  on July 31, 2018
 *  
 *  Reviewed JavaScript switch statements at
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 *  on July 31, 2018
 *  ######## End Attribution ########
 */


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Instantiating player object instance for test
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
