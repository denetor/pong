class ScenePlay extends Phaser.Scene {
	constructor() {
		super('ScenePlay');
	}


	preload() {
		// load image example
		// this.load.image('sky', '../assets/sky.png');


		// load spritesheets
		this.load.spritesheet('ss-player', '../assets/spritesheets/player.png', {
			frameWidth: 16,
			frameHeight: 48
		});
	}



	create() {
		var self = this;

		// create example image
		// this.add.image(0, 0, 'sky').setOrigin(0, 0);


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

		// add player 1
		this.player1 = new Player(this, 50, this.game.config.height * 0.5 - 24);
		this.player1.setCollideWorldBounds(true);
		this.player1controls = {
			up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
			down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
		};

		// add player 2
		// this.player2 = new Player(this, game.config.width-50-16, game.config.height * 0.5 - 24);
		// this.player2.setCollideWorldBounds(true);
		// this.player2controls = {
		// 	up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
		// 	down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
		// };
	}



	update(t, dt) {
		// manage player1 movement
		if (this.player1controls.up.isDown) {
			this.player1.moveUp( preferences.playerSpeed);
		} else if (this.player1controls.down.isDown) {
			this.player1.moveDown(preferences.playerSpeed);
		} else {
			this.player1.moveDown(0);
		}

		// manage player2 movement
		// if (this.player2controls.up.isDown) {
		// 	this.player2.moveUp( preferences.playerSpeed);
		// } else if (this.player2controls.down.isDown) {
		// 	this.player2.moveDown(preferences.playerSpeed);
		// } else {
		// 	this.player2.moveDown(0);
		// }

		// update players
		this.player1.update(dt);
		// this.player2.update(dt);
	}
}
