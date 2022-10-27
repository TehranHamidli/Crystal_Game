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

