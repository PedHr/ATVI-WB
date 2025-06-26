import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class DeletagemProduto {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log("\nInício da exclusão de produto");
        const nome = this.entrada.receberTexto("Nome do produto que deseja excluir: ");
        const index = this.produtos.findIndex(p => p.nome === nome);

        if (index === -1) {
            console.log("\nProduto não encontrado.\n");
            return;
        }

        this.produtos.splice(index, 1);
        console.log("\nProduto excluído com sucesso!\n");
    }
}