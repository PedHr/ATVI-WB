import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemTop5ConsumoValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log("\nTop 5 clientes que mais consumiram (em valor):");

        const clientesConsumo = this.clientes.map(cliente => {
            const valorProdutos = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0);
            const valorServicos = cliente.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);
            return {
                nome: cliente.nome,
                cpf: cliente.getCpf.getValor,
                valor: valorProdutos + valorServicos
            };
        });

        const sorted = clientesConsumo.sort((a, b) => b.valor - a.valor);
        const top5 = sorted.slice(0, 5);

        top5.forEach((cliente, index) => {
            console.log(`${index + 1}º - Nome: ${cliente.nome}, CPF: ${cliente.cpf}, Valor Total: R$${cliente.valor.toFixed(2)}`);
        });
        console.log("\n");
    }
}