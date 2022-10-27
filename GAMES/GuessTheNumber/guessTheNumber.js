async function start() {
	// your code goes here!
	let num = round(random(1, 100));
	let guess;

	while (guess != num) {
		guess = await prompt('guess a number');

		if (guess == num) {
			await alert('you got it right');
		} else if (guess < num) {
			await alert('too low');
		} else if (guess > num) {
			await alert('too high');
		}
	}

	exit();
}
