import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class AtualizarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("\nInício da atualização de cliente");
        const cpf = this.entrada.receberTexto("Informe o CPF do cliente que deseja atualizar: ");

        const cliente = this.clientes.find(c => c.getCpf.getValor === cpf);

        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }

        const nome = this.entrada.receberTexto(`Novo nome para ${cliente.nome}: `);
        const nomeSocial = this.entrada.receberTexto(`Novo nome social para ${cliente.nomeSocial}: `);
        const genero = this.entrada.receberTexto(`Novo gênero para ${cliente.genero} (M/F): `).toUpperCase();

        cliente.nome = nome;
        cliente.nomeSocial = nomeSocial;
        cliente.genero = genero;

        console.log("\nCliente atualizado com sucesso!\n");
    }
}