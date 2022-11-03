let toplam = 0;
let user = 0;
let wins = 0;
let losses = 0;
let a = 0;

function istifadecirandom2() {
  const random = Math.floor(Math.random() * 100) + 1;
  user = random;
  $(".istifadecirandom").html(random);
}
istifadecirandom2();

var crystal1 = Math.floor(Math.random() * 10) + 1;
var crystal2 = Math.floor(Math.random() * 10) + 1;
var crystal3 = Math.floor(Math.random() * 10) + 1;
var crystal4 = Math.floor(Math.random() * 10) + 1;

    $(".cristal1").on("click", function () {
        crystal1;
        toplam += crystal1;
        $(".istifadecitapdigi").html(toplam);
    })
    
      
      
      $(".cristal2").on("click", function () {
          crystal2;
          toplam += crystal2;
          $(".istifadecitapdigi").html(toplam);
        });
        
      
      
        $(".cristal3").on("click", function () {
          crystal3;
          toplam += crystal3;
          $(".istifadecitapdigi").html(toplam);
        });
        
      
        $(".cristal4").on("click", function () {
          crystal4;
          toplam += crystal4;
          $(".istifadecitapdigi").html(toplam);
        });
   


$(".cristal").on("click",function(){
    if (toplam == user) {
        $(".istifadecitapdigi").html(toplam);
        wins++;
        reset();
     
        $(".qalib").html(wins);
       
        alert("Qalib oldunuz");
  
      }
    
      if (toplam > user) {
        $(".istifadecitapdigi").html(toplam);
        losses++;
        reset();
       
        $(".meglub").html(losses);
      
        alert("Meglub Oldunuz");
      
   
      }
     
    });
  



  
    function reset() {
        istifadecirandom2();
        toplam = 0;}



  





