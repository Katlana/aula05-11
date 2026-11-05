const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', function() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.textContent = 'Por favor, insira valores válidos!';
    resultado.style.color = '#e53e3e';
    return;
  }


  const imc = peso / (altura * altura);
  
  resultado.style.color = '#2d3748';
  resultado.textContent = `Seu IMC é: ${imc.toFixed(1)}`;
});