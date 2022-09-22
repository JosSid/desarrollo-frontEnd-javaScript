
// productor - gestiona un proceso asíncrono a través de una promesa
function calculateRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber % 2 === 0) {
        resolve(randomNumber)
      } else {
        reject('El número es impar')
      }
    }, 3000)
  });
}

// consumidor - espera a cambios
/*calculateRandomNumber()
  .then((num) => {
    console.log('la promesa se ha resuelto con: ', num);
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log('callback de finally');
  })
*/



(async () => {
  try {
    const result = await calculateRandomNumber();
    console.log(result);
  } catch (result) {
    console.log(result);
  }

  console.log('callback de finally');
})()


