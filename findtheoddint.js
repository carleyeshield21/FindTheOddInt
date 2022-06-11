function findOdd(A) {
  arr1 = []
  for(i=0; i<=A.length-1; i++){
      thearr = []
      counter = 0
      for(j=0; j<=A.length-1; j++){
          if(A[i] == A[j]){
              counter++
          }
      }
      arr1.push(A[i].toString() + ' '.concat(counter.toString()) + ' ')
  }
  let uniqueChars = [...new Set(arr1)];
  for(i=0; i<=uniqueChars.length-1; i++){
      k = 0
      arrfin = []
      for(j=0; j<=uniqueChars[i].length-1; j++){
          if(uniqueChars[i][j] == ' '){
              arrfin.push(parseInt(uniqueChars[i].slice(k,j)))
              k = j + 1
          }
      }
    //   console.log(`${arrfin[0]}'s frequency is ${arrfin[1]}`)
      if(arrfin[1] % 2 != 0){
        console.log(`In the array [${A}]\n${arrfin[0]} has an odd frequency of ${arrfin[1]}`)
      }
    //   console.log('========')
  }
}
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])
console.log('========')
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
console.log('========')
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])
console.log('========')
findOdd([1,1,1,1,1,1,10,1,1,1,1])
console.log('========')
findOdd([5,4,3,2,1,5,4,3,2,10,10])