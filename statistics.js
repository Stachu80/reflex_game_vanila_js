class Statistics {
    constructor() {
        let _lives = null;
        let _score = null;
        let _scorePanel = document.querySelector('.score p');
        let _livesPanel = document.querySelector('.lives p');
        this.getLives = () => _lives;
        this.getScore = () => _score;
        this.setLives = lives => _lives = lives;
        this.setScore = score => _score = score;
        this.updateScore = () => _scorePanel.textContent = 'Punkty : ' + _score;
        this.updateLives = () => _livesPanel.textContent = 'Życie : ' + _lives;
    }
}