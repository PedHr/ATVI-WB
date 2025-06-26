import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemMaisConsumidosPorGenero extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log("\nListagem dos produtos e serviços mais consumidos por gênero:");

        const consumoM = new Map<string, number>();
        const consumoF = new Map<string, number>();

        this.clientes.forEach(cliente => {
            const targetMap = cliente.genero.toUpperCase() === 'M' ? consumoM : consumoF;
            cliente.getProdutosConsumidos.forEach(produto => {
                targetMap.set(produto.nome, (targetMap.get(produto.nome) || 0) + 1);
            });
            cliente.getServicosConsumidos.forEach(servico => {
                targetMap.set(servico.nome, (targetMap.get(servico.nome) || 0) + 1);
            });
        });

        console.log("\n--- Consumo Gênero Masculino ---");
        [...consumoM.entries()].sort((a, b) => b[1] - a[1]).forEach(([nome, quantidade]) => {
            console.log(`Item: ${nome}, Quantidade: ${quantidade}`);
        });

        console.log("\n--- Consumo Gênero Feminino ---");
        [...consumoF.entries()].sort((a, b) => b[1] - a[1]).forEach(([nome, quantidade]) => {
            console.log(`Item: ${nome}, Quantidade: ${quantidade}`);
        });
        console.log("\n");
    }
}