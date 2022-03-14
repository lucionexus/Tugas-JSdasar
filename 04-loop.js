/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for(let number=2 ; number<=100; number++){
    let nambahPrime = true;

for (let i=2; i<= number-1;i++){
    if(number%i===0){
        nambahPrime = false;
        break
    }
}
if (nambahPrime) console.log(number);
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
const apakahPrima = (angka) => {
    let pembagi = 0;
    for(let i = 1; i <= angka; i++){
        if(angka%i == 0){
            pembagi++
        }
    }
if(pembagi == 2){
    console.log("prima")
    } else {
        console.log("bukan prima")
    }
}


apakahPrima(0);
apakahPrima(3);
apakahPrima(50);
apakahPrima(229)


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
const ambilGanjil = (num) => {
    let bagi = 0
    for(let i = 1; i <= num; i++){
        if(num%i == 1){
            bagi++
        }
    }
    if(bagi == 2){
        console.log("ganjil")
    } else {
        console.log("bukan ganjil")
    }
}

ambilGanjil(99);

