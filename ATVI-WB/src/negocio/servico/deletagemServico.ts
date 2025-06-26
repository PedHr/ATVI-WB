import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";

export default class DeletagemServico {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log("\nInício da exclusão de serviço");
        const nome = this.entrada.receberTexto("Nome do serviço que deseja excluir: ");
        const index = this.servicos.findIndex(s => s.nome === nome);

        if (index === -1) {
            console.log("\nServiço não encontrado.\n");
            return;
        }

        this.servicos.splice(index, 1);
        console.log("\nServiço excluído com sucesso!\n");
    }
}