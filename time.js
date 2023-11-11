class Time {

    constructor() {
        let _time = 0;
        let _active = false;
        let _idI = null;
        let _panel = document.querySelector('.time p');
        const _start = () => {
            _time++;
            if (_time % 300 === 0 && _time >= 300) {
                dispatchEvent(new CustomEvent('showGreen'));
            }
            if ((_time - 200) % 300 === 0 && _time >= 300) {
                dispatchEvent(new CustomEvent('hideGreen'));
            }
            _panel.textContent = 'Czas : ' + (_time / 100).toFixed(2);
        };


        this.startTimer = () => {
            !_active ? _idI = setInterval(_start, 10) : clearInterval(_idI);
            _active = !_active;
        };

        this.reset = () => {
            _time = 0;
            _panel.textContent = 'Czas : 0';
            _active = false;
            clearInterval(_idI);
        }
    }
}