let toplam = 0;
let user = 0;
let wins = 0;
let losses = 0;
let a = 0;

// 1. Istifadeci Tapacagi Reqem.Random Cixmalidir.

function istifadecirandom2() {
  const random = Math.floor(Math.random() * 100) + 1;
  user = random;
  $(".istifadecirandom").html(random);
}
istifadecirandom2();

// 2. buttona basanda random reqemler cixsin

$(".cristal").on("click", function () {
  const btnrandom = Math.floor(Math.random() * 10) + 1;
  toplam += btnrandom;
  console.log(btnrandom);
  if (toplam == user) {
    wins++;
    alert("Qalib oldunuz");
    reset();
    $(".qalib").html(wins);
  }

  if (toplam > user) {
    losses++;

    $(".meglub").html(losses);

    alert("Meglub Oldunuz");
    reset();
  }
  $(".istifadecitapdigi").html(toplam);
});

function reset() {
  istifadecirandom2();
  toplam = 0;
}



// $(".cristal2").on("click", function () {
 

//   toplam += btnrandom2;
//   console.log(btnrandom2);
//   if (toplam == user) {
//     wins++;
//     alert("Qalib oldunuz");
//     reset();
//     $(".qalib").html(wins);
//   }

//   if (toplam > user) {
//     losses++;

//     $(".meglub").html(losses);

//     alert("Meglub Oldunuz");
//     reset();
//   }
//   $(".istifadecitapdigi").html(toplam);

//   const btnrandom = Math.floor(Math.random() * 10);
//   toplam += btnrandom;
//   console.log(toplam);
//   $(".istifadecitapdigi").html(toplam);
// });

// $(".cristal3").on("click", function () {

  
//   toplam += btnrandom;
//   console.log(btnrandom);
//   if (toplam == user) {
//     wins++;
//     alert("Qalib oldunuz");
//     reset();
//     $(".qalib").html(wins);
//   }

//   if (toplam > user) {
//     losses++;

//     $(".meglub").html(losses);

//     alert("Meglub Oldunuz");
//     reset();
//   }
//   $(".istifadecitapdigi").html(toplam);
    // const btnrandom = Math.floor(Math.random() * 10);
    // toplam += btnrandom;
    // console.log(toplam);
    // $(".istifadecitapdigi").html(toplam);
  // });

  // $(".cristal4").on("click", function () {


    
  // toplam += btnrandom;
  // console.log(btnrandom);
  // if (toplam == user) {
  //   wins++;
  //   alert("Qalib oldunuz");
  //   reset();
  //   $(".qalib").html(wins);
  // }

  // if (toplam > user) {
  //   losses++;

  //   $(".meglub").html(losses);

  //   alert("Meglub Oldunuz");
  //   reset();
  // }
  // $(".istifadecitapdigi").html(toplam);
    // const btnrandom = Math.floor(Math.random() * 10);
    // toplam += btnrandom;
    // console.log(toplam);
    // $(".istifadecitapdigi").html(toplam);
  // });
