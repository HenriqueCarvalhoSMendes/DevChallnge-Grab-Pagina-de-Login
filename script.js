const inputEmail = document.querySelector('input.email').focus()
console.log(inputEmail)
const inputSenha =  document.querySelector('input.senha')
console.log(inputSenha)
const botaoEntrar = document.querySelector('input.entrar')
console.log(botaoEntrar)

const email = 'teste@teste.com.br'
const senha = 'teste'
const nome = 'Usuario'

botaoEntrar.addEventListener('click', logar)


function logar(){
    const inputEmail = document.querySelector('input.email')
    const inputSenha =  document.querySelector('input.senha')
  
    if (inputEmail.value == ''|| inputSenha.value == ''){ 
       alert('Preencher todos os campos')
    } else if (inputEmail.value != email || inputSenha.value != senha) {
        inputEmail.style.border = '1px solid red'
        inputSenha.style.border = '1px solid red'
        alert('Dados invalidos, confirme se seu e-mail e senha foram digitados corretamente') 
    } else if (inputEmail.value == email && inputSenha.value == senha){
        alert(`Login efetuado com sucesso. Bem vindo, ${nome}`)
    }
}