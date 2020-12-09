// console.log("test");
var age =3;
console.log(age);

let city ='Ankara';
cityFunction();

function cityFunction() {
    console.log(city);
}
const a=4;
console.log(a);

//Değişken Tipler

//Primitive Types => string bool vs

//Reference Types =>object
 let name ='w'
 let n ='454.00';

 console.log(parseFloat(n))
 console.log(name);

 var numm =String(33);
 console.log(numm);

 let num1=Number('5');
 let num2 =Number('10');

 console.log(Number(num1+num2));

 var date =String(new Date());
 console.log(typeof date);

Operatorler

let value = 2;
const a = 8;
const b = 1;
let c = 6;

// value = a + b; // toplayarak atama => a ve b toplanarak value'ya atanır.
// console.log("toplama işlemi sonucu: " + value);

// value = a - b; // çıkartılarak atama => a dan b çıkarılarak value'ya atanır.
// console.log("çıkarma işlemi sonucu: " + value);

// value = a * b; // çarparak atama => a ve b çarpılarak value'ya atanır.
// console.log("çarpma işlemi sonucu: " + value);

// value = a / b; // bölerek atama => a nın b ye bölümünden kalan value'ya atanır.
// console.log("bölme işlemi sonucu: " + value);

// value = a % b; // *mod alarak atama => a nın b ye göre mod'u alınıp value'ya atanır.
// console.log("mod alma işlemi sonucu: " + value);

// value = c++; // ilk önce c değerini value ya atar daha sonradan c yi  arttırır.
// console.log("sağdan arttırma işleminden sonra c değeri: "+ c);
// console.log("sağdan arttırma işleminden sonra value değeri: "+ value);

// value = ++c; // ilk önce c artar daha sonradan da value'ya atar

// console.log("soldan arttırma işleminden sonra c değeri: "+ c);
// console.log("soldan arttırma işleminden sonra value değeri: "+ value);

//2) Atama operatorleri

value += a; // value =value + a
console.log(value);

value -= a; // value =value-a;
console.log(value);

value *= a; // value =value*a;
console.log(value);

value /= a; //value =value/a;
console.log(value);

value %= a; // value =value%a;
console.log(value);

//3) Karşılaştırma operatorleri
value = a == b; // false (boolean)
value = a === b; // burada hem değer kontrolü yapılır hemde tip  kontrolü yapılır.

value = 5 == "5";
console.log(value);

value = a != b;
console.log(value);

value = a > b;
console.log(value);

value = a < b;
console.log(value);

value = a >= b;
console.log(value);

4) Mantıksal Operatorler

&&(And)
true && true =true;
true && false =false;
false && false =false;
value = a > b && a < 5;
console.log(value);

// || (Or)
//false || true =true;
//false || false =false;
//true ||true =true;

value = a > c || a > 11;
console.log(value);

//(!) (Not)
value =!(a>4);
console.log(value);
//!true =false;

let d =new Date();
let birtday =new  Date(1994,6,15);
console.log(d.getFullYear()-birtday.getFullYear());
//set methods
d.setFullYear(2021);
d.setMonth(4);
d.setSeconds(33);

// get methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMilliseconds())
console.log(typeof d);
let val;
val =10;
console.log(typeof val);
console.log(parseInt('10.5'));
let val2=103.332023;
 console.warn(val2)
console.log(typeof parseInt(val2));
console.warn( val2.toFixed(5))
val =Math.PI;
var val2=2.8;
console.log(Math.floor(val2));
console.log(Math.round(val2));
console.log(Math.ceil(val2));
console.log(val);
console.log(Math.sqrt(100));
console.log(Math.pow(2,4));
console.log(Math.abs(-78));
console.log(Math.random(1).toFixed(1));
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));

var dt  =new Date();
dt.setHours(0,0,0,0);
dt.setMonth(4);
dt.setDate(1);
dt.setFullYear(2019);
console.log(dt)
console.log(dt.setDate(1));
while(dt.getDay()!=0)
{
debugger
 console.log(dt.setDate(dt.getDate()+1))

}
console.log(dt.setDate(dt.getDate()+7))

// while(dt.getDay!=14) {
//  //  dt.setDate(1);
// }
console.log(dt);

var num =15.123456789;
console.log(num.toPrecision(3))
console.log(num.toFixed(3))
console.log(Math.round(num))
console.log(Math.floor(num));
console.log(Math.ceil(num))

var numbers =[1,3,55,667];
console.log(Math.min(1,3,55,667));
console.log(Math.max(1,3,55,667))

var ab=12;
var bc=90;
 var value_ =ab + Math.random()*(bc-ab);
console.log(value_.toFixed());

const firstName ="Serkan";
const lastName ="Yurttapan";
const age =26;
let val_;
// console.log(val);

// console.log(val_ =firstName+' '+lastName);

// val_ +=" kars'ta yaşıyorum";
val_ =firstName.concat(' ',lastName," yas:",age)
// console.log(val_ +=age)
// console.log(val_);
// console.log(val_.toUpperCase())
// console.log(val_.toLocaleLowerCase())
// console.log(val_.lastIndexOf("n"))

console.log(val_.slice(0,5))

var arrayList ="kitap,defter,kalem";
var arrayList1 ="kitap defter kalem";

console.log(arrayList.split(','));
console.log(arrayList1.split(' '));
var url= "http://www.google.com.tr/?hl=tr/Modern Javasript Kursu sıfırdan ileri seviye";

console.log(url.replace(' ','').length)
console.log(url.split(' ').length);
console.log(url.toLocaleLowerCase());
console.log(url.toLocaleUpperCase());
console.log(url.trim());
console.log(url.replace('-',''));
var str ='http://';
console.log(url.slice(str.length));

if(url.startsWith('https://'))
 {
   console.log('Güvenlik sertifikalı url');
}
else {
    console.log('url Güv. sert. yok');
}
console.log(url.indexOf('.com'));
console.log(url.includes);
url =url.replace(/ /g,'-');
console.log(url);

let names =['serkan','melisa','test1','test2'];

// console.log(names);
// console.log(names.length);
// console.log(typeof names);

// console.log(names.length);
// console.log(names[names.length]='test3');
// console.log(names);
// names.push('selaksd');

// names.unshift('sd');
// console.log(names);

// names.shift();
// console.log(names.shift());

// console.log( names.pop());

function call(age) {
    return age>=17?true:false;
}

console.log(call(18));

"Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
let array =['Bmw','Mercedes','Opel','Mazda'];
// console.log(array);
// //
// console.log(array.length);
// //
// console.log(array[array.length-array.length]);
// console.log(array[array.length-1]);
var val2 =array.push('Renault');
console.log(array);
 array.unshift('Toyota');
 console.log(array);
 console.log(array.reverse);

 console.log(array.sort());
 var numbers =[1,2,8,50];
 console.log(numbers);

if (array.indexOf('Opel')!=-1) {
    console.log('yeap')
}

console.log(array.includes('Opel'));

var str ='Chevrolet,Dacia';
var res =str.split(',');
console.log(res);
var resData =res[res.length-1];
var v =resData.slice(0,resData.length-2)
console.log(v);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.

     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan 1999
     studentC : Ahmet Turan 1998

*/
var studentA ="Yiğit Bilgi 2010";
studentA =studentA.replace(/ /g,",");
console.log(studentA);

studentA =studentA.split(',');
console.log(studentA);

var StudentB = "Sena Turan 1999";
StudentB =StudentB.replace(/ /g,",");
console.log(StudentB);

StudentB =StudentB.split(',');
console.log(StudentB);
var  studentC = "Ahmet Turan 1998"
studentC =studentC.replace(/ /g,",");
console.log(studentC);

studentC =studentC.split(',');
console.log(studentC);

 studentA= studentA.concat(StudentB).concat(studentC);
console.log(studentA);

let day;

var dateTime = new Date().getDay();

switch (dateTime) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    day= `Hafta içi ${dateTime}`;
    break;
  case 0:
  case 6:
    day= `Hafta sonu ${dateTime}`;
    break;

}
console.log(day);

let date =new Date("04/20/2016");
let dateNow =new  Date();
let result =dateNow-date.getTime();
console.log(result);

let person = {

    firstName:"Serkan",
    lastName :"Yurttapan",
    age :23,
    hobbies:['tes','test3'],
    address: {
        city:'Kars',
        country:'Turkey'
    }
};

console.log(person);
console.log(typeof person.address);

for (let i = 0; i < 10; i++) {
     console.log(i);

}
i=10;
// while (i) {
//     console.log(i);

//      i--;
// }

do {

i--;
console.log(i);
} while (i);
var value1='\n';
var value2='\n';
for (let i =0; i<1; i++) {

for (let l = 0; l < 10; l++) {

   console.log(value1+='*');
for (let index = 0; index < 5; index++) {
     value2+='*';
     console.log(value2);
}
   value2='\n';
}
}

test();

function test() {
  let numbers = [2, 4, 6, 8, 9];

  let numb = numbers.map(function (m) {
    return m * m;
  });
  console.log(numb);
}
 
console.log(window.navigator);
console.log(document.getElementById('test'));
// window.location.reload();