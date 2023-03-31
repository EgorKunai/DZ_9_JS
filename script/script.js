// Второе задание
console.log ('ВТОРОЕ ЗАДАНИЕ');
a1 = 5 % 3;
a2 = 3 % 5;
a3 = '5' + 3;
a4 = '5'- 3;
a5 = 75 + 'кг';
a6 = 785 * 653;
a7 = 100 / 25;
a8 = 0 * 0;
a9 = 0 / 2;
a10 = 89 / 0;
a11 = 98 + 2;
a12 = 5 - 98;
a13 = (8 + 56 * 4) / 5;
a14 = (9 - 12) * 7 / (5 + 2);
a15 = +"123";
a16 = 1 || 0;
a17 = false || true;
a18 = true > 0 ;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
console.log(a14);
console.log(a15);
console.log(a16);
console.log(a17);
console.log(a18);

/*console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);
console.log(typeof a5);
console.log(typeof a6);
console.log(typeof a7);
console.log(typeof a8);
console.log(typeof a9);
console.log(typeof a10);
console.log(typeof a11);
console.log(typeof a12);
console.log(typeof a13);
console.log(typeof a14);
console.log(typeof a15);
console.log(typeof a16);
console.log(typeof a17);
console.log(typeof a18); */

// Четвертое задание
console.log('ЧЕТВЕРТОЕ ЗАДАНИЕ');

let  h = 10;
VCilindra = Math.PI * Math.pow((a7/2) , 2)* h;
console.log('Объем данного цилиндра с высотой ',h,'м','и диаметром',a7,'м','будет равен', VCilindra ,'куб.м ' );

// Третье задание
console.log('ТРЕТЬЕ ЗАДАНИЕ');
let width=10  ,  height= 23;
SPryam = width * height ;
console.log('Площадь данного прямоугольника c высотой',height,'см','и шириной',width,'см',
    'будет равна', SPryam ,'кв.см ');

// Пятое задание
console.log('ПЯТОЕ ЗАДАНИЕ');
let r= 5;
Skruga = Math.PI * Math.pow(r,2);
console.log('Площадь данного круга c радиусом ',r,'см','будет равна', Skruga ,'кв.см ') ;

// Шестое задание
console.log('ШЕСТОЕ ЗАДАНИЕ');
h = 10;
let a = 5 , b = 7;
Strap = ((a + b)/2)*h ;
console.log('Площадь данной трапеции с основаниями',a,'см','и',b,'см',',и высотой',h,'см',
    'будет равна', Strap ,'кв.см ') ;

// Седьмое задание
console.log('СЕДЬМОЕ ЗАДАНИЕ');
let S =2000000 , p= 10 , years = 5;
Pereplata = S*(p/100)*years;
console.log('При размер ипотечного кредита',S,'рублей','и процетной ставке',p,'%',
    'на срок',years,'лет',',значение переплаты будет равно',Pereplata,'рублей');

// Восьмое задание
console.log('ВОСЬМОЕ ЗАДАНИЕ');
a = 8;
b = 3;
let x ;
console.log('Уравнение 1 : a+2*(x-b)=16');
x = (16 - a)/2 + b;
console.log('В данном уравнении x будет равен', x);

console.log('Уравнение 2 : b(x+15)=a+6x');
x = (a - 15*b)/(b - 6);
console.log('В данном уравнении x будет равен', x);

console.log('Уравнение 3 : x+2x+ax+bx=23780');
x = 23780/(1 + 2 + a + b);
console.log('В данном уравнении x будет равен', x);