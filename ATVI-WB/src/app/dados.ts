import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default function popularDados(empresa: Empresa) {
    const clientes = empresa.getClientes;
    const produtos = empresa.getProdutos;
    const servicos = empresa.getServicos;

    // --- Clientes ---
    const nomes = ["Ana", "Bruno", "Carla", "Daniel", "Elisa", "Felipe", "Gabriela", "Heitor", "Isabela", "João", "Larissa", "Marcos", "Natalia", "Otávio", "Patrícia", "Quintino", "Raquel", "Samuel", "Tatiana", "Ulisses", "Vanessa", "William", "Xuxa", "Yasmin", "Zeca", "Alice", "Bento", "Catarina", "Davi", "Ester"];
    const generos = ["F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "M", "F", "F", "M", "F", "M", "F", "M", "F"];

    for (let i = 0; i < 30; i++) {
        const cpf = new CPF(`${i + 1}`.padStart(11, '0'), new Date(2000, i % 12, (i % 28) + 1));
        const cliente = new Cliente(nomes[i], `Social ${nomes[i]}`, generos[i], cpf);
        clientes.push(cliente);
    }

    // --- Produtos ---
    const nomesProdutos = ["Esmalte", "Shampoo", "Condicionador", "Creme Hidratante", "Óleo Capilar", "Gel de Cabelo", "Máscara Facial", "Protetor Solar", "Batom", "Base", "Creme para Barbear", "Loção Pós-Barba", "Cera de Depilação", "Algodão", "Acetona", "Lixa de Unha", "Sabonete Líquido", "Desodorante", "Perfume", "Tônico Facial"];
    for (let i = 0; i < 20; i++) {
        const preco = parseFloat((10 + Math.random() * 50).toFixed(2));
        produtos.push(new Produto(nomesProdutos[i], preco));
    }

    // --- Serviços ---
    const nomesServicos = ["Manicure", "Pedicure", "Corte de Cabelo Feminino", "Corte de Cabelo Masculino", "Pintura de Cabelo", "Design de Sobrancelhas", "Limpeza de Pele", "Aplicação de Botox", "Massagem Modeladora", "Corte de Barba"];
    for (let i = 0; i < 10; i++) {
        const preco = parseFloat((30 + Math.random() * 100).toFixed(2));
        servicos.push(new Servico(nomesServicos[i], preco));
    }

    // --- Consumos Aleatórios ---
    for (const cliente of clientes) {
        // Garante que cada cliente consuma alguns itens
        let numConsumos = Math.floor(Math.random() * 5) + 1; // De 1 a 5 itens
        for (let i = 0; i < numConsumos; i++) {
            const isProduto = Math.random() > 0.4; // 60% chance de ser produto
            if (isProduto) {
                const produto = produtos[Math.floor(Math.random() * produtos.length)];
                cliente.consumirProduto(produto);
            } else {
                const servico = servicos[Math.floor(Math.random() * servicos.length)];
                cliente.consumirServico(servico);
            }
        }
    }

    console.log("Dados iniciais populados com sucesso!");
}