class InteractiveElementsBox {

    constructor(elements) {

        let _elementArray = [];
        let _greenIndex = null;
        let _isSave = null;
        let _statistics = new Statistics();
        let _clicked = false;

        for (var i = 0; i < elements; i++) {
            const _element = new ReflexElement(true, i);
            _elementArray.push(_element);
        }

        const infoClick = function (event) {
            _isSave = _greenIndex == event.detail.index;
            _statisticUpdate();
            _clicked = true;
            _isSave ? console.log(" trafiony ") : alert('Klinąłeś nie w ten kwadrat. Straciłeś życie');
            _elementArray.forEach(element => {
                element.isLocked(true);
                element.reset()
            });
        };

        const _statisticUpdate = function () {
            let score = _statistics.getScore();
            let lives = _statistics.getLives();
            _isSave ? _statistics.setScore(++score) : _statistics.setLives(--lives);
            _statistics.updateLives();
            _statistics.updateScore();
            if (_statistics.getLives() === 0) {
                dispatchEvent(new CustomEvent("GameOver"));
                alert('Koniec Gry');
            }
        }

        const showGreen = function () {
            _greenIndex = Math.floor(Math.random() * (elements));
            _elementArray.forEach(e => e.reset());
            _elementArray[_greenIndex].setGreen();
            _elementArray.forEach(element => element.isLocked(false));

        };

        const hideGreen = function () {
            if (!_clicked) {
                _isSave ? console.log('Brawo') : alert('Za poźno. Straciłeś życie');
                _statisticUpdate();
            }
            _clicked = false;
            _isSave = false;
            _greenIndex = null;
            _elementArray.forEach(element => element.isLocked(false));
            _elementArray.forEach(e => e.reset());
        };

        this.isLocked = (locked) => _elementArray.forEach(element => element.isLocked(locked));
        this.reset = () => {
            _elementArray.forEach(e => e.reset());
            _statistics.setScore(0);
            _statistics.setLives(3);
            _statistics.updateLives();
            _statistics.updateScore();
        };

        addEventListener('hideGreen', hideGreen.bind(this));
        addEventListener('showGreen', showGreen.bind(this));
        addEventListener('clickElement', infoClick.bind(this));
    }
}