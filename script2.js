function calcularPlanchas() {
  const altura = parseFloat(document.getElementById('altura').value);
  const ancho = parseFloat(document.getElementById('ancho').value);
  const areaPlaca = parseFloat(document.getElementById('tipo').value);

  if (altura > 0 && ancho > 0 && areaPlaca > 0) {
    const alturaCM = altura * 100;
    const anchoCM = ancho * 100;
    const areaTotal = alturaCM * anchoCM;
    const cantidad = areaTotal / areaPlaca;

    document.getElementById('resultado').textContent =
      `Área total: ${areaTotal.toFixed(2)} cm² — Necesitas aproximadamente ${Math.ceil(cantidad)} unidades.`;
  } else {
    document.getElementById('resultado').textContent =
      'Por favor, ingresa todos los datos correctamente.';
  }
}
