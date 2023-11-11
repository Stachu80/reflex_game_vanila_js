class Game {

	constructor(elements = 10) {

		let _startBtn = document.querySelector('.start');
		let _resetBtn = document.querySelector('.reset');
		let _interactiveElements = new InteractiveElementsBox(elements);
        let _time = new Time();

		const startTimer = function () {
			_interactiveElements.isLocked(false);
			_time.startTimer();
		};

		const resetTimer = function () {
			_interactiveElements.isLocked(true);
			_interactiveElements.reset();
			_time.reset();
		};

		_interactiveElements.isLocked(true);
		_interactiveElements.reset();
		_startBtn.addEventListener('click', startTimer);
		_resetBtn.addEventListener('click', resetTimer);
		addEventListener('GameOver', resetTimer.bind(this));
	}

}