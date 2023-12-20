let totalGeral ;
limpar();

function adicionar (){
    //recuperar valores: nome do produto, quantidade e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    /*
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade.value);
    */

    //calcular o preço, o nosso subtotal
    let preco = quantidade.value * valorUnitario;

    /*
    alert(preco);
    */

    //adiconar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade} x </span> ${nomeProduto} <span class="texto-azul">R$1400</span>
  </section>`;


    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;


}


function limpar () {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}


/*
Desafio 1: Validação de Entrada

let totalGeral;
limpar();


function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;


    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }


    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let preco = quantidade * valorUnitario;


    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;


    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}




function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}

Desafio 2: Captura de Valores do Formulário

Código em html:
<html>
<body>
<form id="meuForm">
    <label for="campoNome">Nome:</label>
    <input type="text" id="campoNome" name="nome">
    
    <label for="campoIdade">Idade:</label>
    <input type="text" id="campoIdade" name="idade">

    <button type="button" onclick="capturarValores()">Capturar Valores</button>
  
  <div id='mostraNome'><span>Seu nome e idade irão aparecer aqui.</span></div>
</form>

<script src="script.js"></script>
</body>
</html>

Código em Javascript:

function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

 document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

Desafio 3: Modificação de Código HTML

Código em html:
<html>
    <body>
<p id="meuParagrafo">Texto original</p>
<button onclick="modificarConteudo()">Modificar Conteúdo</button>

<script src="script.js"></script>
  </body>
</html>

Código em Javascript:

function modificarConteudo() {
    const paragrafo = document.getElementById('meuParagrafo');
    paragrafo.textContent = 'Novo texto modificado dinamicamente!';
}


Desafio 4: Soma de dois números



const numero1 = 10;
const numero2 = 20;

const soma = numero1 + numero2;
const mensagem = `A soma de ${numero1} e ${numero2} é ${soma}.`;

console.log(mensagem);

Desafio 5: Separar duas sentenças com ponto e vírgula
const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);

Desafio 6: Separar número com split()

const numerosSeparados = "10,20,30,40,50";
const arrayNumeros = numerosSeparados.split(',');
console.log(arrayNumeros);

*/
