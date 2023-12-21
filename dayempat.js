// Function

//f(x) = x + 1
// dalam funtion harus "Return" sesuatu
//function hello(){
  //  let data = 1 + 2
    //console.log(data);
//}

// parameter

// function hello(a,b){
//     console.log=(a);
//     console.log=(b);
//     let data= a + b 
//     //console.log(data);

//     return data
// }

// hello(2,3)
// console.log(hello());

// Cek Ongkir
// user memasukan wilayahnya
// Jawa Barat 10000
// Jawa Timur 15000
// Output jumlah ongkir untuk wilayah 10000

// function cekongkir(wilayah){
//     let hasil
//     if(wilayah === "Jawa barat"){
//         //console.log(`jumlah ongkir untuk ${wilayah} 10000`)
//         hasil = `jumlah ongkir untuk ${wilayah} 10000`
    
//     } else{
//         //console.log(`jumlah ongkir untuk ${wilayah} 15000`)
//         hasil = `jumlah ongkir untuk ${wilayah} 15000`


//     }

//     return hasil
// }

// console.log(cekongkir("jawa timur"))
// console.log(cekongkir("jawa barat"))

// function sayhai(a,b) {
//     return a + b
// }

// console.log(sayhai("hai","gus"))


// harus lihat parameter yang digunakan string atau interger

// buatlah function menghitung diskon
// jika hari jumat diskon potongan 10000
// data produk
// cara pertama

//function CekDiskon(hari){
//     let diskon = 0
//     if (hari === "jumat") {
//         diskon = "10000"

//     }

// Cara kedua
    //let diskon = hari === "jumat" ? 10000 : 0
    //return diskon
//}

//console.log(CekDiskon("jumat"))

// contoh kasus pembelian produk
// user bayar dengan uang tunai 50000
// diskon jumat berkah
// 2 params untuk menyimpan hari dan uang si pembeli

// output
// product
// sub total
// diskon
// kembali

let product = [
    {
        nama : "ultra Milk",
        harga : 6900
        
    },
    {
        nama : "Chitato",
        harga : 11500

    },
]

function hitungtransaksi(hari, tunai){
    let transaksi = {
        product: product,
        subtotal: product[0].harga + product[1].harga,
        diskon:0,
        total:0,
        tunai: tunai,
        kembali: 0
    }
    
    if(hari === "jumat"){
        transaksi.diskon = 10000
        
    }
    transaksi.total = transaksi.subtotal - transaksi.diskon
    transaksi.kembali = tunai - transaksi.total

    return transaksi;

}

//console.log(hitungtransaksi("jumat", 50000));

// function declaration
console.log(hallo()) // bisa dipanggil diatas atau bawah
function hallo(){
    return"hello"
}

//function expression
const sayhey= function (){
    return "Hello world"

}
console.log(sayhey());// panggil tidak bisa sebelum buat function

// arrow function
const tambah = (a, b) => a + b
console.log(tambah (2, 3));

const jumlahkan = () => {
    let hasil = b - c
    return hasil

}

// Jika Nilai lebih dari 80 Nilainya A
// Jika Nilai lebih dari 70-39 Nilainya B
// Jika Nilai lebih dari 60-69 Nilainya C
// Jika Nilai lebih dari 50-59 Nilainya D
// Jika Nilai = <50 Nilainya E

function PenentuanNilai(nilai){
    if (nilai >= 80) {
        grade = "A";
    } else if (70 >= nilai <= 79) {
        grade = "B";
    } else if (60 >= nilai <= 69) {
        grade = "C";
    } else if (50 >= nilai <= 59) {
        grade = "D";
    } else {
        grade = "E";
    }
    return grade
    // Pemanggilan kembali
}
console.log(PenentuanNilai(80));

// challange
