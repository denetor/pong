'use strict';

const gameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	scene: [ScenePlay],
	backgroundColor: 0xCCCCCC,
	physics: {
		default: "arcade",
	}
};

let game = new Phaser.Game(gameConfig);
window.focus();
