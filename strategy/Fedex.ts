import Entrega from "./Entrega";

class Fedex implements Entrega {

    tarifaKm: number = 0.4;
    horasKm: number = 1.1;
    imposto: number = 1.15;

    calculaFrete(quilometros: number): string {
        return `R$ ${ this.tarifaKm * quilometros * this.imposto}`;
    }
    calculaTempo(quilometros: number): string {
        return `${ Math.ceil(quilometros * this.horasKm) / 24 } dias para realizar a entrega`;
    }

}

export default Fedex;