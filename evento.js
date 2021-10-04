//Condições para se cadastrar
var DataAtual = new Date();

var DataEvento = new Date("27 de Março de 2022");

if (DataAtual.lenght<=DataEvento.lenght) {
//É possivível efetuar o cadastro
   console.log("É possivel continuar o cadastro")
}else if (dataAtual>DataEvento) {
    console.log("Não é possivel continuar o cadastro")
}
//Idade limite tem que ser maior de 18 anos.

let idade = 18;
if (idade.length > 18) {
    console.log("Maior de 18, cadastro em andamento!")   

}else if(idade<18) 
     console.log("Menor de 18, infelizmente cadastro indisponivel.")

    var Participantes = [ "1", "2", "3", "50"]
     
    if(Participantes.lenght<100){
        console.log("Cadastro efetuado com sucesso")
    }else{ 
        console.log("Cadastro indisponivel, pois excedeu o numero limite de pessoas cadastradas")
    }
