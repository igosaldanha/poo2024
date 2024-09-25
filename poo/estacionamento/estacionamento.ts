class Estacionamento {
    private veiculos: Veiculo[] = [];
    private horaAtual: number = Date.now();

    estacionar(veiculo: Veiculo): void {
        this.veiculos.push(veiculo);
        console.log(`${veiculo.getTipo()} ID: ${veiculo.getId()} estacionado às ${new Date(veiculo.getEntrada()).toLocaleTimeString()}`);
    }

    procurarVeiculo(id: string): Veiculo | undefined {
        return this.veiculos.find(veiculo => veiculo.getId() === id);
    }

    pagar(id: string): number | void {
        const veiculo = this.procurarVeiculo(id);
        if (!veiculo) {
            console.log("Veículo não encontrado.");
            return;
        }
        const horaSaida = Date.now();
        const valor = veiculo.calcularValor(horaSaida);
        console.log(`Valor a ser pago pelo veículo ${veiculo.getId()}: R$${valor.toFixed(2)}`);
        return valor;
    }

    sair(id: string): void {
        const veiculo = this.procurarVeiculo(id);
        if (!veiculo) {
            console.log("Veículo não encontrado.");
            return;
        }
        this.pagar(id);
        this.veiculos = this.veiculos.filter(v => v.getId() !== id);
        console.log(`Veículo ${id} saiu do estacionamento.`);
    }

    passarTempo(tempo: number): void {
        this.horaAtual += tempo;
    }

    toString(): string {
        return this.veiculos.map(veiculo => veiculo.toString()).join("\n");
    }
}

export { Estacionamento };
