function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    });
}

try {
    let data = new Date()
    const hora = retornaHora(data);
    console.log(hora)
} catch(e) {
    console.log('Chegou aqui')
} finally {
    console.log('Sempre passo')
}