/*

switch (expression) {
    case x :
        // kod blogu
        break;
    case y :
        // kod blogu;
        break;
    case z:
    case t: 
        // kod blogu;
        break;
    default:
        // kod blogu;
}

var i = 1;
if ( i < = 10) {
    // kod blogu
} else if ( i <= 20) {
    // kod blogu
}

switch (i) {
    case 1:
        // kod blogu;
        break;
    case 2: 
    case 3: 
        // kod blogu;
        break;
    default:
        // kod blogu;
}
*/

// default olmadan yazilan bir örnek

// var today = new Date();
// console.log(today);
// today = today.getDay();
// console.log(today);
// console.log(typeof today);
//today = 6;
// 0-6 ; 0: pazar ....6: cumartesi

// strict mode
//console.log( 1 === '1');

// var day;

// switch (today) {
//     case 0 :
//         day = 'pazar';
//         break;
//     case 1 :
//         day = 'pazartesi';
//         break;
//     case 2 :
//         day = 'sali'
//         break;
//     case 3 :
//         day = 'carsamba';
//         break;
//     case 4 :
//         day = 'persembe';
//         break;
//     case 5 :
//         day = 'cuma';
//         break;
//     // case 6 :
//     //     day = 'cumartesi';  
//     default :
//         day = 'cumartesi';  
// }

// console.log(day);

// 'use strict';
// var text;

// // default kullanarak bir örnek
// switch (today) {
//     case 6 :
//         text = 'Today is saturday';
//         break;
//     case 0 :
//         text = 'Today is sunday';
//         break;
//     default :
//         text = 'Haftasonunu iple cekiyorum';
// }
// console.log(text);

// today = 6;

// switch (today) {
//     case 4 :
//     case 5 :
//         text1 = 'yasasin haftasonu yaklasiyor';
//         break;
//     case 0 :
//     case 6 :
//         text1 = 'yuppiii haftasonu geldi :)))';
//         break;
//     default :
//         text1 = 'haftasonuna daha cok var :(((';
// }
// console.log(text1)


// function fiyatAl () {
//     // kod blogu
//     return 
// }


// var fiyatAl = function (meyve) {

//     meyve = meyve.toLowerCase();

//     switch (meyve) {
//         case 'portakal' :
//         case 'elma' :
//             fiyat = 2.50;
//             break;
        
//         case 'muz' :
//         case 'kivi' :
//             fiyat = 3.50;
//             break;

//         case 'kestane' :
//             fiyat = 5.00;
//             break;
        
//         default :
//             fiyat = 0;
//     }
//     return [meyve, fiyat];
// } 



// console.log(fiyatAl('kestane'));
// console.log(fiyatAl('elma'));
// console.log(fiyatAl('muz'));

// console.log(fiyatAl('kiraz'));

// var sonuc = fiyatAl('kiraz');
// sonuc = fiyatAl('kivi');


// switch (sonuc[1]) {
//     case 0 :
//         console.log(`Aradiginiz urun olan ${sonuc[0]} reyonumuzda bulunmamaktadir.`);
//         break;
//     default :
//         console.log(`Aradiginiz urun olan ${sonuc[0]}'un fiyati : ${sonuc[1]} Tl'dir.`);
// }



// spread operatörleri 

// var z = x;
// console.log(z);

// x[0] = 121;
// console.log(x);
// console.log(z);

// z[1] = 5;
// console.log(x);
// console.log(z);


// var t = [...x];  // spread operatörleri olarak isimlendiriliyor.
// console.log(x);
// x[3] = 44;
// console.log(x);
// console.log(t);

// t[4] = 0;
// console.log(t);
// console.log(x);




// ARRAY METHODS

/*

        unshift()               push()    ----> eklemek icin
                [..............]
        shift()                 pop()      ----> cikartmak icin
                    splice()
*/

// push () eklemek 

// var x = [1, 2, 3, 4, 5];
// console.log(x);

// x.push(10);
// console.log(x);

// var y = x.push('istanbul');
// console.log(x);
// console.log(y);  // x array'nin length'ini vermektedir.


// POP() Metodu cikartmak icin 

// var sehirler = ['ankara', 'izmir', 'bursa', 'afyon'];
// sehirler.pop();
// console.log(sehirler);

// var newSehirler = sehirler.pop();
// console.log(newSehirler);
// console.log(sehirler);


// UNSHIFT() bas tarafa eklemek icin

// var arabalar = [ 'bmw', 'opel', 'toyota', 'nissan'];
// console.log(arabalar);
// arabalar.unshift('mercedes');
// console.log(arabalar);

// var newAraba = arabalar.unshift('ford'); // yeni olusan array'in length'ini almak mumkun.
// console.log(arabalar);
// console.log(newAraba);


// SHIFT() Metodu - bas taraftan cikartmak icin

// var isimler = ['ali', 'ayse', 'ahmet', 'naz'];
// console.log(isimler);
// isimler.shift();
// console.log(isimler);

// var newIsim = isimler.shift();
// console.log(isimler);
// console.log(newIsim);



// var meyve = ['muz', 'portakal', 'elma', 'mango'];
// meyve[0] = 'havuc';
// meyve[2] = 'pirasa';
// console.log(meyve);

// meyve[6] = 'kavun';
// //meyve[meyve.length] = 'karpuz';
// console.log(meyve);
// console.log(meyve.length);
// console.log(meyve[4]);
// meyve[meyve.length - 1] = 'ananas';
// console.log(meyve);




// SPLICE() Metodu  araya eleman eklemek ve cikartmak icin

/*

splice( position, silinecek eleman sayisi, yeni elemanlar);

*/

// herhangi bir eleman silmeden yeni eklemeler yapmak
// var meyve = ['muz', 'portakal', 'elma', 'mango'];
// console.log(meyve);
// meyve.splice(2, 0, 'karpuz', 'kavun', 'erik');
// console.log(meyve);

// herhangi bir eleman silerek yeni elemanlar eklemek
// var meyve = ['muz', 'portakal', 'elma', 'mango'];
// console.log(meyve);
// meyve.splice(2, 2, 'karpuz', 'kavun', 'erik');
// console.log(meyve);


// // ekleme yapmadan silmek
// var meyve = ['muz', 'portakal', 'elma', 'mango'];
// console.log(meyve);
// meyve.splice(1, 2);   // portakal ve elma silinecek
// console.log(meyve);


// SLICE() Metodu
// var olan bir array'in bir parcasini kopyalayarak yeni bir array olusturmak
// slice(start, end) end: dahil degil.

// var giysiler = ['pantolon', 'kazak', 'gömlek', 'mont', 'ceket'];

// var newGiysiler = giysiler.slice(2,3);
// var newGiysiler = giysiler.slice(2,4);
// console.log(giysiler);
// console.log(newGiysiler);



// CONCAT() Metodu

// var x = [1, 2, 3, 4];
// var y = [5, 6, 7, 8];

// var z = x + y;
// console.log(z);
// console.log(typeof z);

// var w = x.concat(y);
// console.log(w);
// console.log(typeof w);

// var t = [1,5,8,34].concat(['ali', 'kerim']);
// console.log(t);

// var u = [1, 2, 3].concat(['ankara', 'kazak'], [34, 'hasan']);
// console.log(u);


// join() 
// tostring()

// indexof() index numarasi , -1
// reverse()



// WHILE DO  /  DO WHILE

/*
While Do 

while (true) {           oncelikle true olma sarti cek ediliyor
    // kod blogu         true ise kod blogu icra ediliyor
}



Do - While

do {
    // kod blogu
}
while (true);
*/


// While - Do
/*
var i = 1;
while ( i < 0 ) {
    var text = "Numara " +i;
    console.log(text);
    i++
}
*/

// Do - While
/*
var i = 1;
do {
    var text = "Numara " +i;
    console.log(text);
    i++
}
while ( i < 0 );
*/

var i = 1;

while (i < 10) {
    var text;
    
    if (i === 3 ) {
        i++;
        console.log("3'u atla");
        continue;
    }

    if ( i % 2 === 0 ) {
        text = `The number ${i} is even`;
        console.log(text)
    } else {
        text = `The number ${i} is odd`;
        console.log(text)
    }

    
    if ( i === 7) {
        console.log("7'den sonra devam etme");
        break;
    }
    i++;
}
