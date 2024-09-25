class Bike extends Veiculo {
    constructor(id: string) {
        super(id, "Bike"); 
    }

    calcularValor(horaSaida: number): number {
        return 3; 
    }
}
 export { Bike };