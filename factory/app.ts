import Conta from './Conta';
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';

import FactoryConta from './Factory';
import TiposConta from './TiposConta';

const factory = new FactoryConta();

const conta : Conta[] = []; 

conta.push(factory.criarConta(TiposConta.SALARIO));
conta.push(factory.criarConta(TiposConta.POUPANCA));
conta.push(factory.criarConta(TiposConta.CORRENTE));


conta.forEach(c => {
    console.log(c.getSaldo())
});
