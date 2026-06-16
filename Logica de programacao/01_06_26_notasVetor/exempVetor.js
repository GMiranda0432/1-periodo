const slOperaVetor = document.getElementById("slOperaVetor");
const inDescricao = document.getElementById("inDescricao");
const inIndice = document.getElementById("inIndice");
const outSaida = document.getElementById("outSaida");

slOperaVetor.addEventListener("change", executarOperacao);

var vetProdutos = new Array();

function executarOperacao() {
    const operacao = slOperaVetor.value;
    let descricao = inDescricao.value;
    let indice;
    outSaida.innerHTML = "";
    switch (operacao) {
        case "inserirInicio":
            vetProdutos.unshift(descricao);
            break;

        case "inserirFim":
            vetProdutos.push(descricao);
            break;

        case "alterar":
            indice = Number(inIndice.value);
            if (indice >= 0 && indice < vetProdutos.length){
                vetProdutos[indice] = descricao;
                outSaida.innerHTML = `Alteração realizada com sucesso!<br>`+
                                     `Vetor Produtos[${indice}] => ${vetProdutos[indice]}`;
            } else {
                outSaida.innerHTML = "Alteração não realizada!<br>Índice Inválido!";
            }
            
            break;
        case "removerInicio":
            
            break;
        case "removerFim":
            
            break;
        case "procurar":
            let indAchado = -1; //funciona como um flag, se o produto não foi encontrado, indAchado permanece com valor -1 
            for(let ind=0; ind<vetProdutos.length; ind++){
                if(vetProdutos[ind] == descricao){
                    indAchado = ind;
                }
            }
            
            //let indAchado = vetProdutos.indexOf(descricao); //equivalente ao código das linhas 35 a 40

            if (indAchado == -1){
                outSaida.innerHTML = "Produto não encontrado no Vetor Produtos!";
            } else {
                outSaida.innerHTML = `Produto encontrado no Vetor Produtos[${indAchado}]`;
            }

            break;
        case "mostrarVetor":
            for(let ind=0; ind<vetProdutos.length; ind++){
                outSaida.innerHTML += `Vetor Produtos[${ind}] => ${vetProdutos[ind]}<br>`;
            }
            break;
        case "mostrarElemento":
            indice = Number(inIndice.value);
            if (indice >= 0 && indice < vetProdutos.length){
                outSaida.innerHTML = `Vetor Produtos[${indice}] => ${vetProdutos[indice]}`;
            } else {
                outSaida.innerHTML = "Índice Inválido!";
            }
            break;
    }
    slOperaVetor.value = "";
}