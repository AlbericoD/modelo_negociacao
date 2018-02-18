class Negociacoes {

    private _negociacoes:Array<Negociacao> =[];

    /**
     * adiciona uma negociacao para não ser modificada
     */
    public adiciona(negociacao:Negociacao) {
        this._negociacoes.push(negociacao);
    }
    /**
     * retorna o novo array de negociacoes
     */
    public paraArray() {
        return this._negociacoes;
    }

    
}