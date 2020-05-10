class ScenePlay extends Phaser.Scene {
	constructor() {
		super('ScenePlay');
	}


	preload() {
		// load spritesheets
		this.load.spritesheet('ss-player', '../assets/spritesheets/player.png', {
			frameWidth: 16,
			frameHeight: 48
		});
	}



	create() {
		var self = this;

		// create animations
		this.anims.create({
			key: 'anim-player',
			frames: this.anims.generateFrameNumbers('ss-player', {
				start: 0,
				end: 0
			}),
			frameRate: 1,
			repeat: -1
		});

		// add players
		this.player1 = new Player(this, 50, game.config.height * 0.5 - 24);
		this.player2 = new Player(this, game.config.width-50-16, game.config.height * 0.5 - 24);

		// checking for input
		this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		// this.downKey = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
		this.upKey.on('down', function(key, event) {
			self.player2.y--;
			event.stopPropagation();
		});
	}



	update() {
		//
	}
}
