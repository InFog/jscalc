/******************************************************
 * JSCalc, calculadora em Javascript
 *
 * Fork desenvolvido por:
 *	- InFog - Evaldo Junior (http://infog.casoft.info) <junior@casoft.info>
 *
 * A JSCalc é baseada na CALC-JS
 * desenvolvida pelo Peterson <peterson770 "@' hotmail . com>
 *
 * A CALC-JS desenvolvida pelo Peterson já tinha
 * um bom mapa de imagem, por isso fiz um fork,
 * para não precisar reinventar a roda e aproveitar
 * o bom trabalho que já estava pronto.
 *
 * Este fork teve início em 21 de setembro de 2008
 *
 * Por que fazer um fork?
 * Quero fazer um visor com os digitos no estilo
 * de calculadoras reais.
 * Outro motivo é deixar um código bem comentado
 * já que a versão original não tinha quase nada
 * para ajudar a entender o código.
 *
 * Este software é licenciado sobre a GPLv3
 * Uma cópia da licença está no arquivo licenca.txt
 * Este software não tem garantias, use por conta e risco.
 *
 * Versão 0.1 - 21/09/2008
 * 	- Versão original e sem modificações.
 *
 * Versão 0.2 - 21/09/2008
 *	- Adicionados comentários e créditos (antes não tinha nada)
 *	- Adicionada variável com a versão do software.
 *	- Removida a função Mouse(), que mostrava uma mensagem quando usado o botão direito do mouse.
 *	- Removidas variáveis cont, n1, n2, n3, n4 e n5.
 *	- Removidas variáveis numero1, numero2, numero3, numero4, numero 5 e resultado.
 *	- Adicionada variável MEM1, que conterá o que estava no visor antes de usar alguma operação.
 *	- Adicionada variável OPERADOR.
 *	- Alterada a função recebe_tecla() para que trabalhe com switch e não um monte de if aninhado.
 *	- Adicionada a função executa_funcao(), por enquanto ela tem apenas comentários de como deve funcionar.
 *	- Adicionada a função add_ponto() também apenas com comentários.
 *	- Adicionada a função add_operador() também apenas com comentários.
 *	- Removida a verificação do operador na função add_visor().
 *	- Removida a função continhas().
 *	- Removido o site que tinha ao redor da calculador, deixei apenas o código dela, assim fica mais simples
 *	  para embuutila em algum outro site.
 *	- Crei um projeto no google code e hospedei a JSCalc, http://code.google.com/p/jscalc/
 *
 * Versão 0.3 - 22/09/2008
 *	- Removido diretório css e o arquivo de css.
 *	- Criado o diretório imagens para colocar as imagens dos números.
 *	- Movida a imagem calc.jpg para o diretório imagens.
 *	- Arquivo calculadora.html renomeado para jscalc.html.
 *	- Removidas chamadas ao arquivo de css.
 *	- Div mainContent renomeado para principal.
 *	- Percebi que a função recebe_tecla() é inútil e comecei a remove-la.
 *	- Removida a função resultado_final().
 *	- Implementado um beta da função calcula_resultado().
 *	- Alterado o asterisco (*) para x na tecla de multiplcação (dava uns erros com *)
 *	- Adicionada a função botao_on_ac() que limpa as variáveis e o visor.
 *	- Removida a função checa_operando().
 *	- Alterado o título da página para "JSCalc - Calculadora em Javascript".
 *
 * Versão 0.4 - 23/09/2008
 *	- Função recebe_tecla() totalmente eliminada.
 *	- Implementada a função de raiz quadrada.
 *
 * Versão 0.5 - 27/09/2008
 *	- Imagem da calculadora dividida em 3 partes (topo, visor e teclas).
 *	- Adicionada formatação CSS (arquivo calc.css) para que a imagem pareça uma só.
 *	- Mapa de imagem totalmente remodelado para a noma imagem (calc_bottom.jpg).
 *	- JSCalc testada com sucesso no Firefox 3.0.2, Opera 9.51 e Internet Explorer 6.
 *
 * Versão 0.6 - 28/09/2008
 *	- Fiz as imagens dos números 0, 1, 2, 3 e 4.
 *	- Fiz um teste para exibi-los sobre o visor na função atualiza_visor() (funcionou).
 *
 * Versão 0.7 - 03/10/2008
 *	- Fiz as imagens dos números 5, 6, 7, 8 e 9.
 *	- Função atualiza_visor() renovada para usar as imagens.
 *	- Corrigi um bug que não permitia a atualização do visor na função atualiza_visor().
 *	- Removido o deretório temporário com as imagens dos números.
 *
 * Versão 0.8 - 04/10/2008
 *	- Corrigido bug na raiz quadrada.
 *	- Alterada a função atualiza_visor() para sempre encarar VISOR como string.
 *	- Alterada a CSS para que a calculadora fique centralizada.
 *	- Criado um rascunho da função muda_sinal().
 *	- Removida a imagem numeros.jpg (base para os números).
 *	- Criei a imagem do sinal de menos.
 *
 * Versão 0.9 - 15/10/2008
 *	- Troquei a cor da calculadora e removi uma imagem que parecia uma marca.
 *
 * Versão 0.10 - 16/10/2008
 *	- Correção: Quando se usa algum sinal o display não zera mais. (Não é assim que uma calculadora trabalha).
 *	- Correção: Agora o display zera após fazer alguma operação. (Antes ele mantinha o resultado e adicionava os novos dígitos à ele).
 *	- Adicionada a imagem do ponto.
 *	- Implementada a utilização do ponto para operações com casas decimais.
 *
 * Versão 0.11 - 20/10/2008
 *	- Corrigido bug reportado pelo Peterson, fazendo, por exemplo, 3x5-2 ela resultava 3, agora resulta 13.
 *
 * Versão 0.12 - 30/05/2010
 *   - Adicionada a versão da JsCalc ao título da página
 *   - Adicionado atributo alt ao mapa de imagem das teclas
 *   - Adicionada operação de porcentagem
 *   - Corrigidos alguns erros de tags html strict
 *
 * Versão 0.13 - 30/05/2010
 *   - Adicionado um logotipo para a JsCalc
 *
 * Versão 0.14 - 28/03/2012
 *   - Projeto migrado para o Git e para o GitHub (https://github.com/InFog/jscalc)
 *   - Código JavaScript movido para arquivo separado
 *   - Ajustando abertura de chaves para evitar problemas com o JS adicionando ";".
 *
 *********************** DESAFIO ***********************
 * Implementar NPR (Notação Polonesa Reversa)
 * http://pt.wikipedia.org/wiki/Notação_polonesa_reversa
 * Idéia by Kretcheu - 04 de outubro de 2008
 ******************************************************/

var VERSAO = "0.14";
var VISOR = "0"; // iniciando o visor como 0
var MEM1 = "0"; // variável que contém o que estava no visor antes de usar uma tecla de operação.
var OPERADOR = ""; // variável com o operador (+, -, / ou *)
var APAGA_VISOR = false;
var TEM_PONTO = false; // variável que diz que o ponto já foi colocado no visor.

function executa_funcao(funcao) {
    /*******************************************
     * Esta função executa funções da calculadora
     *
     * Funções disponíveis:
     *	- raiz (extrai a raiz do número no visor)
     *******************************************/
    switch (funcao) {
        case 'raiz':
            VISOR = eval('Math.sqrt(' + VISOR + ')');
            break;
    }
    atualiza_visor();
}

function add_ponto() {
    /*******************************************
     * Esta função serve para adicionar um ponto
     * separador de casas decimais ao visor.
     *******************************************/
    if (TEM_PONTO == false) {
        VISOR += '.';
        atualiza_visor();
        TEM_PONTO = true;
    }
}

function muda_sinal() {
    /*******************************************
     * Esta função altera o sinal do valor no visor
     *******************************************/
}

function add_operador(oper) {
    /*******************************************
     * Esta função adiciona um operador,
     * ela precisa mover o conteúdo do VISOR
     * para MEM1 e aplicar o operador.
     *******************************************/
    if (OPERADOR != '') {
        calcula_resultado(oper);
    }
    MEM1 = VISOR;
    VISOR = "0";
    OPERADOR = oper;
    TEM_PONTO = false;
    //atualiza_visor();
}

function add_visor(valor) {
    if (APAGA_VISOR) {
        VISOR = "0";
        APAGA_VISOR = false;
    }
    if (VISOR == "0") {
        VISOR = valor;
    }
    else {
        VISOR = VISOR + valor;
    }
    atualiza_visor();
}

function atualiza_visor() {
    /*********************************
     * Esta função varre a string VISOR
     * e monta uma string informando quais
     * imagens devem aparecer no display
     *********************************/
    // Aqui faço VISOR ser reconhecida como uma string
    VISOR += '';
    var posicao = 0;
    var caractere = '';
    var display = '';
    for (posicao = 0; posicao < VISOR.length; posicao++) {
        caractere = VISOR.charAt(posicao);
        if (caractere == '.') {
            display += '<img src="imagens/ponto.png">';
        }
        else {
            display += '<img src="imagens/'+caractere+'.png">';
        }
    }
    document.getElementById('display').innerHTML = display;
}

function limpa_visor() {
    VISOR = "0";
    TEM_PONTO = false;
    atualiza_visor();
}

function botao_on_ac() {
    /*********************************
     * Esta função reinicia todas as
     * variáveis e limpa o visor
     *********************************/
    VISOR = "0";
    MEM1 = "0";
    OPERADOR = "";
    APAGA_VISOR = false;
    TEM_PONTO = false;
    limpa_visor();
}

function calcula_resultado(oper) {
    /*********************************
     * Esta função calcula o resultado
     * esta função ainda é bem beta
     *********************************/
    if (OPERADOR == "x") {
        OPERADOR = '*';
    }
    if (oper == '%') {
        RESULTADO = eval(MEM1 + OPERADOR + '(' + '(' + VISOR + '*' + MEM1 + ')' + '/' + '100' + ')');
    }
    else {
        var RESULTADO = eval(MEM1 + OPERADOR + VISOR);
    }
    VISOR = RESULTADO;
    atualiza_visor();
    OPERADOR = '';
    APAGA_VISOR = true;
    TEM_PONTO = false;
}

atualiza_visor();
document.title = document.title + ' v' + VERSAO;
