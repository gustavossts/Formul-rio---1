const btnSubmit = document.querySelector("#login-submit");
const namee = document.querySelector("#login-name");
const senha = document.querySelector("#login-password");
const btnEye = document.querySelector("#btn-eye");

btnSubmit.addEventListener('click', ()=>{
  if (namee.value == "usuario" && senha.value == "senha") {
    alert("Bem vindo");
  } else {
    alert("Credenciais inválidas");
  }
})

btnEye.addEventListener('click', ()=>{
  if(senha.type == "password"){
    senha.type = "text";
  }
  else{
    senha.type = "password"
  }
})

/*adicione propriedades nas váriaveis e não nos valores das variáveis*/