export class Task {
    constructor(text, isVisible) {


        this._text = text;
        this._isVisible = isVisible
    }
    getText() {
        return this._text
    }

    getIsVisible() {
        return this._isVisible
    }

    getTask() {
        return `
        <div class="row">
            <div id="col">
                <div class="form-check task">
                    <div id="conteudo">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            ${this._text}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}