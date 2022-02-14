function inserirNumero(num){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML += num
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        alert('NADA FOI ADICIONADO A CALCULADORA')
    }
}

function limparTudo(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = '';
}

function limpaUltimo(){
   let resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

document.querySelectorAll('.buttons').
forEach(b => b.addEventListener('click', () => inserirNumero(b.value)))
document.querySelector('#calcular').addEventListener('click', calcular)
document.querySelector('#limpaTudo').addEventListener('click', limparTudo)
document.querySelector('#limpaUltimo').addEventListener('click', limpaUltimo)
    