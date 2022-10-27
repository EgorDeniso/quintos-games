// screen width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball;

let scoreL = 0;
let scoreR = 0;

function setup() {
	// code in this function gets run once at the start
	// of the game

	let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

	let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

	let wall = new Sprite();
	wall.x = width / 2;
	wall.y = height;
	wall.w = 300;
	wall.h = 10;
	wall.collider = 'static';

	let topWall = new Sprite();
	topWall.x = width / 2;
	topWall.y = 0;
	topWall.w = 300;
	topWall.h = 10;
	topWall.collider = 'static';

	// creates a ball in center of the screen

	ball = new Sprite(imgBall);
	ball.x = width / 2;
	ball.y = height / 2;
	ball.diameter = 8;
	ball.bounciness = 1;
	ball.friction = 0;
	ball.serveSpeed = 1.5;
	ball.speedLimit = 1.5;
	ball.speed = 1.5;
	ball.direction = 45;

	paddleL = new Sprite(imgPaddle);
	paddleL.x = 8;
	paddleL.y = height / 2;
	paddleL.collider = 'kinematic';

	paddleR = new Sprite(imgPaddle);
	paddleR.x = width - 8;
	paddleR.y = height / 2;
	paddleR.collider = 'kinematic';
}

let side = round(random(1, 2));
let guess;

function draw() {
	// code in this function gets run 60 times per second
	background('b');

	if (kb.pressing('w')) {
		paddleL.vel.y = -4;
	} else if (kb.pressing('s')) {
		paddleL.vel.y = 4;
	} else {
		paddleL.vel.y = 0;
	}

	if (kb.pressing('ArrowUp')) {
		paddleR.vel.y = -4;
	} else if (kb.pressing('ArrowDown')) {
		paddleR.vel.y = 4;
	} else {
		paddleR.vel.y = 0;
	}

	if (ball.collides(paddleL)) {
		ball.speedLimit += 0.5;
		ball.speed = ball.speedLimit;
	}

	if (ball.collides(paddleR)) {
		ball.speedLimit += 0.5;
		ball.speed = ball.speedLimit;
	}

	if (ball.x < 0) {
		scoreR += 1;
		text(scoreR, 3, 21);
		let number = round(random(1, 2));
		if (number == 1) {
			ball.direction = 45;
		} else {
			ball.direction = 315;
		}
	}
	if (ball.x > width) {
		scoreL += 1;
		text(scoreL, 3, 11);
		let number = round(random(1, 2));
		if (number == 1) {
			ball.direction = 135;
		} else {
			ball.direction = 225;
		}
	}

	// if the ball goes off screen
	if (ball.x < 0 || ball.x > width) {
		// place it back in the middle
		ball.x = width / 2;
		ball.y = height / 2;
		ball.speed = ball.serveSpeed;
		ball.speedLimit = ball.serveSpeed;
	}
}
