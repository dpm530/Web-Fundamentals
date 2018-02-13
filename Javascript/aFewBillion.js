var pennys=0;
for(var i=1;i<=30;i+=1){
   if(pennys===0){
      pennys+=0.01
   }
   else if(pennys>0){
      pennys+=(pennys*2)
   }
}
console.log(pennys) 
