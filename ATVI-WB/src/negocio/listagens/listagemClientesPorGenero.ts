import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesPorGenero extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log("\nClientes agrupados por gênero:");

        const clientesM: Cliente[] = [];
        const clientesF: Cliente[] = [];

        this.clientes.forEach(cliente => {
            if (cliente.genero.toUpperCase() === 'M') {
                clientesM.push(cliente);
            } else if (cliente.genero.toUpperCase() === 'F') {
                clientesF.push(cliente);
            }
        });

        console.log("\n--- Gênero Masculino ---");
        clientesM.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}, Nome Social: ${cliente.nomeSocial}, CPF: ${cliente.getCpf.getValor}`);
        });

        console.log("\n--- Gênero Feminino ---");
        clientesF.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}, Nome Social: ${cliente.nomeSocial}, CPF: ${cliente.getCpf.getValor}`);
        });
        console.log("\n");
    }
}