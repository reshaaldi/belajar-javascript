var siswa = new Object();
siswa.namaDepan = "resha";
siswa.namaBelakang = "aldi";
siswa.alamat = "bandung";
siswa.namaLengkap = function(){
    return this.namaDepan + " " + this.namaBelakang;
};

alert("nama :" + siswa.namaLengkap());