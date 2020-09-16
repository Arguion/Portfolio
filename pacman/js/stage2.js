class stage2 extends Phaser.Scene {
    constructor() {
        super('level2');
    }

    preload() {
        this.load.image('atlaspacman', 'assets/atlaspacman.png');
        this.load.image('diamante', 'assets/diamante.png');
        this.load.tilemapTiledJSON('map', 'assets/stage2.json');
        this.load.image('player', 'assets/player.png');
    }

    create() {
        map = this.make.tilemap({ key: 'map' });
        var diamanteTiles = map.addTilesetImage('diamante');
        var playerTiles = map.addTilesetImage('player');
        var groundTiles = map.addTilesetImage('atlaspacman');

        map.createDynamicLayer('ground', groundTiles, 0, 0);
        wallLayer = map.createDynamicLayer('wall', groundTiles, 0, 0); 
        diamantesLayer = map.createDynamicLayer('diamantes', diamanteTiles);
        playerLayer = map.createDynamicLayer('player', playerTiles);




        cursors = game.input.keyboard.createCursorKeys();

    }

    update ()
    {
        playerLayer.body.setZeroVelocity();
    
        if (cursors.left.isDown)
        {
            playerLayer.body.moveLeft(400);
        }
        else if (cursors.right.isDown)
        {
            playerLayer.body.moveRight(400);
        }
    
        if (cursors.up.isDown)
        {
            playerLayer.body.moveUp(400);
        }
        else if (cursors.down.isDown)
        {
            playerLayer.body.moveDown(400);
        
        }
    }

    updateText ()
    {
        text.setText(
            'Arrow keys to move. Space to jump' +            
            '\nCoins collected: ' + diamantesCollected 
        );
    }
   

}