function run(){
tempP = document.getElementById("pQ").value;
tempQ = document.getElementById("qP").value;
console.log(isPrime(tempP));
console.log(isPrime(tempQ));
console.log(isPrime(56));
if(isPrime(tempP) === true && isPrime(tempQ) === true && 11 < tempP < 100 && 11 < tempQ < 100){
p = document.getElementById("pQ").value;
q = document.getElementById("qP").value;
}
else{
alert("Please Put PRIME NUMBER For Both p and q!\nMust Be 11 < x < 100");
}
var e,d,n,l;

n = p*q;
l = (p-1)*(q-1);

//FIND E
var notFactors = new Array();

var notFactors = new Array();
    for (var i = 2; i < n; i++){
        if (coprime(i, l) == true){
            (notFactors.push(i) > 0);
        }
    }

e = notFactors[0];
// INFO PRINT //
document.getElementById("N").innerHTML = "N = " + n;
document.getElementById("L").innerHTML = "L = " + l;
document.getElementById("E").innerHTML = "E = " + e;

document.getElementById("pE").innerHTML = "Possible E(s): " + notFactors;
//BIG INTEGER INTILIZATION//
var n_1 = BigInt(n);
var l_1 = BigInt(l);
var e_1 = BigInt(e);
var k_1 = BigInt(1);
var d_1 = BigInt(1);

// FIND D //
var cont = true;
while (cont === true){
    var kAdd = k_1*l_1;
    var numer = 1n + kAdd;
    if(numer % e_1 !== 0n){
        k_1 = k_1+1n;
    }
    else{
        cont = false;
        d_1 = numer/e_1;
            }
    }
document.getElementById("D").innerHTML = "D = " + d_1;

// STRING TO ASCII //
var string = document.getElementById("alice").value;
console.log(string);
var encrypt1 = getCharCodes(string);
console.log(encrypt1);
var encryption = new Array();
var hex = new Array();

// ENCRYPT SENTENCE
for (var j = 0; j <= encrypt1.length - 1; j++){
    encryption[j] = encrypt(encrypt1[j], e_1, n_1);
    //console.log(encryption[j]);
    hex[j] = String.fromCharCode(Number(encryption[j]));
    //console.log("split");
    }
console.log(hex);
document.getElementById("attacker").innerHTML = hex;
//console.log(encryption);

var decryption = new Array();
var fin = new Array();
for (var k = 0; k <= encrypt1.length - 1; k++){
    decryption[k] = decrypt(encryption[k], d_1, n_1);
    console.log(decryption[k]);
    fin[k] = String.fromCharCode(Number(decryption[k]));
    }
console.log(fin);
fin = fin.join('');
document.getElementById("bob").innerHTML = fin;

function getCharCodes(s){
    let charCodeArr = [];

    for(let i = 0; i < s.length; i++){
        let code = s.charCodeAt(i);
        charCodeArr.push(code);
    }

    return charCodeArr;
}

function gcd(a, b){
    if (a == 0 || b == 0){
        return 0;
    }
    if (a == b){
        return a;
    }
    if (a > b){
        return gcd(a - b, b);
    }
    return gcd(a, b - a);
}

function coprime(a, b)
{
    if (gcd(a, b) == 1){
        return true;
    }
    else
    {
        return false;
    }
}

function encrypt(value, e, n){
    var encrypted = BigInt(value);
    encrypted = powerMod(encrypted,e,n);
    return encrypted;
}

function decrypt(numba, d, n){
    var decrypted = numba;
    decrypted = powerMod(decrypted,d, n);
    return decrypted;
}

function toASCII(value){
    var length = 4;
    var builder = java.lang.StringBuilder(length);
    for (var i = length - 1; i >= 0; i--){
        builder.append(String.fromCharCode(((value >> (8 * i)) & 255)));
    }
    return builder.toString();
}

function powerMod(base, exponent, modulus) {
    if (modulus === 1n) return 0;
    var result = 1n;
    base = base % modulus;
    while (exponent > 0n) {
        if (exponent % 2n === 1n)  //odd number
            result = (result * base) % modulus;
        exponent = exponent >> 1n; //divide by 2
        base = (base * base) % modulus;
    }
    return result;
}
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
}
