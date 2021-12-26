/* eslint-disable no-return-assign */

// Source: https:https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

function birthdayCakeCandles(candles: number[]): number { /*se declara la funcion en donde se le pone que recibira datos de tipo numero*/
    let tmax = 0;                                          /*se declara una variable max*/
    let velaS = 0;                                         /*se declara una variable cont*/
      candles.forEach((tvela) => {                         /*se declara un ciclo forEach*/      
      if (tvela> tmax) {                                   /*se declara las condiciones que debe de cumplir el ciclo que item sea menor a max*/ 
        tmax = tvela;                                       /*su condicion de asignacion cuando mx sea igual que item pasa a la siguiente linea*/
        velaS = 1;                                         /*su objetivo de avance que es que cuando se logre la linea pasada cont sea uno*/
      } else if (tvela === tmax) {                          /*si no se cumple el if sucedera ento entonces, su condicion es que cuando item sea igual a max pasa a la siguiente linea*/ 
        velaS++;                                           /*que cont aumente uno*/
      }                                                   /*finizila el for.each*/
    });
  return velaS;
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [3, 2, 1, 3];
  const result = birthdayCakeCandles(testArray);
  console.log('Result: ', result);
}

main();
