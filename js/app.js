// Enemies our player must avoid
function Enemy() {
    this.startPosX = -this.crawl;
    this.x = this.startPosX;
    this.y;
    this.crawl = 101;    
    this.speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // If the enemy object instance has moved past the right-boundary
    if (this.x < this.crawl * 5) {
        // Move the enemy object forward
        // Multiply rightward movement by dt to maintain constant speed
        this.x += (this.speed * dt);
    }
    // Once enemy object instance has exceeded right-boundary (off-canvas)
    else {
        // Restart enemy object instance to one cell left of left-boundary (off-canvas)
        this.x = -this.crawl;

        // Randomize y-position for an enemy object's looping behavior
        const yArr = [83, 166, 249];
        this.y = (yArr[Math.floor(Math.random() * yArr.length)]) - 20;

        // Randomize speed for enemy object movement
        const speedArr = [200, 225, 250, 275, 300, 325, 350, 375, 400];
        this.speed = (speedArr[Math.floor(Math.random() * speedArr.length)]);
        
        /** ######## Begin Attribution ########
        *  Referenced helper code for calling random indexes from an array at
        *  https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
        *  on August 1, 2018  
        *  ######## End Attribution ########
        */
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player object constructor function
function Player() {
    this.cross = 101;
    this.rise = 83;
    this.startPosX = this.cross * 2;
    this.startPosY = (this.rise * 5) - 20;
    this.x = this.startPosX;
    this.y = this.startPosY;
    this.sprite = 'images/char-boy.png';
};

// Update() method for Player class
// Player.prototype.update = function(dt) {};

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
const player = new Player();

const allEnemies = [];
const bugOne = new Enemy();
const bugTwo = new Enemy();
allEnemies.push(bugOne, bugTwo);

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
