// var one = document.getElementById("1");
// var two = document.getElementById("2");
// var three = document.getElementById("3");
// var four = document.getElementById("4");
// var five = document.getElementById("5");
// var six = document.getElementById("6");
// var seven = document.getElementById("7");
// var eight = document.getElementById("8");
// var nine = document.getElementById("9");
// var zero = document.getElementById("0");
// var result = document.getElementById("result")

function digit(x) {
    result.innerHTML += x; 
}
function ce() {
    result.innerHTML = null;
}

function eq() {
    result.innerHTML = eval(result.innerHTML);
}
function sin() {
    if (Number(result.innerHTML) == 30) {
        result.innerHTML = Math.ceil(Math.sin(result.innerHTML * Math.PI/180))/2;
    }
    else {
    result.innerHTML = Math.sin(result.innerHTML * Math.PI/180);
    }
}

function cos() {
    if (result.innerHTML == 60) {
        result.innerHTML = Math.ceil(Math.cos(result.innerHTML * Math.PI/180)) / 2;
    }
    else {
        result.innerHTML = Math.cos(result.innerHTML * Math.PI/180)
    }
}

function tan() {
    result.innerHTML = Math.tan(result.innerHTML * Math.PI/180)
}

function log() {
    result.innerHTML = Math.log10(result.innerHTML)
}



function dc() {
    result.innerHTML = result.innerHTML.slice(0 ,-1)
}

function sqrt() {
    result.innerHTML = Math.sqrt(result.innerHTML)
}

function pi() {
    result.innerHTML += Math.PI
}

function rp() {
    result.innerHTML = Math.pow(result.innerHTML, 2)
}
