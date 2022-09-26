function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
  //Modificar o texto do botão
  //buttonCalculateImc.textContent = 'Modifiquei';
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-Result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  if (!isNaN(imc)) {
    document.getElementById('imc-Result').innerHTML = formattedImc;
    if (imc < 16) {
      document.getElementById('imc-Class').innerHTML = 'Inválido';
    } else if (imc >= 16 && imc < 17) {
      document.getElementById('imc-Class').innerHTML = 'Muito abaixo do peso';
    } else if (imc >= 17 && imc < 18.5) {
      document.getElementById('imc-Class').innerHTML = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      document.getElementById('imc-Class').innerHTML = 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
      document.getElementById('imc-Class').innerHTML = 'Acima do peso';
    } else if (imc >= 30 && imc < 35) {
      document.getElementById('imc-Class').innerHTML = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
      document.getElementById('imc-Class').innerHTML = 'Obesidade Grau II';
    } else {
      document.getElementById('imc-Class').innerHTML = 'Obesidade Grau III';
    }
  }
}

start();
