const c2Num1 = document.getElementById('c2_num1'),
      c2Num2 = document.getElementById('c2_num2'),
      c2Num3 = document.getElementById('c2_num3'),
      c2Num4 = document.getElementById('c2_num4'),
      c1Num1 = document.getElementById('c1_num1'),
      c1Num2 = document.getElementById('c1_num2'),
      c1Num3 = document.getElementById('c1_num3');
const calc1Changeables = [c2Num1, c2Num2, c2Num3];
const calc2Changeables = [c1Num1, c1Num2, c1Num3];

for (const c1Input of calc1Changeables) {
    c1Input.oninput = () => {
        c2Num4.value = (c2Num2.value * c2Num3.value) / c2Num1.value;
    }
}

c2Num4.onselect = () => {
    navigator.clipboard.writeText(c2Num4.value);
}

for (const c1Input of calc2Changeables) {
    c1Input.oninput = () => {
        c1Num3.value = ((c1Num1.value / c1Num2.value)*100).toFixed(3);
    }
}

c1Num3.onselect = () => {
    navigator.clipboard.writeText(c1Num3.value + 'vw');
}

let aaa = document.getElementById('aaa');
let bbb = document.getElementById('bbb');
let ccc = document.getElementById('ccc');
let ddd = document.getElementById('ddd');
function mrnjau() {
    aaa.innerHTML = window.innerWidth;
    bbb.innerHTML = window.innerHeight;
    ccc.innerHTML = window.outerWidth;
    ddd.innerHTML = window.outerHeight;
}
mrnjau();

window.onresize = mrnjau;

// MASONERY PARENT HEIGHT CALCULATOR
const main = document.getElementsByTagName('main');
let topics = [...document.getElementsByClassName('topic')];
let topicHeights = 0;

['load', 'resize'].forEach(el => addEventListener(el, () => {
    topicHeights = 0;
    for (const tpc of topics) { topicHeights = topicHeights + tpc.offsetHeight; }
    main[0].style.height = (topicHeights / 4.34) + 'px';
}));

// SET SCREEN WIDTH FOR px to vw calculator
const setScreenWidth = vl => c1Num2.value = vl