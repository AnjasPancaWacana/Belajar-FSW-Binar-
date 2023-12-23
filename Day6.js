//1. Variable VAR LET CONST
//deklarasi variabel
// VAR, LET, CONST

// //bisa dideklarasi ulang
// var nama = "Anjas";
// console.log(nama);
// var nama = "Panca";
// console.log(nama);
// nama= "Wacana"
// console.log(nama);

// //tidak bisa dideklarasi diulang
// let usia = "55 Tahun";
// usia = "16 Tahun";
// console.log(usia);

// // value tetep tidak bisa diubah
// const alamat = "Tangerang";
// alamat = "Depok";
// console.log(alamat);


//2. tipe data string, number, boolean

//Data primitif:Jenis data yang sudah disediakan langsung oleh javascript dan bisa langsung merepresentasikan nilai
//String : tipe data yang menyimpan karakter sebagai nilai
//let string1= "Selamat Pagi";
//let string2= 'gimana Kabarnya';
//let string3= `baik ${string1}
// contoh string
let namalengkap= "Anjas Panca"
let alamat= "Tangerang"

console.log("Nama Saya", namalengkap ,"Tempat tingal di", alamat)

// Number= number integer (angka bilangan bulat) dan floating number (angka bilangan desimal)
//let umursaya= 24;

// Boolean
// Tipe data boolean ini hanya memiliki dua nilai, yaitu true dan false
let siswaBinar= true;
console.log(siswaBinar);
// atau false

// Null
// //tidak ada  sama sekali
let namaHP= null
console.log(namaHP);

// Undefined
// //penampung atau variabel ada tapi tidak memiliki data
// let nama;
// console.log(nama)


//3. manipulasi string, contoh replace, subtsring
//replaceAll()
 let data = "saya Mendukung Arsenal"
 let hasil = data.replace("Arsenal","Liverpool")
 console.log(hasil);

// substring()
 let data2 = "Liverpool Menang"
 let hasil2 = data2.substring(7, 10)
 console.log(hasil2);

// toLowerCase()/toUpperCase()
 let data3 = "Saya suka Liverpool"
 let hasilKecil = data3.toLowerCase();
 let hasilBesar = data3.toUpperCase();
 console.log(hasilKecil);
 console.log(hasilBesar);
 


//4 kondisi menggunakan if else dan tenary operator ? :
//if and else
// cek ongkir
// user akan memasukan nama wilayahnya
// Tangerang 10000
// Jakarta 15000
// output jumlah ongkir untuk wilayah 10000

// function cekOngkir(wilayah){
//     let hasil
//     if(wilayah === "Tangerang"){
//         // console.log(`jumlah ongkir untuk ${wilayah} 10000`);
//         hasil = `jumlah ongkir untuk ${wilayah} 10000`
//     } else {
//         // console.log(`jumlah ongkir untuk ${wilayah} 15000`);
//         hasil = `jumlah ongkir untuk ${wilayah} 15000`
    
//     }

//     return hasil
// }

// ternary operator
// // jika nilai lebih dari 80 nilainya A
// // jika nilai lebih dari 70 - 79 nilainya B
// // jika nilai lebih dari 60 - 69 nilainya C
// // jika nilai lebih dari 50 - 59 nilainya D
// // nilainya E

// function hasilNilai(nilai){
//     if (nilai >= 80) {
//         grade = "A";
//     } else if (70 >= nilai <= 79) {
//         grade = "B";
//     } else if (60 >= nilai <= 69) {
//         grade = "C";
//     } else if (50 >= nilai <= 59) {
//         grade = "D";
//     } else {
//         grade = "E";
//     }
    // let grade = nilai >= 80 ? "A" : 70 >= nilai <= 79 ? "B" : 60 >= nilai <= 69 ? "C" : 50 >= nilai <= 59 ? "D" : "E" 

//    return grade
//}
//console.log(hasilNilai(72));

//5.object
//Object = tipe data yang menyimpan koleksi tipe data yang lain.
// terdapat key dan value -> contoh nama:"Anjas" (nama= key) (Anjas= value)
let dataDiri= {
    namaAsli: "Anjas Panca",
    kota: "Tangerang",
    hobi: "Sepakbola" 
}

   console.log(dataDiri)
   console.log(dataDiri.hobi)
   
//6.array
//Array= data yang menyimpan kumpulan tipe data primitif
//penyimpanan datanya dipetakan dalam INDEX dimulai dari 0
let sepatu1= "Puma"
let sepatu2= "Adidas"
let sepatu3= "Nike"
let sepatu= ["Puma","Adidas","Nike"]
console.log(sepatu);

// // array disimpan didalam index atau valeu
// // dimulai dari nol
sepatu[0]= "Puma"
sepatu.push(...["Warrior","Kappa"])


// //7.array Object
// //Bisa Menyimpan data dengan berbagai properti dalam 1 variabel
let dataOrang= [
    {
        nama:"Anjas", 
        Hobi:"sepakbola"
    },
    {
        nama: "Aqil", 
        Hobi: "sepakbola"
    }
]

console.log(dataOrang);

//8 Function
function dataAlamat (alamatAsal){
    let namaOrang;

    
    if(alamatAsal === "Tangerang"){
        NamaOrang = "Anjas";
    }
    else if(NamaOrang === "Jakarta"){
        Namaorang = "Aqil"
    }
    else if(NamaOrang === "Bandung"){
        Namaorang = "Asti"
    }
     return NamaOrang
}
console.log(dataAlamat("Tangerang"));



function hello(){
    return "hello"
}

console.log(hello)


//function expression
const sayhai = function(){
    return "Hallo guys"

}
console.log(sayhai());

// Arrow Function
const hayName= () => "Hallo Name" //jika hanya meretrun satu variabel/data

console.log(hayName());

// jika lebih dari 1 data atau banyak data
const hitungData = () => {
    let a = 10
    let b = 20
    let hasil = a + b
    return hasil
}
console.log(hitungData())

//currying
function hitungVolume (p,l,t) {
    return p*l*t

}

console.log(hitungVolume(10,5,5));

function hitungVolume2(p){
    return function(l){
        return function (t){
            return p*l*t
        }
    }
}

console.log(hitungVolume2(10)(10)(10));