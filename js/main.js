// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');


form.addEventListener('submit', function (e) {
  // criado um form com um eveton de submit para impedir ele. 
  //e, event são os mesmos. 
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  // informa o elemento que recebe o evento. 

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  //transforma o valor em numero

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
    // verifica se o resultado é string. Caso seja vai aparecer mensagem.
    //o conteudo não vai passar por causa que existe a palavra return no final do if 
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
    // verifica se o resultado é string. Caso seja vai aparecer mensagem. 
    //o conteudo não vai passar por causa que existe a palavra return no final do if 
  }

  const imc = getImc(peso, altura);
  //calcula o imc e pega o valor
  const nivelImc = getNivelImc(imc);
  //verifica o valor do imc e retorna a situação
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  //mensagem na tela com informações do imc
  setResultado(msg, true);
  // mostra a mensagem com o valor true
});

function getNivelImc (imc) {
  // verifica qual o nivel do imc
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  // cria um array com os nomes que vão aparecer

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  //função do imc
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
  //pega o imc com duas casa decimais
}

function criaP () {
  //função que cria o paragrafo do resultado
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  //esta função foi criada para colocar o html dentro da div
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  //limpa a informação da div

  const p = criaP();
  //chama a função criaP


  if (isValid) {
    p.classList.add('paragrafo-resultado');
    //chama a formatação do css
  } else {
    p.classList.add('bad');
    //chama a formatação do css
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
  //adiciona no js o paragrafo
}
