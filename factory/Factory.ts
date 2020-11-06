import Conta from './Conta';
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';
import ContaSalario from './ContaSalario';
import TiposConta from './TiposConta';

class FactoryConta{

    criarConta(tipo : TiposConta ) : Conta{
       switch (tipo) {
            case TiposConta.CORRENTE :
            return new ContaCorrente();
            break;

            case TiposConta.POUPANCA :
            return new ContaPoupanca();
            break;

            case TiposConta.SALARIO :
            return new ContaSalario();
            break;
        }
    }

}

export default FactoryConta;