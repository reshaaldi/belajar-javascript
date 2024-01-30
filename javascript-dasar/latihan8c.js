var pilihanUser = prompt("Apakah kamu pilih gajah, orang, atau semut?");
var pilihanComputer = Math.random();


if (!["gajah", "orang", "semut"].includes(pilihanUser)) {
    alert("Pilih yang bener woi!");
  }


if (pilihanComputer < 0.34) {
pilihanComputer = "gajah";
} else if(pilihanComputer <= 0.67) {
pilihanComputer = "orang";
} else {
pilihanComputer = "semut";
}


if (pilihanUser === "gajah" && pilihanComputer === "orang") {
    alert("Anda menang! " +"\n komputer memilih :" + pilihanComputer);
  } else if (pilihanUser === "semut" && pilihanComputer === "gajah") {
    alert("Anda menang! "+"\n komputer memilih :" + pilihanComputer);
  } else if (pilihanUser === "orang" && pilihanComputer === "semut") {
    alert("Anda menang!" + "\n komputer memilih : " + pilihanComputer)
  } else if (pilihanUser === pilihanComputer) {
    alert("Seri!"+"\n komputer memilih :" + pilihanComputer);
  } else {
    alert("Anda kalah komputer memilih :" + pilihanComputer);
  }