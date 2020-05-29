// moduled querySelector
function qs(selectEl){
    return document.querySelector(selectEl);
}

// select RGB inputs
let red = qs('#red'), green = qs('#green'), blue = qs('#blue'), bright = qs('#bright'); 
// selet num inputs
let redNumVal = qs('#redNum'), greenNumVal = qs('#greenNum'), blueNumVal = qs('#blueNum'), brightNumVal = qs('#brightNum');
// select Color Display
let colorDisplay = qs('#ad3d-colordisplay');
// select labels
let redLbl = qs('label[for=red]'), greenLbl = qs('label[for=green]'), blueLbl = qs('label[for=blue]'), brightLbl = qs('label[for=bright]');

// init display Colors
displayColors();
// init Color Vals
colorNumrVals();
// init ColorSliderVals
initSliderColors();
// init Change Range Val
changeRangeNumVal();
// init Colors controls
colorSliders();

// display colors
function displayColors(){
    colorDisplay.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value}, ${bright.value})`; 
	// document.getElementById("curcolor").innerHTML = "#" + rgbToHex([red.value, green.value, blue.value]);	
}

// initial color val numbers when DOM is loaded 
function colorNumrVals(){
    redNumVal.value = red.value;
    greenNumVal.value = green.value;
    blueNumVal.value = blue.value;
	brightNumVal.value = bright.value;
}

// initial colors when DOM is loaded
function initSliderColors(){
    // label bg colors
    redLbl.style.background = `rgb(${red.value},0,0)`;
    greenLbl.style.background = `rgb(0,${green.value},0)`;
    blueLbl.style.background = `rgb(0,0,${blue.value})`;
	brightLbl.style.background = `rgb(${bright.value},${bright.value},${bright.value})`;
    var icon = brightLbl.childNodes[0];
    if (bright.value >= 180) {
        icon.className = icon.className.replace(/\bmd-light\b/g, "md-dark");
    } else {
        icon.className = icon.className.replace(/\bmd-dark\b/g, "md-light");
    }

    // slider bg colors
    red.style.background = `rgb(${red.value},0,0)`;
    green.style.background = `rgb(0,${green.value},0)`;
    blue.style.background = `rgb(0,0,${blue.value})`;
	bright.style.background = `rgb(${bright.value},${bright.value},${bright.value})`;
}

// change range values by number input
function changeRangeNumVal(){
    redNumVal.addEventListener('change', ()=>{
        // make sure numbers are entered between 0 to 255
        if(redNumVal.value > 255){
            alert('cannot enter numbers greater than 255');
            redNumVal.value = red.value;
        } else if(redNumVal.value < 0) {
            alert('cannot enter numbers less than 0');  
            redNumVal.value = red.value;            
        } else {
            red.value = redNumVal.value;
            initSliderColors();
            displayColors();
        }
    });
    greenNumVal.addEventListener('change', ()=>{
        // make sure numbers are entered between 0 to 255
        if(greenNumVal.value > 255){
            alert('cannot enter numbers greater than 255');
            greenNumVal.value = green.value;
        } else if(greenNumVal.value < 0) {
            alert('cannot enter numbers less than 0');  
            greenNumVal.value = green.value;            
        } else {
            green.value = greenNumVal.value;
            initSliderColors();
            displayColors();
        }
    });

    blueNumVal.addEventListener('change', ()=>{
        // make sure numbers are entered between 0 to 255
        if (blueNumVal.value > 255) {
            alert('cannot enter numbers greater than 255');
            blueNumVal.value = blue.value;
        } else if (blueNumVal.value < 0) {
            alert('cannot enter numbers less than 0');
            blueNumVal.value = blue.value;
        } else {
            blue.value = blueNumVal.value;
            initSliderColors();
            displayColors();
        }
    });
	
	brightNumVal.addEventListener('change', ()=>{
        // make sure numbers are entered between 0 to 255
        if (brightNumVal.value > 255) {
            alert('cannot enter numbers greater than 255');
            brightNumVal.value = bright.value;
        } else if (brightNumVal.value < 0) {
            alert('cannot enter numbers less than 0');
            brightNumVal.value = bright.value;
        } else {
            bright.value = brightNumVal.value;
            initSliderColors();
            displayColors();
        }
    });
}

// Color Sliders controls
function colorSliders(){
    red.addEventListener('input', () => {
        displayColors();
        initSliderColors();
        changeRangeNumVal();
        colorNumrVals();
    });

    green.addEventListener('input', () => {
        displayColors();
        initSliderColors();
        changeRangeNumVal();
        colorNumrVals();
    });

    blue.addEventListener('input', () => {
        displayColors();
        initSliderColors();
        changeRangeNumVal();
        colorNumrVals();
    });
	
	bright.addEventListener('input', () => {
        displayColors();
        initSliderColors();
        changeRangeNumVal();
        colorNumrVals();
    });
}
