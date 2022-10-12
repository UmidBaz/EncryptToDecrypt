var el = document.getElementById('ceasar');
if(el){
  el.addEventListener('click', runCeaser);
}
function runCeaser(){
    console.log("im in!")
    shift = document.getElementById("shift").value;

    var message = document.getElementsByName("alice2").value;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newalpha = "";
    
    //Creat new alpha
    for (let i = 0; i < alphabet.length; i++){
		let offset = (i + shift) % alphabet.length;
		newalpha += alphabet[offset];
	}

    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    console.log(result)
}