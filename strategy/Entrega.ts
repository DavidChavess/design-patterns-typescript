interface Entrega{
  
    tarifaKm : number;
    horasKm : number;
    imposto : number;

    calculaFrete(quilometros : number) : string;
    calculaTempo(quilometros : number) : string;

}

export default Entrega;