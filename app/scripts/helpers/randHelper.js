export function getRandomNumber(minNumber, maxNumber) {
  if (minNumber >= maxNumber) {
    throw new Error(
      'No se puede generar un numero aleatorio con estos parametros'
    );
  }

  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

