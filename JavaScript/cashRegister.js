const tablaValores = [
  ["PENNY", 1], ["NICKEL", 5], ["DIME", 10], ["QUARTER", 25],
  ["ONE", 100], ["FIVE", 500], ["TEN", 1000], ["TWENTY", 2000],
  ["ONE HUNDRED", 10000]
].reverse();

function checkCashRegister(price, cash, cid) {
  
  let change = cash*100 - price*100;
  let objectReturn = {status: "", change: []};

  let to100 = [];
  for (let i = 0; i < cid.length; i++) {
    to100.push([cid[i][0],Math.round(cid[i][1]*100)]);
  }
  to100 = to100.reverse();

  let totalCash = to100.reduce((ac,next) => ac + next[1], 0);
  if (totalCash < change) {
    objectReturn.status = "INSUFFICIENT_FUNDS";
    return objectReturn;
    }
  
  let vuelto = [
    ["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
    ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ].reverse();
    
  for(let i = 0; i < tablaValores.length;) {
    
    if (change >= tablaValores[i][1] && to100[i][1] > 0) {      
      
      vuelto[i][1] += tablaValores[i][1];
      change -= tablaValores[i][1];
      to100[i][1] -= tablaValores[i][1];
      if (to100[i][1] == 0) {i++} 

    } else {i++}

  }

  let sumatoria = to100.reduce((a,b) => a + b[1], 0);

  if (sumatoria == 0) {
    objectReturn.status = "CLOSED";
    objectReturn.change = vuelto
    .reverse()
    .map(a => [a[0], a[1] /= 100])
    return objectReturn;
  }
  if (change > 0) {
    objectReturn.status = "INSUFFICIENT_FUNDS";
    return objectReturn;
    }
  if (change == 0) {
    objectReturn.status = "OPEN";
    objectReturn.change = vuelto
    .filter(a => a[1] != 0)
    .map(a => [a[0], a[1] /= 100]);
    return objectReturn;
  }

}

document.write(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])));