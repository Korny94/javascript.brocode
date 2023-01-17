                    // HEADER

let headerBGC;

let headerBGI;

document.getElementById("headerBGC").oninput = function() {

    headerBGC = document.getElementById("headerBGC").value;
    document.getElementById("header").style.backgroundColor = headerBGC;
    document.getElementById("header").style.borderWidth = range + "px";
}

let headerBorderColor;

document.getElementById("headerBorderColor").oninput = function() {

    headerBorderColor = document.getElementById("headerBorderColor").value;
    document.getElementById("header").style.borderColor = headerBorderColor;
    document.getElementById("header").style.borderWidth = range + "px";
}

document.getElementById("headerBorderNone").onclick = function() {

    document.getElementById("header").style.border = "none";
    document.getElementById("header").style.borderColor = headerBorderColor;
    document.getElementById("header").style.borderWidth = range + "px";
}

document.getElementById("headerBorderSolid").onclick = function() {

    document.getElementById("header").style.border = "solid";
    document.getElementById("header").style.borderColor = headerBorderColor;
    document.getElementById("header").style.borderWidth = range + "px";
}

document.getElementById("headerBorderDashed").onclick = function() {

    document.getElementById("header").style.border = "dashed";
    document.getElementById("header").style.borderColor = headerBorderColor;
    document.getElementById("header").style.borderWidth = range + "px";
}

document.getElementById("headerBorderDotted").onclick = function() {

    document.getElementById("header").style.border = "dotted";
    document.getElementById("header").style.borderColor = headerBorderColor;
    document.getElementById("header").style.borderWidth = range + "px";
}

let range;

document.getElementById("headerBorderWidth").onchange = function() {

    range = document.getElementById("headerBorderWidth").value;
    document.getElementById("header").style.borderWidth = range + "px";
}


let height;

document.getElementById("headerHeight").onchange = function() {

    height = document.getElementById("headerHeight").value;
    document.getElementById("header").style.height = height + "vh";
}

