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
}