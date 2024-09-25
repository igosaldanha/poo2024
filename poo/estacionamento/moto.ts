class Moto extends Veiculo {
    constructor(id: string) {
        super(id, "Moto");
    }

    calcularValor(horaSaida: number): number {
        const minutos = (horaSaida - this.horaEntrada) / (1000 * 60);
        return minutos / 20; // valor proporcional ao tempo
    }
}

export { Moto };
