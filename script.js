

var numeroInput = document.getElementById('numero');
var botao = document.getElementById('botao');
var tabuada = document.getElementById('tabuada');



function gerar(){
 
    if(numeroInput.value.length == 0){
        window.alert('[ERRO] digite um numero para gerar a tabuada');
    }else{
        tabuada.innerHTML = '<option value="">--Digite um numero acima--</option>'
    var numImput = Number(numeroInput.value);
        for(var c=1;c<=10;c++){
            tabuada.innerHTML+= `<option value="v${c}">${numImput} x ${c} = ${numImput*c}</option>`
        }
    }
    
    
}
