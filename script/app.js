let calc1Num1 = document.getElementById('calc1_num1');
let calc1Num2 = document.getElementById('calc1_num2');
let calc1Num3 = document.getElementById('calc1_num3');
let calc1Num4 = document.getElementById('calc1_num4');
let calc1Changeables = [calc1Num1, calc1Num2, calc1Num3];

function calc1 (){
    calc1Num4.value = (calc1Num2.value * calc1Num3.value) / calc1Num1.value;
}
calc1();


for (const c1Input of calc1Changeables) {
    c1Input.oninput = ()=> {
        calc1();
    }
}

calc1Num4.onselect = ()=> {
    navigator.clipboard.writeText(calc1Num4.value);
}


let aaa = document.getElementById('aaa');
let bbb = document.getElementById('bbb');
let ccc = document.getElementById('ccc');
let ddd = document.getElementById('ddd');
function mrnjau(){
    aaa.innerHTML = window.innerWidth;
    bbb.innerHTML = window.innerHeight;
    ccc.innerHTML = window.outerWidth;
    ddd.innerHTML = window.outerHeight;
}
mrnjau();

window.onresize = mrnjau;