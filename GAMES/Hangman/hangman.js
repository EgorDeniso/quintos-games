const hangman = [
	`
      
      
      
      
      
      
=========`,
	`
      +
      |
      |
      |
      |
      |
=========`,
	`
  +---+
      |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
];

const wordsList =
	'abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled funny gabby galaxy galvanize gazebo gizmo glow glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack lengths lucky luxury marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quip quiz quizzes razzmatazz rhythm scratch snazzy squawk staff strength stretch stronghold stymie subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie';

// the start function gets run when the game starts
async function start() {
	// your code goes here! below this line

	/* Part A: split the wordsList String into an array called words, then choose a random word */
	words = wordsList.split(' ');
	log(words);

	let response = 'yes';

	while (response == 'yes') {
		let num = round(random(0, words.length - 1));
		let word = words[num]; // get word from array
		log(word);

		/* Part B: make an array with a line for each letter in the word */
		// Example word: 'quiz'
		// lines -> ['_', '_', '_', '_']
		let lines = [];
		for (let i = 0; i < word.length; i++) {
			lines.push('_');
		}
		log(lines);

		let wrongGuesses = 0;

		/* Part C: show the lines for the word below the hangman art */
		while (lines.includes('_')) {
			let guess = await prompt(hangman[wrongGuesses] + '\n\n' + lines.join(' '));

			if (guess == word) break;

			let isCorrect = false;
			for (let i = 0; i < word.length; i++) {
				if (guess == word[i]) {
					lines[i] = guess;
					isCorrect = true;
				}
			}
			if (isCorrect == false) wrongGuesses++;

			if (wrongGuesses > hangman.length - 1) {
				await alert('You lost! The word was ' + word + '.');
				break;
			}
		}

		if (wrongGuesses < hangman.length) {
			await alert('you won!');
		}

		response = await prompt('would you like to continue the game?(yes or no)');
	}

	exit(); // exits the game
} // end of the start function
