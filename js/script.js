console.log(Math.PI);
var PI = 0;
var a = 1;
var b = 3;

myPi();

function myPi() {
    PI += (4 / a) - (4 / b);
    a = a + 4;
    b = b + 4;

    console.log(PI);
}