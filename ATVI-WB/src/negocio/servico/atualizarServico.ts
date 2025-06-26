import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";

export default class AtualizarServico {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("\nInício da atualização de serviço");
        const nome = this.entrada.receberTexto("Nome do serviço que deseja atualizar: ");
        const servico = this.servicos.find(s => s.nome === nome);

        if (!servico) {
            console.log("\nServiço não encontrado.\n");
            return;
        }

        const novoNome = this.entrada.receberTexto(`Novo nome para ${servico.nome}: `);
        const novoPreco = this.entrada.receberNumero(`Novo preço para R$${servico.preco.toFixed(2)}: R$`);
        servico.nome = novoNome;
        servico.preco = novoPreco;

        console.log("\nServiço atualizado com sucesso!\n");
    }
}