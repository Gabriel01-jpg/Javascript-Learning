// Qualquer bloco que possa ocorrer algum erro que possa quebrar a alteração

try {
    console.log(NaoExiste);
} catch(error){
    console.log('Variável não existente')
}