function objects(array){
  var i=0
  while(i<array.length){
    console.log(array[i].first_name,array[i].last_name)
    i+=1
  }
}
console.log( objects([
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]))
