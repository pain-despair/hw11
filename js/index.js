let array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]


// ==========================Task1(Сумма полож элементов и их кол-во)=============================
let sum = 0
for (let i = 0; i < array.length; i++){
    if (array[i] > 0) {
        sum += array[i];
    }
}
let positiveNumbers = 0
for (let i = 0; i < array.length; i++){
    if (array[i] > 0) {
        positiveNumbers++;
    }
}
console.log('Сумма положительных элементов:' + sum);
console.log('Количество положительных элементов:' + positiveNumbers);

// ==========================Task2(Минимальный элемент массива и его порядковый номер)=============================
let minElement = array [0]
let minNumber = 0

for (let i = 1; i < array.length; i++) {
    if (array[i] < minElement) {
        minElement = array[i]
        minNumber = i
    }
}
console.log('Минимальный элемент в массиве:' + minElement);
console.log('Порядковый номер минимального элемента в массиве:' + minNumber);

// ==========================Task3(Максимальный элемент массива и его порядковый номер)=============================
let maxElement = array [0]
let maxNumber = 0

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i]
        maxNumber = i
    }
}
console.log('Минимальный элемент в массиве:' + maxElement);
console.log('Порядковый номер минимального элемента в массиве:' + maxNumber);

// ==========================Task4(Кол-во отрицательых элементов)=============================
let negativeNumbers = 0
for (let i = 0; i < array.length; i++){
    if (array[i] < 0) {
        negativeNumbers++;
    }
}
console.log('Количество отрицательных элементов:' + negativeNumbers);

// ==========================Task5(Количество непарных положительных элементов)=============================
let neparniNumbers = 0
for (let i = 0; i < array.length; i++){
    if( array[i] > 0 && array[i] % 2 !== 0){
    neparniNumbers++
    }
}
console.log('Количество непарных положительных элементов:' + neparniNumbers);

// ==========================Task6(Количество парных положительных элементов)=============================
let parniNumbers = 0
for (let i = 0; i < array.length; i++){
    if( array[i] > 0 && array[i] % 2 == 0){
    neparniNumbers++
    }
}
console.log('Количество парных положительных элементов:' + neparniNumbers);

// ==========================Task7(Cумма парных положительных элементов)=============================
let summa = 0 
for (let i = 0; i < array.length; i++){
    if( array[i] > 0 && array[i] % 2 == 0){
    summa+= array[i]
    }
}
console.log('Сумма парных положительных элементов:' + summa);

// ==========================Task8(Сумма непарных положительных элементов)=============================
let summa1 = 0 
for (let i = 0; i < array.length; i++){
    if( array[i] > 0 && array[i] % 2 !== 0){
    summa1+= array[i]
    }
}
console.log('Сумма непарных положительных элементов:' + summa1);

// ==========================Task9(Произведение положительных элементов)=============================
let plural = 1
for (let i = 0; i < array.length; i++){
    if (array[i] > 0) {
        plural *= array[i]
    }
}
console.log('Произведение положительных элементов:' + plural);

// ==========================Task10(Самый большой элемент в массиве)=============================
let max = 0
for (let i = 0; i < array.length; i++){
    if (array[i] > max){
        max = array[i]
    }
}
console.log('Самый большой элемент в массиве:' + max);













