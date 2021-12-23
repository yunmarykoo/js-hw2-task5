var a = Math.floor (Math.random() * (1000 - 100) + 100)

alert ('Случайное сгенерированное трехзначное число: ' + a);

var num1 = (Math.floor(a / 1 % 10));
var num2 = (Math.floor(a / 10 % 10));
var num3 = (Math.floor(a / 100 % 10));

if (num1 > num2 && num1 > num3){
    alert('Наибольшая цифрой из числа является ' + num1)
} else if (num2 > num1 && num2 > num3){
    alert('Наибольшая цифрой из числа является ' + num2)
} else if (num3 > num1 && num3 > num2){
    alert('Наибольшая цифрой из числа является ' + num3)
}