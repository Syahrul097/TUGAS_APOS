$(document).ready(function () {
   // Ketika Submit pada input
   $("#btn1").click(function () {
       
    var nama = $("#nama").val();
    var jenis = $("#jenis").val();
    var nirm = $("#nirm").val();
    var alamat = $("#alamat").val();


    $("#data1").html(nama);
    $("#data2").html(jenis);
    $("#data3").html(nirm);
    $("#data4").html(alamat);
      window.location.replace("#pageone");
   });
});
