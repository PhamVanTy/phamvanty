function myConvert(){
    const rateUSDtoVND = 23660;
    const rateYENtoVND = 165.53;
    const rateUSDtoYEN = 142.93;
    let myValue = +document.getElementById("amount").value;
    let toCurent = document.getElementById('from').value;
    let toFrom = document.getElementById('to').value;
    if (toCurent == toFrom){
        document.getElementById('result').innerHTML = "Result: " + myValue;
    }
    if (toCurent == 'usd' && toFrom == 'vnd') {
        document.getElementById('result').innerHTML = "Result: " + myValue * rateUSDtoVND;
    }
    if (toCurent == 'vnd' && toFrom == 'usd') {
        document.getElementById('result').innerHTML = 'Result: ' + myValue * (1 / rateUSDtoVND);
    }
    if (toCurent == 'yen' && toFrom == 'vnd') {
        document.getElementById('result').innerHTML = 'Result: ' + myValue * rateYENtoVND;
    }
    if (toCurent == 'vnd' && toFrom == 'yen') {
        document.getElementById('result').innerHTML = 'Result: ' + myValue * (1 / rateYENtoVND);
    }
    if (toCurent == 'usd' && toFrom == 'yen') {
        document.getElementById('result').innerHTML = 'Result: ' + myValue * rateUSDtoYEN;
    }
    if (toCurent == 'yen' && toFrom == 'usd') {
        document.getElementById('result').innerHTML = 'Result: ' + myValue * (1 / rateUSDtoYEN);
    }
}