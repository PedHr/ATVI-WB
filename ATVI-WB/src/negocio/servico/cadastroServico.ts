import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log("\nInício do cadastro de serviço");
        const nome = this.entrada.receberTexto("Nome do serviço: ");
        const preco = this.entrada.receberNumero("Preço do serviço: R$");
        const servico = new Servico(nome, preco);
        this.servicos.push(servico);
        console.log("\nServiço cadastrado com sucesso!\n");
    }
}