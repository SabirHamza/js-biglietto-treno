//Chiedi l'età del passeggiero
let age = parseInt (prompt('Quanti anni hai?'))
console.log(age);

//Chiedi i km da percorrere
let km = parseInt (prompt('Quanti km devi percorrere?'))
console.log(km);

//Prezzo per km
let price = 0.21 * km
console.log(price);

//Calcolo tariffa
if (age < 18){
    let discountedrprice = (price * 80) / 100
    console.log(discountedrprice);
}else if (age > 65){
    let discountedrprice = (price * 60) / 100
    console.log(discountedrprice);
}else{
    let discountedrprice = price
    console.log(discountedrprice);
}