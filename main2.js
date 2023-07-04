function digit(x) {
    result.innerHTML += x; 
}
function ce() {
    result.innerHTML = null;
}

function eq() {
    result.innerHTML = eval(result.innerHTML);
}

function dc() {
    result.innerHTML = result.innerHTML.slice(0 , -1)
}