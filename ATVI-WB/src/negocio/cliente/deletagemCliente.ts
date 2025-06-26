import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class DeletagemCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log("\nInício da exclusão de cliente");
        const cpf = this.entrada.receberTexto("Informe o CPF do cliente que deseja excluir: ");

        const index = this.clientes.findIndex(c => c.getCpf.getValor === cpf);

        if (index === -1) {
            console.log("\nCliente não encontrado.\n");
            return;
        }

        this.clientes.splice(index, 1);
        console.log("\nCliente excluído com sucesso!\n");
    }
}