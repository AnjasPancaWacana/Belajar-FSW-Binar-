// waktu
// console.log(new Date())

//Sabtu, 16 Desember 2023 19:30
// 16-12-2023
// 12/16/2023

let waktu = new Date();
let tahun = waktu.getFullYear();
// console.log(tahun);
let bulan = waktu.getMonth();
// console.log(bulan)
let tanggal = waktu.getDate();
// console.log(tanggal);
let hari = waktu.getDay();

// console.log(hari);
let jam= waktu.getHours();
// console.log(jam);
let menit= waktu.getMinutes();
// console.log(menit);

// 16 Desemner 2023

let dataBulan= ['januari','Febuari','Maret','Apr','Mei','Jun','Jul','Agus','Sept','Okt','Nov','Desember']
let dataHari= ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
let hasilWaktu= `${dataHari[hari]}, ${tanggal}, ${dataBulan[bulan]} ${tahun} ${jam}:${menit}`
console.log(hasilWaktu);

console.log(dataBulan(bulan))


// Wajib tau Fundamental 
//W3school
//Hackerank
//letcode

// HTML, CSS, JS
// Frontend -> HTML, CSS, JS, Framework, js ->Reac Js, NexJs, Vue Js, Angular
// Backend ->  Golang, PHP, JAVA, Javascript
// Fullstack -> Frontend+Backend
