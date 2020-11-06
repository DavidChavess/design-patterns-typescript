import Entrega from "./Entrega";

class Correios implements Entrega{
    
    tarifaKm: number = 0.6;
    horasKm: number = 1.2;
    imposto: number = 1.1;

    calculaFrete(quilometros: number): string {
        return `R$ ${ this.tarifaKm * quilometros * this.imposto}`;
    }
    calculaTempo(quilometros: number): string {
        return `${ Math.ceil(quilometros * this.horasKm) / 24 } dias para realizar a entrega`;
    }

}

export default Correios;