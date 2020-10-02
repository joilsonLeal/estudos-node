class View {

    protected _element: Element;

    constructor(seletor: string) {
        this._element = document.querySelector(seletor);
    }
}