function rot13(str) {

  let abecedario = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
  'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 
  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
  'Y', 'Z'];
  // 26 letters, 52 total

  let regex = /[^A-Z]/;
  let decoded = "";

  for (let i = 0; i < str.length; i++) {
    
    if (str[i].match(regex) != null) {
      decoded += str[i];
      continue;
    }

    decoded += abecedario[abecedario.indexOf(str[i]) + 13];
  }

  return decoded;

}
  
document.write(rot13("UBYN PBZB RFGNF"));
