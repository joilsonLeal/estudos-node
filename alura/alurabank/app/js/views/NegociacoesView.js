class NegociacoesView {
    constructor(seletor) {
        this._element = document.querySelector(seletor);
    }
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                    
                <tbody>
                    ${model.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.quantidade * negociacao.valor}</td>
                        </tr>
                    `).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>  
        `;
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
}
