import Conta from './Conta';

class ContaPoupanca implements Conta{
  
    titular: string;
    agencia: string;
    conta: string;
    saldo: number;

    sacar(valor: number): boolean {
        throw new Error('Method not implemented.');
    }
    depositar(valor: number): boolean {
        throw new Error('Method not implemented.');
    }
    getSaldo(): number {
       return 40;
    }
}

export default ContaPoupanca;