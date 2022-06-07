var readlineSync = require('readline-sync');
 
console.log("Para terminar a execucação do programa, digite X e aperte enter")
console.log("------------------------------------------------------------")

var n = readlineSync.question('Digite um numero: ');

var list = []
var list2 = []

while(n != 'x'){
    list.push(parseInt(n))
    var n = readlineSync.question('Digite um numero: ');
}

for (let index = 0; index < list.length; index++) {
   for (let j = index + 1; j < list.length; j++) {
       if(list[index] < list[j]){
           list2.push(list[index])
       }else{
            list2.push(list[j])
       }
   }
}
console.log(list2)