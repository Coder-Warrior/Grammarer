let form = document.getElementsByTagName('form')[0];


form.addEventListener('submit',function (ele) {
    for (let i = 0; i < form.length-1; i++) {
        if (form[i].value.length < 7) {
           if (document.querySelectorAll('.parent')[0].querySelectorAll('p').length === 0) {
            form.after(document.createElement('p'));
            document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].textContent = 'مينفعش اي حقل يبقا اقل من 7 حروف';
            document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].style.cssText = "color: white; font-weight: bold; text-shadow: 0 0 7px #ddd; width: 100%; text-align: center";
           } else { 
           document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].textContent = 'مينفعش اي حقل يبقا اقل من 7 حروف';
           document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].style.cssText = "color: white; font-weight: bold; text-shadow: 0 0 7px #ddd; text-align: center;";
           }
           ele.preventDefault();
        }
        if (form[i].value.length > 30) {
            if (document.querySelectorAll('.parent')[0].querySelectorAll('p').length === 0) {
             form.after(document.createElement('p'));
             console.log(document.querySelectorAll('.parent')[0].querySelectorAll('p')[0]);
             document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].textContent = 'بتحكي قصة حياتك؟';
             document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].style.cssText = "color: white; font-weight: bold; text-shadow: 0 0 7px #ddd; width: 100%; text-align: center";
            } else { 
            document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].textContent = 'بتحكي قصة حياتك؟';
            document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].style.cssText = "color: white; font-weight: bold; text-shadow: 0 0 7px #ddd; text-align: center;";
            }
            ele.preventDefault();
         }
    }
    for (let i = 0; i < form[0].value.length; i++) {
        if (!(form[0].value.charCodeAt(i) >= 97 && form[0].value.charCodeAt(i) <= 122) && !(form[0].value.charCodeAt(i) >= 65 && form[0].value.charCodeAt(i) <= 90)) {
            if (document.querySelectorAll('.parent')[0].querySelectorAll('p').length === 0) {
                form.after(document.createElement('p'));
                document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].textContent = 'مينفعش تحط حاجات زي: \"\" \' \'\\/ :(){}[];@!#$$%^&*&()';
                document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].style.cssText = "color: white; font-weight: bold; text-shadow: 0 0 7px #ddd; width: 100%; text-align: center";
               } else { 
               document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].textContent = 'مينفعش تحط حاجات زي: \"\" \' \'\\/:(){}[];@!#$$%^&*&()';
               document.querySelectorAll('.parent')[0].querySelectorAll('p')[0].style.cssText = "color: white; font-weight: bold; text-shadow: 0 0 7px #ddd; text-align: center;";
               }
            ele.preventDefault();
        }
    }
})
