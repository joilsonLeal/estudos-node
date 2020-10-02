class View<T> {

    protected _element: Element;

    constructor(seletor: string) {
        this._element = document.querySelector(seletor);
    }

    update(model: T): void {
        this._element.innerHTML = this.template(model);
    }

    template(model: T): string{
        throw new Error('Você deve implementar o método template.');
    }
}