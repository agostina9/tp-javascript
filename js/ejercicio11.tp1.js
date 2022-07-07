let numero = parseInt(prompt('ingrese un numero'));
 if (numero % 2 === 0 && numero % 3 === 0){
 document.write(' divisible en 2 y 3')
} 
else if (numero % 2 === 0 && numero % 5 === 0){
    document.write(' divisible en 2 y 5')
    }
else if (numero % 2 === 0 && numero % 7 === 0){
    document.write(' divisible en 2 y 7')
    }
else if (numero % 3 === 0 && numero % 5 === 0){
    document.write(' divisible en 3 y 5')
    }
else if (numero % 3 === 0 && numero % 7 === 0){
    document.write(' divisible en 3 y 7')
    }
else if (numero % 5 === 0 && numero % 7 === 0){
    document.write(' divisible en 5 y 7')
    }
else if (numero % 2 === 0 && numero % 5 === 0 && numero % 3 === 0){
    document.write(' divisible en 2, 5 y 3')
    }
else if (numero % 2 === 0 && numero % 7 === 0 && numero % 3 === 0){
    document.write(' divisible en 2, 7 y 3')
    }
else if (numero % 7 === 0 && numero % 5 === 0 && numero % 3 === 0){
    document.write(' divisible en 7, 5 y 3')
    }
else if (numero % 2 === 0 && numero % 5 === 0 && numero % 7 === 0){
    document.write(' divisible en 2, 5 y 7')
    }
else if (numero % 2 === 0 ){
    document.write(' divisible en 2')
    }
else if (numero % 3 === 0 ){
    document.write(' divisible en 3')
    }
else if (numero % 5 === 0 ){
    document.write(' divisible en 5')
    }
else if (numero % 7 === 0 ){
    document.write(' divisible en 7')
    }
