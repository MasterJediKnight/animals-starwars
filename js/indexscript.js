let bm = document.getElementById("accuei");
  let dr = document.getElementById("drop0_1");
  let b_msw = document.getElementById("sw");
  let drmsw = document.getElementById("drop1_1");
// bm.addEventListener("click", () => {
//   if (getComputedStyle(dr).display != "none") {
//     mouseLeave0();
//   }
//   else {
//     leaveall();

//     document.getElementById("drop0_1").style.display = "block";
//     document.getElementById("drop0_1").style.borderRadius = "10px";
//     document.getElementById("accuei").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
//   }
// })


function mouseLeave0() {
  leaveall();
  document.getElementById("accuei").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
}

b_msw.addEventListener("click", () => {
  if (getComputedStyle(drmsw).display != "none") {
    mouseLeave1();
  }
  else {

    leaveall();
    document.getElementById("drop1_1").style.display = "block";
    document.getElementById("drop1_1").style.borderRadius = "10px";
    document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
  }
})
//Menu drop 2
function mouseEnter1() {
  leaveall();
  document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
  document.getElementById("drop1_1").style.display = "block";
  document.getElementById("drop1_1").style.borderRadius = "10px";
}
function mouseLeave1() {
  leaveall();

  document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
}

function mouseEnter2() {
  leaveall();
  document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
}
function mouseLeave2() {
  leaveall();
  document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  // document.getElementById("Footer").style.transitionDuration = "0.3s";
  // document.getElementById("Footer").style.transform = "translate(0px, 0px)";
}
function mouseEnter3() {
  leaveall();
  // document.getElementById("Footer").style.transitionDuration = "0.3s";
  // document.getElementById("Footer").style.transform = "translate(0px, 65px)";
  document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
}
function mouseLeave3() {
  leaveall();
  document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
}


//LEAVE ALL
function leaveall() 
{
  document.getElementById("drop0_1").style.display = "none";
  document.getElementById("drop1_1").style.display = "none";
  document.getElementById("accuei").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("mamif").innerHTML = "Animaux <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("Footer").style.bottom = "27px";
  document.getElementById("allrights").style.bottom = "0";
}
function replace_footer()
{
  document.getElementById("Footer").style.bottom = "27px";
  document.getElementById("allrights").style.bottom = "0";
  document.getElementById("Footer").style.transition = "all 1s ease-out;";
  document.getElementById("allrights").style.transition = "all 1s ease-out;";
}
window.onload = leaveall();