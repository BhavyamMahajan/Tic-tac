//  home page

var p1_name = document.getElementById("p1");
var p2_name = document.getElementById("p2");
var ck = 0;

function hide() {
  if (document.getElementById("friend").checked) {
    document.getElementById("p2").style.display = "block";
    document.getElementById("p2").style.textAlign = "centre";
    ck = 1;
  } else {
    document.getElementById("p2").style.display = "none";
  }
}

// to open game page with roboot/ friend
function myfun() {
  if (ck === 1) {
    if (p1_name.value && p2_name.value) {
      sessionStorage.setItem("player_1", p1_name.value);
      sessionStorage.setItem("player_2", p2_name.value);

      window.location.href = "with-fri/index.html";
    }
  } else {
    if (p1_name.value) {
      sessionStorage.setItem("player_1", p1_name.value);
      window.location.href = "comp-game/index.html";
    }
  }
  sessionStorage.setItem("result", 1);
}
