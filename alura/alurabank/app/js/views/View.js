class View {
    constructor(seletor) {
        this._element = document.querySelector(seletor);
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    template(model) {
        throw new Error('Você deve implementar o método template.');
    }
}
