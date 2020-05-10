class Player extends Phaser.Physics.Arcade.Sprite {


	constructor(scene, x, y) {
		super(scene, x, y, 'player');
		this.scene = scene;
		this.scene.add.existing(this);
		this.play('anim-player');
		// this.setCollideWorldBounds(true);
		// this.body = new Phaser.Physics.Arcade.Body(scene.physics.world, this);
		// this.scene.physics.world.enable(this);

		// custom data
		this.setData('currentSpeedY', 0);
	}


	/**
	 * Set speed to move upwards
	 *
	 * @param speed
	 */
	moveUp(speed) {
		this.setData('currentSpeedY', -1 * speed);
	}

	/**
	 * Set speed to move downwards
	 *
	 * @param speed
	 */
	moveDown(speed) {
		this.setData('currentSpeedY', speed);
	}




	update(dt) {
		// update player position, basing on speed
		this.y += this.getData('currentSpeedY') / 1000 * dt;
	}


}
