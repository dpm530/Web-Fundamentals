function time(hour,minutes,period){
   period=period.toLowerCase()
   
   if(period==="am"){
      if(minutes>=0 && minutes<30){
         console.log("It's just after",hour,"in the morning.")
      }
      else if(minutes>30 && minutes<=59){
         console.log("It's almost",(hour+1),"in the morning.")
      }
      else if(minutes===30){
         console.log("It's",hour,":",minutes,", this case wasn't specified in the instructions")
      }
   }
   else if(period==="pm"){
      if(minutes>=0 && minutes<30){
         console.log("It's just after",hour,"in the afternoon.")
      }
      else if(minutes>30 && minutes<=59){
         console.log("It's almost",(hour+1),"in the afternoon")
      }
      else if(minutes===30){
         console.log("It's",hour,":",minutes,", this case wasn't specified in the instructions.")
      }
   }
}
console.log (time(10,35,"AM"))
console.log (time(11,25,"pm"))
console.log(time(6,02,"am"))
console.log(time(5,49,"PM"))
console.log(time(9,59,"AM"))
console.log(time(10,00,"pm"))
console.log(time(4,30,"am"))
console.log(time(8,07,"pm"))
console.log(time(2,11,"pm"))
console.log(time(3,57,"AM"))
