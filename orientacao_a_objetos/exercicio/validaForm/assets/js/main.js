class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }
  
  eventos(){
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  } 
  
  handleSubmit(e) {
    e.preventDefault();
    const campoValidos = this.checkCampos();
    const senhaValidas = this.senhaValidas();

    if(campoValidos && senhaValidas) {
      alert('Formulário enviado')
      this.formulario.submit()
    }
  }

  senhaValidas() {
    let valid = true;
    
    const senha =  this.formulario.querySelector('.senha')
    const repetirSenha =  this.formulario.querySelector('.repetir-senha')
    if(senha.value !== repetirSenha.value){
      this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
      valid = false;
    }

    if(senha.value.length < 6 || senha.value.length > 15){
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 15 caracteres');
    }
    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()){
      this.criaErro(campo, 'CPF Inválido');
      return false;
    }

    return true;

  }
  validaUsuario(campo) {
    let valid = true;
    if(campo.value.length < 3 || campo.value.length > 12){
      this.criaErro(campo, 'Usuário precisar ter entre 3 e 12 caracteres')
      valid = false;
    }
    if(!campo.value.match(/^[a-zA-Z0-9]+$/g)){
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números')
      valid = false;
    }
    return valid;
  }

  checkCampos() {
    let valid = true;

    for(let error of this.formulario.querySelectorAll('.error-text')){
      error.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText;
      if(!campo.value){
        this.criaErro(campo, `Campo "${label}" não pode estar em branco. `)
        valid = false;
      }
      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid = false;
      }
      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();