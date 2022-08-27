function convertToRoman(num) {
 
  let roman = "";
 
 for (let i = num; i > 0;) {

  if (i >= 1000) {
    roman += "M";
    i -= 1000;
  } else if (i < 1000 && i >= 900) {
    roman += "CM";
    i -= 900;
  } else if (i < 900 && i >= 500) {
    roman += "D";
    i -= 500;
  } else if (i < 500 && i >= 400) {
    roman += "CD";
    i -= 400;
  } else if (i < 400 && i >= 100) {
    roman += "C";
    i -= 100;
  } else if (i < 100 && i >= 90) {
    roman += "XC";
    i -= 90;
  } else if (i < 90 && i >= 50) {
    roman += "L";
    i -= 50;
  } else if (i < 50 && i >= 40) {
    roman += "XL";
    i -= 40;
  } else if (i < 40 && i >= 10) {
    roman += "X";
    i -=10;
  } else if (i < 10 && i >= 9) {
    roman += "IX";
    i -= 9;
  } else if (i < 9 && i >= 5) {
    roman += "V";
    i -= 5;
  } else if (i < 5 && i >= 4) {
    roman += "IV";
    i -= 4;
  } else if (i < 4 && i > 0) {
    roman += "I";
    i -= 1;
  }
}

return roman;

}

//document.write(convertToRoman(3222));