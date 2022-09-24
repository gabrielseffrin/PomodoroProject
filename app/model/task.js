export class Task {
    constructor(text, isVisible) {
        this.text = text
        this.isVisible = isVisible
    }

    get _text() {
        return this.text
    }

    get _isVisible() {
        return this.isVisible
    }

    getTask() {
        return `
        <div class="row">
            <div id="col">
                <div class="form-check task">
                    <div id="conteudo">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            ${this.text}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}