let frog, lilypads;

function preload() {
	frog = new Sprite();
	frog.addAni('frog_jump.png', { size: [32, 16], frames: 7 });
	frog.ani.stop();
	lilypads = new Group();
	lilypads.addAni('lilypads.png', { size: [16, 16], frames: 12 });
}

function setup() {
	world.gravity.y = 10;
	noStroke();

	frog.x = 0;
	frog.y = 80;
	frog.w = 10;
	frog.h = 8;
	frog.rotationLock = true;

	lilypads.layer = 0;
	lilypads.y = 90;
	lilypads.w = 10;
	lilypads.h = 2;
	lilypads.collider = 'static';

	makeLilyPads();
}

function makeLilyPads() {
	/* Part A: Use a loop to make more lily pads.*/

	for (let i = 0; i < 50; i++) {
		let lily = new lilypads.Sprite();
		lily.x = 16 * i;
		lily.ani.frame = round(random(0, 11));
		lily.ani.frameDelay = round(random(60, 200));

		if (random() > 0.7) {
			i++;
		}
	}
}

function draw() {
	background('0');
	fill('3');
	rect(0, 0, width, 90);

	// if the frog is on the lilypad
	if (frog.y > 83 && frog.vel.y < 1) {
		frog.x = round(frog.x / 16) * 16;
		frog.ani.stop();
		frog.ani.frame = 0;

		if (kb.presses('ArrowUp')) {
			frog.ani.play();
			frog.ani.frameDelay = 3;
			// little jump
			frog.velocity.y = -1.4;
			frog.velocity.x = 0.97;
		} else if (kb.presses('ArrowRight')) {
			frog.ani.play();
			frog.ani.frameDelay = 4;
			// BIG jump!
			frog.velocity.y = -2;
			frog.velocity.x = 1.35;
		}
	}

	camera.x = frog.x + 64;

	if (frog.y > 200) {
		frog.x = 0;
		frog.y = 80;
	}
}
