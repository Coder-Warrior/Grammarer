function LoL(s, answers) {
    let str = '';
    let substr = '';
    let result = null;
    let add = false;
    let m = false;
    if ((s.indexOf('+') < s.indexOf('*') && s.indexOf('+') !== -1) || s.indexOf('*') === -1) {
        result = 0;
    } else if ((s.indexOf('*') < s.indexOf('+') && s.indexOf('+') !== -1) || s.indexOf('+') === -1) {
        result = 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '+') {
            add = true;
        }
        if (add === true && isNaN(str[i]) === false) {
            str += +str[i];
        }
    }

    let num = null;
    let arr = [];
  return result;
  }
  
  console.log(LoL('1*2+5+6*9'));
  console.log(1+2*5*6*9);


let button = document.querySelectorAll('.submit-btn')[0];
button.addEventListener('click', function () {
    document.querySelectorAll('textarea')[0].value = '';
})
