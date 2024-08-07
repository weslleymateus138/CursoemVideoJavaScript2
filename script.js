        // Para tornar a variavel um número inteiro e que possa ser somado, sem concatenar, temos que usar o: 
        // Number.parseInt()
        // ou somente Number()



// Declaração de uma variável e inicialização com a conversão de um valor de string para número
// var numero1 = Number(window.prompt(`Digite um número para soma`))
// var numero2 = Number(window.prompt(`Digite o outro número:`));

// Declaração de uma variável e inicialização com a soma de numero1 e numero2
// var soma = numero1 + numero2;

// Exibindo uma caixa de alerta com a soma dos números
// window.alert(`A soma dos números é ${soma}`);

// Captura o nome do usuário
let nome = window.prompt("Qual seu nome?");

// Função para adicionar conteúdo ao corpo do documento
function adicionarParagrafo(texto) {
    let paragrafo = document.createElement('p');
    paragrafo.innerHTML = texto;
    document.body.appendChild(paragrafo);
}

// Adiciona o conteúdo ao documento
adicionarParagrafo(`Olá <strong class="ola">${nome}</strong>`);
adicionarParagrafo(`Seu nome tem ${nome.length} caracteres`);
adicionarParagrafo(`Seu nome em maiúsculas é ${nome.toUpperCase()}`);
adicionarParagrafo(`Seu nome em minúsculas é ${nome.toLowerCase()}`);

// Converte a string "1755.55" para número e formata como moeda brasileira (Reais)
var salarioFormatado = Number("1755.55".replace(',', '.')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 

// Exibe um alerta com o valor da variável salario
adicionarParagrafo(`Seu salário é ${salarioFormatado}`)