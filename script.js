window.onload = function () {
    let x = 90;
    let y = 10;
    let z =-100;
    console.log(arSkaiciauTrysPenkiDesimtKartotinis(90))
    console.log(arSkaiciauTrysPenkiDesimtKartotinis(10))
    console.log(arSkaiciauTrysPenkiDesimtKartotinis(-100))
    

}
function arSkaiciauTrysPenkiDesimtKartotinis(skaicius)

{ if ((skaicius %3===0)&& (skaicius % 5 === 0)&&(skaicius %10 === 0))
    { return true ;
    }
  else 
  {
    return false; 
 }

}