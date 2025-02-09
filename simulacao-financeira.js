/* Requisito 1: Simulação de Investimento
❖ Crie uma função que simule o rendimento de um investimento com base em um valor
inicial, uma taxa mensal de rendimento e um período de meses.
❖ A função deve retornar o saldo final após o período especificado, com duas casas
decimais. */
console.log("REQUISITO 1: ");

const valorInvestimento = 2000;
const taxaInvestimento = 2.5;
const periodoRendimento = 3;

function simularInvestimento(valorInvestimento, taxaInvestimento, periodoRendimento) {
    const retornoInvestimento = ((valorInvestimento * taxaInvestimento) / 100) * periodoRendimento;
    const ganho = valorInvestimento + retornoInvestimento;
    const lucro = ganho - valorInvestimento;
    return `Ao investir o valor de R$ ${valorInvestimento.toFixed(2)} por ${periodoRendimento} meses e com taxa de ${taxaInvestimento}% a.m, o retorno do seu investimento ao final do período será de R$ ${ganho.toFixed(2)} significando um lucro de R$ ${lucro.toFixed(2)} dos seus investimentos.`;
}

console.log(simularInvestimento(valorInvestimento, taxaInvestimento, periodoRendimento));

/* Requisito 2: Gerenciamento de Despesas
❖ Crie uma função que receba um objeto representando as despesas mensais em
diferentes categorias.
❖ A função deve calcular e retornar o total de despesas. */
console.log("REQUISITO 2: ");

const despesas = {
    mercado: 350,
    financiamentoApt: 450,
    financiamentoCarro: 890,
    contaLuz: 67,
    condominio: 219,
    faculdade: 615,
};

function gerenciarDespesa(despesas) {
    let totalDespesas = 0;

    for (let valor of Object.values(despesas)) {
        totalDespesas += valor;
    }

    return totalDespesas;
}

const somaDespesas = gerenciarDespesa(despesas).toFixed(2);
console.log(`O valor das despesas mensais é de R$ ${somaDespesas}`);

/* Requisito 3: Obtenção do Mês Atual
❖ Crie uma função que retorne o nome do mês atual em formato string.
❖ A função deve utilizar um array de nomes dos meses para identificar o mês atual.*/
console.log("REQUISITO 3: ");

let data = new Date();

function obterMesAtual(data) {
    let extrairMes = data.getMonth();
    let nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    for (let i = 0; i < nomesMeses.length; i++) {
        return nomesMeses[extrairMes];
    }
}

console.log("Com base na data atual, estamos no mês de: " + obterMesAtual(data));

/* Requisito 4: Geração de Relatório Financeiro
❖ Crie uma função que gere um relatório financeiro com base no investimento inicial, taxa
de rendimento, duração do investimento, despesas mensais, meta de investimento e
meta de orçamento.
❖ O relatório deve incluir:
■ O mês atual.
■ O saldo final do investimento.
■ O total de despesas.
■ Uma mensagem de economia ou excedente em relação ao orçamento.
■ Uma verificação se a meta de investimento foi atingida.
■ Um resumo das despesas por categoria. */
console.log("REQUISITO 4: ");

const metaInvestimento = 3000;
const metaOrcamento = 3500;

function gerarRelatorio(valorInvestimento, taxaInvestimento, periodoRendimento, despesas, metaInvestimento, metaOrcamento) {
    const saldoFinalInvestimento = metaInvestimento - valorInvestimento;
    const resumoInvestimento = simularInvestimento(valorInvestimento, taxaInvestimento, periodoRendimento);
    const mesAtual = obterMesAtual(data);
    const valorDespesas = gerenciarDespesa(despesas);
    const saldoDespesaInvestimento = metaOrcamento - valorDespesas;

    console.log("=== Relatório Financeiro ===");
    console.log(`Mês: ${mesAtual}`);
    console.log(`Meta do Orçamento: R$ ${metaOrcamento}`);
    console.log(`Total das despesas: R$ ${valorDespesas}`);

    if (saldoDespesaInvestimento < 0) {
        console.log (`Você excedeu o seu orçamento em ${Math.abs(saldoDespesaInvestimento)}`);
    } else {
        console.log (`Você está economizando R$ ${saldoDespesaInvestimento}`)
    }

    console.log(`Meta de investimento: R$ ${metaInvestimento}`);
    console.log(`Valor necessário para atingir o valor de investimento previsto: ${saldoFinalInvestimento}`);

    if (metaInvestimento > saldoFinalInvestimento) {
        console.log('Você ainda não atingiu a meta de investimento');
    } else {
        console.log('Parabéns! Você atingiu sua meta de investimento!');
    }

    console.log("=== Resumo do seu investimento ===");
    console.log(resumoInvestimento);

    console.log("=== Resumo das despesas ===");
    for (const categoria in despesas) {
        console.log(`${categoria}: R$ ${despesas[categoria]}`)
    }
}

gerarRelatorio(valorInvestimento, taxaInvestimento, periodoRendimento, despesas, metaInvestimento, metaOrcamento);

/* Requisito 5: Estrutura de Dados para Despesas
❖ Crie um objeto para armazenar as despesas mensais, utilizando categorias como
alimentação, transporte, aluguel e lazer.
❖ O objeto deve permitir fácil acesso e modificação dos valores das despesas. */
console.log("REQUISITO 5: ");

/* Requisito 6: Entradas e Configurações do Investimento
❖ Defina variáveis para armazenar o valor inicial do investimento, a taxa mensal de
rendimento, a duração do investimento em meses, a meta de investimento e a meta de
orçamento mensal.
❖ As variáveis devem ser configuráveis para permitir diferentes simulações financeiras. */
console.log("REQUISITO 6: ");

/* Requisito 7: Execução do Relatório
❖ Chame a função gerarRelatorio com os parâmetros adequados para gerar e exibir
o relatório financeiro no console.
❖ A chamada deve utilizar as variáveis e objetos definidos anteriormente */
console.log("REQUISITO 7: ");