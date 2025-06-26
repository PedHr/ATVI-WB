import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class AtualizarProduto {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("\nInício da atualização de produto");
        const nome = this.entrada.receberTexto("Nome do produto que deseja atualizar: ");
        const produto = this.produtos.find(p => p.nome === nome);

        if (!produto) {
            console.log("\nProduto não encontrado.\n");
            return;
        }

        const novoNome = this.entrada.receberTexto(`Novo nome para ${produto.nome}: `);
        const novoPreco = this.entrada.receberNumero(`Novo preço para R$${produto.preco.toFixed(2)}: R$`);
        produto.nome = novoNome;
        produto.preco = novoPreco;

        console.log("\nProduto atualizado com sucesso!\n");
    }
}