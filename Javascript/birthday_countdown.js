var daysUntilMyBirthday=60;
for(var i=60; i>=0;i-=1){
   if(i>30){
      console.log(i,"days until my birthday. Such a long time... :(")
   }
   else if(i<=30 && i>5){
      console.log(i,"days until my birthday!!!")
   }
   else if(i<=5 && i>0){
      console.log(i,"days untilmy birthday, !!!!!!!!!!!!!!!!!!!")
   }
   else if(i===0){
      console.log("It's my birthday.")
   }
}
