import Entrega from "./Entrega";

class Strategy {
    entrega: Entrega;
    quilometros: number;

    constructor(entrega : Entrega, quilometros : number){
        this.entrega = entrega;
        this.quilometros = quilometros;
    }

    setEntrega(entrega : Entrega) : void {
        this.entrega = entrega;
    }

    setQuilometros(quilometros : number) : void {
        this.quilometros = quilometros;
    }

    calculaTempo() : string {
        return this.entrega.calculaTempo(this.quilometros);
    }

    calculaFrete() : string {
        return this.entrega.calculaFrete(this.quilometros);
    }
}

export default Strategy;