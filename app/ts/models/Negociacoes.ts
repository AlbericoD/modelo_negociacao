class Negociacoes {

    private _negociacoes:Array<Negociacao> =[];

    /**
     * adiciona uma negociacao para não ser modificada
     */
    public adiciona(negociacao:Negociacao):void {
        this._negociacoes.push(negociacao);
    }
    /**
     * retorna o novo array de negociacoes
     */
    public paraArray():Array<Negociacao> {
        return [].concat(this._negociacoes);
    }

    
}