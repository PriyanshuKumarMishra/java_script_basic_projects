function main() {
    var depth = parseInt(readLine(), 10);
   var dist = 0;
   var time = 0;
   while (true){
       time++
       dist+=7
       if (dist===depth||dist>depth){
           break
       }
       dist-=2
   }
    console.log(time)
}
