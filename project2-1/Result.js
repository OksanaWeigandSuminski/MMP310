class Result {
    constructor(correct, wrong) {
        this.correct = correct;
        this.wrong = wrong;
    }
    getHTML() {
		return this.resultContainer;
	}
}