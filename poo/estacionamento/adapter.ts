import { Bike } from './bike';
import { Moto } from './moto';
import { Carro} from './carro';
import { Estacionamento } from './estacionamento';


class Adapter {
    private estacionamento: Estacionamento;

    constructor() {
        this.estacionamento = new Estacionamento();
    }

    estacionar(tipo: string, id: string): void {
        let veiculo;

        // Criar o veículo com base no tipo fornecido
        if (tipo.toLowerCase() === 'bike') {
            veiculo = new Bike(id);
        } else if (tipo.toLowerCase() === 'moto') {
            veiculo = new Moto(id);
        } else if (tipo.toLowerCase() === 'carro') {
            veiculo = new Carro(id);
        } else {
            console.log(`Tipo de veículo inválido: ${tipo}`);
            return;
        }

        // Estacionar o veículo criado
        this.estacionamento.estacionar(veiculo);
        console.log(`${tipo} ID: ${id} foi estacionado.`);
    }

    passarTempo(tempo: number): void {
        this.estacionamento.passarTempo(tempo);
        console.log(`Tempo de ${tempo} ms passou no estacionamento.`);
    }

    pagar(id: string): void {
        const valorPago = this.estacionamento.pagar(id);
        if (valorPago !== undefined) {
            console.log(`Pagamento realizado para o veículo ${id}: R$${valorPago.toFixed(2)}`);
        }
    }

    sair(id: string): void {
        this.estacionamento.sair(id);
        console.log(`Veículo ${id} saiu do estacionamento.`);
    }

    toString(): string {
        // Exibe o estado atual do estacionamento
        return this.estacionamento.toString();
    }
}

export { Adapter };
