class Question {
	constructor(question, answer, options, imagePath) {

		let answerAttempted = false;

		this.questionContainer = createElement('div', 'question-container');

        if(imagePath){
            const img = new Image();
            img.src = imagePath;
            this.questionContainer.appendChild(img);
        }
        const questionHeader = createElement('h2', 'question', question);
        this.questionContainer.appendChild(questionHeader);
        

		const answers = createElement('div', 'answers');
		this.questionContainer.appendChild(answers);

		const answerDiv = createElement('div', 'option', answer);
		answers.appendChild(answerDiv);

		// user chooses correct optoin
		answerDiv.addEventListener('click', function() {
			if (!answerAttempted) {
				answerDiv.classList.add('correct-answer');
				answerAttempted = true;
				questionAnswered(true);
			}
		});

		for (let i = 0; i < options.length; i++) {
			let option = createElement('div', 'option', options[i]);
			answers.appendChild(option);

			// user chooses wrong option
			option.addEventListener('click', function() {
				if (!answerAttempted) {
					option.classList.add('wrong-answer');
					answerAttempted = true;
					questionAnswered(false);
				}
			});
		}

		// shuffle options randomly
		for (let i = answers.children.length; i >= 0; i--) {
			let index = Math.floor(Math.random() * i);
			let child = answers.children[index];
			answers.appendChild(child);
		}
	}

	getHTML() {
		return this.questionContainer;
	}
}