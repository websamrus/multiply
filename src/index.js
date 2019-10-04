module.exports = function multiply(first, second) {
  // my solution 1
  let numberF = first.split('').reverse();
  let numberS = second.split('').reverse();
  let arr = [];
  
  for (let i=0; i<numberF.length; i++){
    for (let j=0; j<numberS.length; j++){
      arr [i+j]= (arr [i+j])?arr [i+j]+(numberF[i]*numberS[j]):numberF[i]*numberS[j];
    }
  }

  for (let i=0; i<arr.length; i++){
  	if(arr [i]>=10){
      arr [i+1]+=Math.trunc(arr[i]/10);
    	arr [i]=arr[i]%10;
    }
  }

  // return arr.reverse().join('');
 // or my solution 2
  return String(BigInt(first)*BigInt(second));
}
