var el = document.getElementById('ceasar');
el.addEventListener('click', runCeaser);

function runCeaser(){
    console.log("im in!")
    shift = document.getElementById("shift").value;
    if(shift > 100){
      alert('Try keeping it less than 100!');
      return false;
    }
    console.log(shift)
    var message = document.getElementById("alice2").value;
    
    var enc = encrypt(message, shift);
    var dec = decrypt(enc, shift);
    document.getElementById("attacker2").innerHTML = enc;
    document.getElementById("bob2").innerHTML = dec;
}

function encrypt(message,shift){
  message.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  var cipher = "";
  for(var i = 0; i < message.length; i++){
    var charPos = alphabet.indexOf(message.charAt(i));
    var newShift = (Number(shift) + Number(charPos)) % 26;
    if(message.charAt(i) == ' '){
      cipher += ' ';
    }
    else{
      var replaced = alphabet.charAt(newShift)
      cipher += replaced;
    }
  }
  return cipher;
}
function decrypt(message,shift){
  message.toLowerCase();
  var deciphered = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for(var i = 0; i < message.length; i++){
    var charPos = alphabet.indexOf(message.charAt(i));
    var newShift = (Number(charPos) - Number(shift)) % 26;
    if (newShift < 0) {
      newShift = alphabet.length + newShift;
    }
    if(message.charAt(i) == ' '){
      deciphered += ' ';
    }
    else{
      var replaced = alphabet.charAt(newShift);
      deciphered += replaced;
    }
  }
  return deciphered;
}