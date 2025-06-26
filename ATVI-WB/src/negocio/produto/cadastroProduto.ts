import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log("\nInício do cadastro de produto");
        const nome = this.entrada.receberTexto("Nome do produto: ");
        const preco = this.entrada.receberNumero("Preço do produto: R$");
        const produto = new Produto(nome, preco);
        this.produtos.push(produto);
        console.log("\nProduto cadastrado com sucesso!\n");
    }
}