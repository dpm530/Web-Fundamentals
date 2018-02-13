function numbersOnly(array){
  var answer=[]
  var i=0
  while(i<array.length){
    if (typeof array[i]==="number"){
      answer.push(array[i])
    }
    i+=1
  }
  return answer;
}
console.log(numbersOnly([1, "apple", -3, "orange", 0.5]))
