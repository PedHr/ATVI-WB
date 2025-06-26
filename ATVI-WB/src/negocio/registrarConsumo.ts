import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class RegistrarConsumo {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public registrar(): void {
        console.log("\nRegistro de Consumo");
        const cpf = this.entrada.receberTexto("CPF do cliente: ");
        const cliente = this.clientes.find(c => c.getCpf.getValor === cpf);

        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }

        let registrando = true;
        while (registrando) {
            console.log("\nO que deseja registrar?");
            console.log("1 - Produto");
            console.log("2 - Serviço");
            console.log("0 - Concluir registro para este cliente");
            const opcao = this.entrada.receberNumero("Opção: ");

            switch (opcao) {
                case 1:
                    const nomeProduto = this.entrada.receberTexto("Nome do produto consumido: ");
                    const produto = this.produtos.find(p => p.nome === nomeProduto);
                    if (produto) {
                        cliente.consumirProduto(produto);
                        console.log(`Produto ${produto.nome} registrado para ${cliente.nome}.`);
                    } else {
                        console.log("Produto não encontrado.");
                    }
                    break;
                case 2:
                    const nomeServico = this.entrada.receberTexto("Nome do serviço consumido: ");
                    const servico = this.servicos.find(s => s.nome === nomeServico);
                    if (servico) {
                        cliente.consumirServico(servico);
                        console.log(`Serviço ${servico.nome} registrado para ${cliente.nome}.`);
                    } else {
                        console.log("Serviço não encontrado.");
                    }
                    break;
                case 0:
                    registrando = false;
                    console.log("\nRegistro de consumo concluído.\n");
                    break;
                default:
                    console.log("Opção inválida.");
            }
        }
    }
}