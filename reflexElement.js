class ReflexElement {

    constructor(isLocked, index) {

        let _index = index;
        let _isLocked = isLocked;
        let _reflexElement = document.createElement('reflex-element');
        let elements = document.querySelector('.elements');
        const check = () => {
            if (!_isLocked) {
                _reflexElement.style.backgroundColor = _reflexElement.isSelected ? 'yellow' : 'white';
                _reflexElement.isSelected = !_reflexElement.isSelected;
                dispatchEvent(new CustomEvent("clickElement", {
                    detail: {
                        index: _index
                    }
                }));
            }
        };
        
        _reflexElement.addEventListener("click", check.bind(this));
        _reflexElement.isSelected = false;
        
        this.isLocked = (locked) => _isLocked = locked
        this.setGreen = () => _reflexElement.style.backgroundColor = 'green';
        this.reset = () => {
            _reflexElement.style.backgroundColor = 'white';
            _reflexElement.isSelected = false;
        };
        elements.appendChild(_reflexElement);
    }
}