function randomChance(coins){
   var win=30
   while(coins>0){
      if((Math.floor(Math.random()*100)+1)===win){
         return "You win! You now have "+(coins+(Math.floor(Math.random()*(1+100-50)+50)))+" coins."
      }
      coins-=1
   }
   return "You loose, you have 0 coins left."
}
console.log(randomChance(100))
console.log(randomChance(56))
console.log(randomChance(70))
console.log(randomChance(1200))
