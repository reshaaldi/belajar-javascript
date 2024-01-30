alert("menu maknanan \n baso tahu : Rp5000 \n batagor : Rp7000 \n es jeruk : Rp3000")
var makanan = prompt("pilih makanan anda")
var jumlah = prompt("beli berapa bang?")
var harga

if (makanan === "baso tahu") {
  harga = 5000;
} else if (makanan === "batagor") {
  harga = 7000;
} else if (makanan === "es jeruk") {
  harga = 3000;
} else {
  alert("Makanan tidak tersedia");
}


var total = harga * jumlah;

alert("Menu yang dipilih :" + makanan + "\nJumlah yang dipesan :" + jumlah + "\nJumlah harga :" + total)

alert("Terima Kasih")