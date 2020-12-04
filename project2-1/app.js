/*
	quiz web app
*/

// html references
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const message = document.getElementById('message');
const quizContainer = document.getElementById('quiz');
const returnButton = document.getElementById('return');

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
questions.push(new Question("Which of the following three passwords is the most secure?", "MkS!8Y", ["River123", "87654321"], "In determining your password strength, pay close attention to two significant details: the complexity and length you choose. Long-tail, complex passwords are tough to crack. To create complex but memorable passwords, use different types of characters, a mixture of lower and uppercase letters, symbols, and number"));
questions.push(new Question("How do you call malicious software that infects your computer and displays messages demanding a fee to be paid in order for your system to work again?", "Ransomware", ["Botnet", "Spam"], "Ransomware usually enters devices as a Trojan, masquerading as a normal file that is downloaded intentionally or unintentionally by the user. Upon execution, ransomware begins encrypting the files on an infected device and typically displays a message informing the victim that their files can only be decrypted if a ransom is paid to the attackers."));
questions.push(new Question("What is the name of the feature that is present in some Web browsers that disables Web cache, cookies, browsing history or any other tracking feature that the browser may have?", "All of the above", ["Incognito mode", "Private browsing"], "When you surf the web incognito, your browser doesn’t save your browsing history, cookies, site data or information you enter in forms. It does, however, keep any downloaded files or bookmarks created during the session. Not to mention the fact that your IP address and computer data are still vulnerable to hackers. Your internet service provider can still see your activity, as can a school or employer providing your internet access or computer."));
questions.push(new Question("If you're in a café and Wi-Fi network requires a password to access, is it generally safe to use that network for sensitive activities such as online banking?", "No, it is not safe", ["Yes, it is safe", "It is safe, if you know the owner of the café"], "Wi-Fi hotspots in coffee shops, libraries, airports, hotels, universities, and other public places are convenient, but often they’re not secure. If you connect to a Wi-Fi network, and send information through websites or mobile apps, it might be accessed by someone else. To protect your information when using wireless hotspots, send information only to sites that are fully encrypted, and avoid using mobile apps that require personal or financial information."));
questions.push(new Question("What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?", "Use of insecure Wi-Fi networks", ["De-anonymization by network operators", "Phishing attacks"], "A VPN acts as a connection between the user’s computer, smartphone or tablet and the internet. All the information passing between the user and the net is encrypted and the user’s identity and browsing history is hidden from both websites and the user’s Internet Service Provider."));
questions.push(new Question("A rogue access point is an access point installed on a network without the network owner’s permission. Why is this bad?", "If an attacker owns the access point, they can intercept the data flowing through the network", ["It oblige a user into revealing their private information", "None of the above"], "If an attacker installs an access point they are able to run various types of vulnerability scanners, and rather than having to be physically inside the organization, can attack remotely—perhaps from a reception area, adjacent building, car park, or with a high gain antenna, even from several miles away."));
questions.push(new Question("Addison visits a café while visiting a friend in another city. The café offers three options for Internet connection: a public WiFi hotspot, an Ethernet cable along the wall, a password-protected WiFi hotspot (food purchase required). Which of those could be a rogue access point?", "Either of the WiFi hotspots", ["Only the public WiFi hotspot", "Any of them could be a rogue access point"], "Any WiFi hotspot (access point) could potentially be a rogue access point. Most rogue access points are public, but a clever attacker could figure out the password of a nearby hotspot (perhaps by purchasing food themselves) and mimic that hotspot."));
questions.push(new Question("The administration of a high school decides to install antivirus software on all of the school computers. What can the antivirus software protect the computers from?", "The antivirus software can protect the computers from any malware that it is able to successfully detect", ["The antivirus software can protect the computers entirely from all computer viruses", "The antivirus software can protect the computer from a distributed denial-of-service (DDoS) attack"], "Antivirus software, sometimes known as anti-malware software, is designed to detect, prevent and take action to disarm or remove malicious software from your computer such as viruses, worms and Trojan horses. It may also prevent or remove unwanted spyware and adware in addition to other types of malicious programs. Antivirus software will begin by checking your computer programs and comparing them to known types of malware. It will also scan your computer for behaviors that may signal the presence of a new, unknown malware."));
questions.push(new Question("Why is a computer virus more dangerous than other types of malware?", "A virus can make copies of itself, including copying itself into an existing file", ["A virus has access to the user's input devices, so it can see what they type and how they move their cursor", "A virus can access the internal system processes of a computer so that it can change how the operating system works"], "By definition, a computer virus is a type of malware that propagates by making copies of itself. That's more dangerous than a single file since it can overwrite user files and can become much harder to remove entirely from a system."));


console.log(questions);


// events
startButton.addEventListener('click', function () {
	startButton.classList.add('disable');
	answerResponse.textContent = "CHOOSE AN ANSWER!";
	loadNextQuestion();
});

nextButton.addEventListener('click', function () {
	quizContainer.textContent = ''; // hacky way to remove quiz html
	nextButton.classList.add('disable');
	currentQuestion++;
	loadNextQuestion();
	answerResponse.textContent = "CHOOSE AN ANSWER!";
	example.textContent = '';
});

endButton.addEventListener('click', function () {

	//old code 

	quizContainer.textContent = ''; // hacky way to remove quiz html
	endButton.classList.add('disable');
	answerResponse.textContent = `YOU GOT ${score} OUT OF ${questions.length}! `;
	example.textContent = '';

	// add extra message 
	if (score == 0) {
		answerResponse.textContent += "Try again!";
		example.textContent = '';
	}
	addReferences();

	returnButton.classList.remove("disable");
});
returnButton.addEventListener('click', function () {
	location.href = " https://oksanaweigandsuminski.github.io/Make-A-Thon/"
});

// add references
var referenceList = [
	{ url: 'https://www.howtogeek.com/183812/htg-explains-what-is-a-botnet/', text: 'How-To Geek has a good general introduction to botnets.' },
	{ url: 'https://www.itproportal.com/2008/09/09/online-security-what-does-https-actually-mean/', text: 'ITProPortal has a good explanation of how https:// works that’s written for non-technical readers.' },
	{ url: 'https://digitalguardian.com/blog/what-is-ransomware-and-how-to-protect-against-attacks', text: ' Digital Guardian has a good introduction to ransomware that includes advice on how to protect yourself.' },
	{ url: 'https://searchsecurity.techtarget.com/definition/phishing', text: ' TechTarget has a good introduction to phishing.' },
	{ url: 'https://lifehacker.com/top-10-ways-to-stay-safe-on-public-wi-fi-networks-1791800347', text: ' Lifehacker has a good article on how to stay safe on public WiFi networks.' },
	{ url: 'https://www.howtogeek.com/195430/how-to-create-a-strong-password-and-remember-it/', text: ' How-To Geek has a good article on creating and remembering strong passwords.' }
];

function addReferences() {
	for (let i = 0; i < referenceList.length; i++) {
		const ref = referenceList[i];
		addReferenceHTML(ref.url, ref.text);
	}
}

function addReferenceHTML(url, text) {
	const p = document.createElement('p');
	p.classList.add('reference-p');
	const a = document.createElement('a');
	a.classList.add('reference-link');
	a.href = url;
	a.textContent = text;
	p.appendChild(a);
	document.body.appendChild(p);
}

// callback function
function loadNextQuestion() {

	let question = questions[currentQuestion].getHTML();
	quizContainer.appendChild(question);
	quizContainer.classList.remove("disable");

}

function questionAnswered(isCorrect, exampleText) {
	if (isCorrect) {
		answerResponse.textContent = "CORRECT! "
		example.textContent = exampleText;
		score++;
	} else {
		answerResponse.textContent = "INCORRECT! "
		example.textContent = exampleText;
	}

	// if there are more questions
	if (currentQuestion < questions.length - 1) {
		nextButton.classList.remove('disable');
		example.classList.remove('disable');
	} else {
		endButton.classList.remove('disable');
	}
	quizContainer.classList.add("disable");
}


// helper function to create html elements
function createElement(tagName, className, text) {
	const elem = document.createElement(tagName);
	elem.classList.add(className);
	elem.textContent = text;
	return elem;
}