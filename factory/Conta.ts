interface Conta{
    titular : string,
    agencia : string,
    conta : string,
    saldo : number

    sacar( valor : number) : boolean,
    depositar(valor : number) : boolean,
    getSaldo() : number
}

export default Conta;