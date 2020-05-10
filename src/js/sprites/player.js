class Player extends Phaser.Physics.Arcade.Sprite {


	constructor(scene, x, y) {
		super(scene, x, y, 'player');
		this.scene = scene;
		this.scene.add.existing(this);
		this.play('anim-player');
		// this.body = new Phaser.Physics.Arcade.Body(scene.physics.world, this);
		// this.scene.physics.world.enable(this);
	}


}
