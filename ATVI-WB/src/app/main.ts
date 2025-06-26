import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import popularDados from "./dados";

// Importações CRUD Cliente
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import DeletagemCliente from "../negocio/cliente/deletagemCliente";

// Importações CRUD Produto
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ListagemProdutos from "../negocio/produto/listagemProdutos";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import DeletagemProduto from "../negocio/produto/deletagemProduto";

// Importações CRUD Serviço
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemServicos from "../negocio/servico/listagemServicos";
import AtualizarServico from "../negocio/servico/atualizarServico";
import DeletagemServico from "../negocio/servico/deletagemServico";

// Importação Registro de Consumo
import RegistrarConsumo from "../negocio/registrarConsumo";

// Importações Listagens
import ListagemTop10MaisConsumo from "../negocio/listagens/listagemTop10MaisConsumo";
import ListagemClientesPorGenero from "../negocio/listagens/listagemClientesPorGenero";
import ListagemMaisConsumidos from "../negocio/listagens/listagemMaisConsumidos";
import ListagemMaisConsumidosPorGenero from "../negocio/listagens/listagemMaisConsumidosPorGenero";
import ListagemTop10MenosConsumo from "../negocio/listagens/listagemTop10MenosConsumo";
import ListagemTop5ConsumoValor from "../negocio/listagens/listagemTop5ConsumoValor";


console.log(`Bem-vindo ao sistema de gestão do Grupo World Beauty`);
let empresa = new Empresa();
popularDados(empresa);

let execucao = true;
const entrada = new Entrada();

// --- Funções de Submenu ---

function exibirMenuCadastros() {
    let execucaoCadastro = true;
    while (execucaoCadastro) {
        console.log(`\n--- Menu de Cadastros ---`);
        console.log(`1 - Gerenciar Clientes`);
        console.log(`2 - Gerenciar Produtos`);
        console.log(`3 - Gerenciar Serviços`);
        console.log(`0 - Voltar ao menu principal`);
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
        switch (opcao) {
            case 1:
                exibirMenuCrud('Cliente',
                    () => new CadastroCliente(empresa.getClientes).cadastrar(),
                    () => new ListagemClientes(empresa.getClientes).listar(),
                    () => new AtualizarCliente(empresa.getClientes).atualizar(),
                    () => new DeletagemCliente(empresa.getClientes).deletar()
                );
                break;
            case 2:
                exibirMenuCrud('Produto',
                    () => new CadastroProduto(empresa.getProdutos).cadastrar(),
                    () => new ListagemProdutos(empresa.getProdutos).listar(),
                    () => new AtualizarProduto(empresa.getProdutos).atualizar(),
                    () => new DeletagemProduto(empresa.getProdutos).deletar()
                );
                break;
            case 3:
                 exibirMenuCrud('Serviço',
                    () => new CadastroServico(empresa.getServicos).cadastrar(),
                    () => new ListagemServicos(empresa.getServicos).listar(),
                    () => new AtualizarServico(empresa.getServicos).atualizar(),
                    () => new DeletagemServico(empresa.getServicos).deletar()
                );
                break;
            case 0:
                execucaoCadastro = false;
                break;
            default:
                console.log(`Operação não entendida :(`);
        }
    }
}

function exibirMenuCrud(tipo: string, cadastrar: Function, listar: Function, atualizar: Function, deletar: Function) {
    let execucaoCrud = true;
    while (execucaoCrud) {
        console.log(`\n--- Gerenciamento de ${tipo}s ---`);
        console.log(`1 - Cadastrar novo ${tipo.toLowerCase()}`);
        console.log(`2 - Listar todos os ${tipo.toLowerCase()}s`);
        console.log(`3 - Atualizar ${tipo.toLowerCase()}`);
        console.log(`4 - Deletar ${tipo.toLowerCase()}`);
        console.log(`0 - Voltar ao menu de cadastros`);
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
        switch (opcao) {
            case 1: cadastrar(); break;
            case 2: listar(); break;
            case 3: atualizar(); break;
            case 4: deletar(); break;
            case 0: execucaoCrud = false; break;
            default: console.log(`Operação não entendida :(`);
        }
    }
}

function exibirMenuListagens() {
    let execucaoListagem = true;
    while (execucaoListagem) {
        console.log(`\n--- Menu de Listagens e Relatórios ---`);
        console.log(`1 - Top 10 clientes que mais consumiram (quantidade)`);
        console.log(`2 - Listagem de clientes por gênero`);
        console.log(`3 - Listagem geral dos itens mais consumidos`);
        console.log(`4 - Listagem dos itens mais consumidos por gênero`);
        console.log(`5 - Top 10 clientes que menos consumiram`);
        console.log(`6 - Top 5 clientes que mais consumiram (valor)`);
        console.log(`0 - Voltar ao menu principal`);
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
        switch (opcao) {
            case 1: new ListagemTop10MaisConsumo(empresa.getClientes).listar(); break;
            case 2: new ListagemClientesPorGenero(empresa.getClientes).listar(); break;
            case 3: new ListagemMaisConsumidos(empresa.getClientes).listar(); break;
            case 4: new ListagemMaisConsumidosPorGenero(empresa.getClientes).listar(); break;
            case 5: new ListagemTop10MenosConsumo(empresa.getClientes).listar(); break;
            case 6: new ListagemTop5ConsumoValor(empresa.getClientes).listar(); break;
            case 0: execucaoListagem = false; break;
            default: console.log(`Operação não entendida :(`);
        }
    }
}


// --- Loop Principal ---
while (execucao) {
    console.log(`\n--- Menu Principal ---`);
    console.log(`1 - Cadastros`);
    console.log(`2 - Registrar Consumo`);
    console.log(`3 - Listagens e Relatórios`);
    console.log(`0 - Sair do sistema`);

    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            exibirMenuCadastros();
            break;
        case 2:
            new RegistrarConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos).registrar();
            break;
        case 3:
            exibirMenuListagens();
            break;
        case 0:
            execucao = false;
            console.log(`\nObrigado por utilizar o sistema World Beauty.`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
