abstract class Veiculo {
    
    protected id: string;
    protected tipo: string;
    protected horaEntrada: number;

    constructor(id: string, tipo: string) {
        this.id = id;
        this.tipo = tipo;
        this.horaEntrada = Date.now();
    }

    setEntrada(horaEntrada: number): void {
        this.horaEntrada = horaEntrada;
    }

    getEntrada(): number {
        return this.horaEntrada;
    }

    getTipo(): string {
        return this.tipo;
    }

    getId(): string {
        return this.id;
    }

    abstract calcularValor(horaSaida: number): number;

    toString(): string {
        return `${this.tipo} - ID: ${this.id} - Entrada: ${new Date(this.horaEntrada).toLocaleTimeString()}`;
    }
}