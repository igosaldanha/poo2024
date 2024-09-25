class Carro extends Veiculo {
    constructor(id: string) {
        super(id, "Carro");
    }

    calcularValor(horaSaida: number): number {
        const minutos = (horaSaida - this.horaEntrada) / (1000 * 60);
        const valor = minutos / 10;
        return Math.max(5, valor); // valor mínimo de R$5,00
    }
}

export  { Carro };