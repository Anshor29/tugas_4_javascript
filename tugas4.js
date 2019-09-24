var julio = 190;
var julia = 180;
var julius = 188;

if (julio>julia) {
  if (julio>julius) {
    console.log("Julio memiliki tinggi badan tertinggi");
    var satu = "Julio";

    if (julius>julia) {
      var dua = "Julius";
      var tiga = "Julia";
    } else {
      var dua = "Julia";
      var tiga = "Julius";
    }
  }
  else {
    console.log("Julius memiliki tinggi badan tertinggi");
    var satu = "Julius";
    var dua = "Julio";
    var tiga = "Julia";
  }

}else {
  if (julia>julius) {
    console.log("Julia memiliki tinggi badan tertinggi");
    var satu = "Julia";

    if (julius>julio) {
      var dua ="Julius"
      var tiga = "Julio"
    }else {
      var dua ="Julio"
      var tiga = "Julius"
    }
  }
  else{
    console.log("Julius memiliki tinggi badan tertinggi");
    var satu = "Julius";

    if (julia>julio) {
      var dua ="Julia"
      var tiga = "Julio"
    }else {
      var dua ="Julio"
      var tiga = "Julia"
    }
  }
}

console.log("Urutan tinggi badan :");
console.log(satu);
console.log(dua);
console.log(tiga);
