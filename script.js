let nome = prompt('Insira seu nome');
let obterNomeDesejado = () => {
let nomeDesejado = prompt('Você deseja ser chamado pelo seu nome? Digite S ou N').toUpperCase();

   if(nomeDesejado === 'N') {
      nome = prompt('Digite o nome pelo qual deseja ser chamado(a)');
    }
    if (nomeDesejado === 'S' || nomeDesejado === 'N') {
       alert(`Olá, ${nome}!`);
       verificarIdade();
    } else {
        alert('Por favor informe corretamente.');
    }
};
const verificarIdade = () => {
    const idade = parseInt(prompt('Qual é sua idade'));
    if (idade >= 18) {
      alert('Tudo certo para prosseguir com a abertura da conta.');
      calcularOpcaoInvestimento();
   } else {
      alert(`Infelizmente não será possível a abertura da conta pois o cliente é menor de idade, restam ainda ${18 - idade} anos para a abertura da conta.`);
   }
};
const calcularOpcaoInvestimento = () => {
   const valorInvestimento = parseFloat(prompt('Quanto deseja investir?'));
       if (valorInvestimento >= 1 && valorInvestimento < 100) {
        alert('Você pode investir no plano Start com rendimento de 1,2% ao mês. O valor pode ser retirado a qualquer momento.');
    } else if (valorInvestimento >= 100 && valorInvestimento < 500) {
        alert('Você pode investir no plano Plus com rendimento de 1,78% ao mês. O valor pode ser retirado após 30 dias.');
    } else if (valorInvestimento >= 500) {
        const periodoInvestimento = parseFloat(prompt('Por quanto tempo deseja investir (em meses)?'));
        if (periodoInvestimento >= 6 && periodoInvestimento < 12) {
            alert('Você pode investir no plano Pro com rendimento de 2,6% ao mês por 6 meses.');
        } else if (periodoInvestimento >= 12) {
            alert('Você pode investir no plano Pro com rendimento de 4,4% ao mês por 1 ano ou mais.');
        } else {
            alert('Por favor, informe um período válido para o plano Pro.');
        }
    } else {
        alert('Por favor, informe um valor de investimento válido.');
    }
};

obterNomeDesejado();
