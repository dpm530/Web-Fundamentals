function fancyArray(array){
   var i=0
   while(i<array.length){
      console.log(i+" -> "+array[i])
      i+=1
   }
}
console.log(fancyArray([ "James", "Jill", "Jane", "Jack" ]))
