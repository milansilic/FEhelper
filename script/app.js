let iwW = document.getElementById('iwW'),
    iwH = document.getElementById('iwH'),
    owW = document.getElementById('owW'),
    owH = document.getElementById('owH');

const c2Num1 = document.getElementById('c2_num1'),
    c2Num2 = document.getElementById('c2_num2'),
    c2Num3 = document.getElementById('c2_num3'),
    c2Num4 = document.getElementById('c2_num4'),
    c1Num1 = document.getElementById('c1_num1'),
    c1Num2 = document.getElementById('c1_num2'),
    c1Num3 = document.getElementById('c1_num3'),
    c3Num1 = document.getElementById('c3_num1'),
    c3Num2 = document.getElementById('c3_num2'),
    c3Num3 = document.getElementById('c3_num3'),
    calc1Values = [c1Num1, c1Num2, c1Num3],
    calc2Values = [c2Num1, c2Num2, c2Num3];


// CALC 1
for (const c1Input of calc1Values) {
    c1Input.oninput = () => {
        c1Num3.value = ((c1Num1.value / c1Num2.value) * 100).toFixed(3)
    }
}
c1Num3.onselect = () => navigator.clipboard.writeText(c1Num3.value + 'vw')


// CALC 2
for (const c1Input of calc2Values) {
    c1Input.oninput = () => {
        c2Num4.value = (c2Num2.value * c2Num3.value) / c2Num1.value
    }
}
c2Num4.onselect = () => navigator.clipboard.writeText(c2Num4.value)


// CALC 3
c3Num2.oninput = () => {
    c3Num3.value = c3Num2.value / c3Num1.value;
    if (Math.round(c3Num3.value) == c3Num3.value) {
        c3Num3.value = (c3Num2.value / c3Num1.value).toFixed(0)
    } else {
        c3Num3.value = (c3Num2.value / c3Num1.value).toFixed(3)
    }
}

c3Num3.oninput = () => {
    c3Num2.value = c3Num3.value * c3Num1.value;
    if (Math.round(c3Num2.value) == c3Num2.value) {
        c3Num2.value = (c3Num3.value * c3Num1.value).toFixed(0)
    } else {
        c3Num2.value = (c3Num3.value * c3Num1.value).toFixed(3)
    }
}

c3Num2.onselect = () => navigator.clipboard.writeText(c3Num2.value + 'px')

c3Num3.onselect = () => navigator.clipboard.writeText(c3Num3.value + 'rem')


// get window dimensions
const getWinDim = () => {
    iwW.innerHTML = window.innerWidth;
    iwH.innerHTML = window.innerHeight;
    owW.innerHTML = window.outerWidth;
    owH.innerHTML = window.outerHeight;
}


// MASONERY PARENT HEIGHT CALCULATOR
const main = document.getElementsByTagName('main');
let topics = [...document.getElementsByClassName('topic')];
let topicHeights = 0;

['load', 'resize'].forEach(el => addEventListener(el, () => {
    getWinDim();
    topicHeights = 0;
    for (const tpc of topics) { topicHeights = topicHeights + tpc.offsetHeight; }
    main[0].style.height = (topicHeights / 4.5) + 'px';
}));


// SET SCREEN WIDTH VALUE FOR px to vw calculator
const setScreenWidth = vl => c1Num2.value = vl