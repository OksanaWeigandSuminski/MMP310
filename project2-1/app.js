/*
	quiz web app
*/

// html references
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const message = document.getElementById('message');
const quizContainer = document.getElementById('quiz');

// quiz questions
let questions = [];
let currentQuestion = 0;
let score = 0;

questions.push(new Question("A group of computers that is networked together and used by hackers to steal information is called a …", "Botnet", ["Rootkit", "Operating system"],
"Botnets hide on your computer and hijack it to perform distributed denial-of-service attacks."));
questions.push(new Question("Some websites and online services use a security process that protects the user from an unknown person trying to access their data. What authentication method does image exemplify?", 
"Two-step authentication", ["Keystroke logging", "Biometric authentication"], "Multi-factor authentication requires the user to provide two or more keys to unlock access to a website. One key is usually the user’s password. A commonly used second key is a security code that is sent to the user in a text message or email.","Q1.png"));
questions.push(new Question("What does the https:// at the beginning of a URL denote, as opposed to http:// (without the “s”)?", "That information entered into the site is encrypted", ["That the site is not accessible to certain computers", "That the site is the newest version available"], "The “s” in https:// means that communication between the user and the website is encrypted using a form of encryption called SSL (Secure Socket Layer). If someone intercepts information you enter on a website, such as your credit card number, they will not be able to read it."));
questions.push(new Question("Which of the following is an example of a “phishing” attack?", "All of the above", ["Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information", "Sending someone an email that contains a malicious link that is disguised to look like an email from someone the person knows"], "Phishing is a technique for gaining access to a user’s computer or to their sensitive information such as passwords and credit card numbers by posing as a legitimate and trustworthy source." ));
questions.push(new Question("Which of the following three passwords is the most secure?", "MkS!8Y", ["River123", "87654321"]));
questions.push(new Question("How do you call malicious software that infects your computer and displays messages demanding a fee to be paid in order for your system to work again?", "Ransomware", ["Botnet", "Spam"]));
questions.push(new Question("What is the name of the feature that is present in some Web browsers that disables Web cache, cookies, browsing history or any other tracking feature that the browser may have?", "All of the above", ["Incognito mode", "Private browsing"]));
questions.push(new Question("If you're in a café and Wi-Fi network requires a password to access, is it generally safe to use that network for sensitive activities such as online banking?", "No, it is not safe", ["Yes, it is safe", "It is safe, if you know the owner of the café"]));
questions.push(new Question("What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?", "Use of insecure Wi-Fi networks", ["De-anonymization by network operators", "Phishing attacks"]));
questions.push(new Question("A rogue access point is an access point installed on a network without the network owner’s permission. Why is this bad?", "If an attacker owns the access point, they can intercept the data flowing through the network", ["It oblige a user into revealing their private information", "None of the above"]));
questions.push(new Question("Addison visits a café while visiting a friend in another city. The café offers three options for Internet connection: a public WiFi hotspot, an Ethernet cable along the wall, a password-protected WiFi hotspot (food purchase required). Which of those could be a rogue access point?", "Either of the WiFi hotspots", ["Only the public WiFi hotspot", "Any of them could be a rogue access point"]));
questions.push(new Question("The administration of a high school decides to install antivirus software on all of the school computers. What can the antivirus software protect the computers from?", "The antivirus software can protect the computers from any malware that it is able to successfully detect", ["The antivirus software can protect the computers entirely from all computer viruses", "The antivirus software can protect the computer from a distributed denial-of-service (DDoS) attack"]));
questions.push(new Question("Why is a computer virus more dangerous than other types of malware?", "A virus can make copies of itself, including copying itself into an existing file", ["A virus has access to the user's input devices, so it can see what they type and how they move their cursor", "A virus can access the internal system processes of a computer so that it can change how the operating system works"]));


console.log(questions);


// events
startButton.addEventListener('click', function() {
	startButton.classList.add('disable');
	answerResponse.textContent = "CHOOSE AN ANSWER!";
	loadNextQuestion();
});

nextButton.addEventListener('click', function() {
	quizContainer.textContent = ''; // hacky way to remove quiz html
	nextButton.classList.add('disable');
	currentQuestion++;
	loadNextQuestion();
	answerResponse.textContent = "CHOOSE AN ANSWER!";
	example.textContent = '';
});

endButton.addEventListener('click', function() {
	quizContainer.textContent = ''; // hacky way to remove quiz html
	endButton.classList.add('disable');
	answerResponse.textContent = `YOU GOT ${score} OUT OF ${questions.length}! `;

	// add extra message 
	if (score == 0) {
		answerResponse.textContent += "Try again!";
	}
});


// callback function
function loadNextQuestion() {

	let question = questions[currentQuestion].getHTML();
	quizContainer.appendChild(question);

}

function questionAnswered(isCorrect, exampleText) {
	if (isCorrect) {
		answerResponse.textContent = "CORRECT! " 
		example.textContent =  exampleText;
		score++;
	} else {
		// message.textContent = "INCORRECT! " + exampleText;
		answerResponse.textContent = "INCORRECT! " 
		example.textContent =  exampleText;
	}

	// if there are more questions
	if (currentQuestion < questions.length - 1) {
		nextButton.classList.remove('disable');
		example.textContent.remove('disable');
	} else {
		endButton.classList.remove('disable');
	}
}


// helper function to create html elements
function createElement(tagName, className, text) {
	const elem = document.createElement(tagName);
	elem.classList.add(className);
	elem.textContent = text;
	return elem;
}