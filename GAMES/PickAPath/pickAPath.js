// start of wrapper (I will explain how this works later)
async function start() {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet

	let prices = [60, 70, 80, 50, 50, 800, 200, 120, 1600, 400, 2000, 30, 30, 20];

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty String
		let options = [];

		if (choice == 0) {
			/* Part A0: Start your story! */
			msg =
				"Hi I'm John welcome to my bicycle store! What would you like to look at?\n\n\t" +
				"1: childrens' bikes\n\t" +
				'2: adult bikes\n\t' +
				'3: bike accessories';
			options = [1, 2, 3];
		} else if (choice == 1) {
			/* Part A1: continue the story */
			msg = 'How old is the kid?\n\n\t' + '4: 4 years old and below\n\t' + '5: 5 years old and above';
			options = [4, 5];
		} else if (choice == 2) {
			msg =
				"Nice! Here is our selection of younger childrens' bicycles. Which one would you like to buy?\n\n\t" +
				'11: Tan colored fat tire mountain bike\n\t' +
				'12: Single speed light blue beach cruiser\n\t' +
				'13: White Steel light street bike\n\t' +
				'14: Ultra light black racing bike\n\t' +
				'15: Light red small tire downhill bike\n\t' +
				'16: White Electric bike';
			options = [11, 12, 13, 14, 15, 16];
		} else if (choice == 3) {
			msg =
				'Cool! Here is our selection of bike accessories. Which one would you like to buy?\n\n\t' +
				"17: men's bike helmet\n\t" +
				"18: women's bike helmet\n\t" +
				'19: bike kickstand';
			options = [17, 18, 19];
		} else if (choice == 4) {
			msg =
				"Sweet! Here is our selection of younger childrens' bicycles. Which one would you like to buy?\n\n\t" +
				'9: red tricycle\n\t' +
				'10: blue tricycle';
			options = [9, 10];
		} else if (choice == 5) {
			msg =
				"Alright! Here is our selection of older childrens' bicycles. Which one would you like to buy?\n\n\t" +
				'6: Dirt bike style red and black bike\n\t' +
				'7: Pink street bike with purple flowers\n\t' +
				'8: Blue and black bike with a high back seat';
			oprions = [6, 7, 8];
		} else if (choice >= 6 && choice < 20) {
			msg =
				'The price of that item is $' +
				prices[choice - 6] +
				'\n\n\t' +
				"20: I'll buy it\n\t" +
				'21: No thanks, I want to look at other items.';
			oprions = [20, 21];
		} else if (choice == 20) {
			msg =
				'Thanks for you purchase! Would you like to buy something else?\n\n\t' +
				"1: childrens' bikes\n\t" +
				'2: adult bikes\n\t' +
				'3: bike accessories';
			options = [1, 2, 3];
		} else if (choice == 21) {
			msg =
				'What would you like to look at?\n\n\t' +
				"1: childrens' bikes\n\t" +
				'2: adult bikes\n\t' +
				'3: bike accessories';
			options = [1, 2, 3];
		}

		// prompt the player to make choices

		/* Part B0: end the game if there are no more choices to make */
		let userInput = await prompt(msg);

		/* Part B1: check if the player made a valid choice, reject invalid choices */
		if (options.includes(userInput)) {
			choice = userInput;
		} else {
			await alert('Invalid choice, try again!');
		}
	}

	exit(); // exits the game
} // end wrapper
