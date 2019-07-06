function notnum(){
    alert('Error! Input is  not a number');
}

function empty(){
    alert('Error! Empty Field');
}

function add(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(isNaN(num1) || isNaN(num2)){
        notnum();
    }
    else if(num1=="" || num2==""){
        empty();
    }
    else{
        var sum = parseInt(num1) + parseInt(num2);
        alert('The sum is: ' + sum);
    }

}

function subtract(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(isNaN(num1) || isNaN(num2)){
        notnum();
    }
    else if(num1=="" || num2==""){
        empty();
    }
    else {
        var diff = parseInt(num1) - parseInt(num2);
        alert('The difference is: ' + diff);
    }
   
}

function multiply(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(isNaN(num1) || isNaN(num2)){
        notnum();
    }
    else if(num1=="" || num2==""){
        empty();
    }
    else {
    var product = parseInt(num1) * parseInt(num2);
    alert('The product is: ' + product);
    }
}

function divide(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(isNaN(num1) || isNaN(num2)){
        notnum();
    }
    else if(num1=="" || num2==""){
        empty();
    }
    else {
        var quotient = parseInt(num1) / parseInt(num2);
        alert('The quotient is: ' + quotient);
    }

}



