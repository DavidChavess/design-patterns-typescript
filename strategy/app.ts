import Correios from "./Correios";
import Fedex from "./Fedex";
import Strategy from "./Strategy";

const strategies : Strategy[] = [];


strategies.push(new Strategy(new Fedex(), 200));
strategies.push(new Strategy(new Correios(), 200));

strategies.forEach(s => {
    console.log( s.calculaFrete() );
    console.log( s.calculaTempo() );
    console.log( "---------------" );    
});