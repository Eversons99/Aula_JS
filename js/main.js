function funcaoChange(elemento){
    console.log(elemento.value)
}

function load(){
    alert("Pagina carregada");
}


//ESSA FUNÇÃO AFETA TODOS OS ELEMENTOS ONDE ELA ESTA INSERIDA
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

//ESSA FUNÇÂO TROCA O TEXTO QUANDO É PASSADO O MOUSE ACIMA
//ESSA FUNÇÃO AFETA TODOS OS ELEMENTOS ONDE ELA ESTA INSERIDA
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

/*
//ESSA FUNÇÃO AFETA SOMENTE O ELEMENTO COM O ID MOUSE MOVE
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

//ESSA FUNÇÂO TROCA O TEXTO QUANDO É PASSADO O MOUSE ACIMA
//ESSA FUNÇÃO AFETA SOMENTE O ELEMENTO COM O ID MOUSE MOVE
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}


function redirecionar(){
    window.open("https://github.com/Eversons99/Aula_JS"); //o window.open ira abrir essa pagina em uma nova aba quando o usuario clicar no elemento com o id redirecionar
    window.location.href = "https://github.com/Eversons99/Aula_JS";//window.location.href = ira abir o link na mesma pagina atual do conteudo
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
*/

/*FUNÇÕES
function validaidade(idade){
    var validar;
    if (idade >= 18){
    var validar = true
    }else{
    validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaidade(idade));
/*
//essa função soma valores
function soma (n1, n2){
    return n1 + n2;
}
//Essa função troca valores/strings
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
alert(soma(5,10));
*/
/*TRABALHANDO COM DATA
var d = new Date(); //mostra a data e hora atual
alert(d.getMinutes()); // mostra os minutos
alert(d.getMonth()+1); //o month mosta so o ês mas ele começa a contar do 0 então se faz necessrio adicionar o +1
*/


/*CONDICIONAL E LAÇOS DE REPETIÇÃO
/*FOR
//var count;
//for (count = 0; count <=5; count++){
//    alert(count);}
*/

/* WHILE
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
} 
*/
/* IF ELSE
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}
*/



/*ABAIXO TRABALHAREMOS COM DICIONARIO

//var frutas = [{nome:"maça", cor:"Vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas); 
//alert(frutas[1].nome); 


//var fruta = {nome:"maça", cor:"Vermelha"}
//console.log(fruta); //mostra todo o dicionario e seus dados
//console.log(fruta.nome); //mostra somente o nome 
//alert(fruta.cor); //mostra somente cor
*/



/*ABAIXO TRABALHAREMOS COM ARRAY
//var lista = ["Maça", "Pera", "Laranja"];
//console.log(lista.join("-"));// mostra a lista como um string so que separada pelo sinal de -
//console.log(lista);
//console.log(lista.toString()); //Traz o conteudo da lista como string, sem as aspas
//console.log(lista.reverse); // coloca a lista ao contrario
//console.log(lista.length) //esta função vê e mostra o tamanho da lista
//lista.push("Uva"); //inserindo mais um dado na lista
//lista.pop(3); //remove os elementos
//console.log(lista) //imprime toda lista
//console.log(lista[0]) //imprime somente a posição 0 da lista
*/





/*
var nome = "Everson Alves";
var idade = 21;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase());
//A função replace esta trocando a palavra japão por Brasil
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão","Brasil "));
*/