export function Task(text, isVisible) {

    this._text = text
    this._isVisible = isVisible

    function getText() {
        return this._text
    }

    function getIsVisible() {
        return this._isVisible
    }

    function getTask() {
        return `
        <div class="row">
            <div id="col">
                <div class="form-check task">
                    <div id="conteudo">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            ${getText()}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}