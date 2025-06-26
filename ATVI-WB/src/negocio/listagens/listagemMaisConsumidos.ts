import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log("\nListagem geral dos produtos e serviços mais consumidos:");

        const consumoMap = new Map<string, number>();

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                consumoMap.set(produto.nome, (consumoMap.get(produto.nome) || 0) + 1);
            });
            cliente.getServicosConsumidos.forEach(servico => {
                consumoMap.set(servico.nome, (consumoMap.get(servico.nome) || 0) + 1);
            });
        });

        const sortedConsumo = [...consumoMap.entries()].sort((a, b) => b[1] - a[1]);

        sortedConsumo.forEach(([nome, quantidade]) => {
            console.log(`Item: ${nome}, Quantidade Consumida: ${quantidade}`);
        });
        console.log("\n");
    }
}