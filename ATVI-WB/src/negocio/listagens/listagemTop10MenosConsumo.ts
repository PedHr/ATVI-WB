import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemTop10MenosConsumo extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log("\nTop 10 clientes que menos consumiram (em quantidade):");

        const clientesConsumo = this.clientes.map(cliente => {
            return {
                nome: cliente.nome,
                cpf: cliente.getCpf.getValor,
                quantidade: cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
            };
        });

        const sorted = clientesConsumo.sort((a, b) => a.quantidade - b.quantidade);
        const top10 = sorted.slice(0, 10);

        if (top10.length === 0) {
            console.log("Não há clientes para listar.");
            return;
        }

        top10.forEach((cliente, index) => {
            console.log(`${index + 1}º - Nome: ${cliente.nome}, CPF: ${cliente.cpf}, Quantidade: ${cliente.quantidade}`);
        });
        console.log("\n");
    }
}