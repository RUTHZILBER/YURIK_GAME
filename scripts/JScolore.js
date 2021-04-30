var fred = 0;
var fred1 = 0;
var fyellow1 = 0;
var fblue1 = 0;
var fblue2 = 0;
var fyellow = 0;
var fblue = 0;
function coloring() {
    var fclik = 0;
    if (fred == 0 && fblue == 0 && fyellow == 0) {
        var red = document.getElementById("r");
        red.setAttribute("class", "r");
        var r = document.getElementById("b");
        r.setAttribute("class", "plus_re");
        fred = 1;
        fclik = 1;
    }
    if (fred == 1 && fblue == 0 && fyellow == 0 && fclik == 0) {
        var yellow = document.getElementById("r");
        yellow.removeAttribute("class", "r");
        yellow.setAttribute("class", "y");
        var y = document.getElementById("b");
        y.removeAttribute("class", "plus_re");
        y.setAttribute("class", "plus_ye");
        fred = 0;
        fyellow = 1;
        fclik = 1;
    }
    if (fred == 0 && fblue == 0 && fyellow == 1 && fclik == 0) {
        var blue = document.getElementById("r");
        blue.removeAttribute("class", "y");
        blue.setAttribute("class", "b");
        var b = document.getElementById("b");
        b.removeAttribute("class", "plus_ye");
        b.setAttribute("class", "plus_bl");
        fyellow = 0;
        fclik = 1;
        fblue2 = 1;
    }
}
function coloring2() {
    var fclik = 0;
    if (fred1 == 0 && fblue1 == 0 && fyellow1 == 0) {
        var red = document.getElementById("y");
        red.setAttribute("class", "r");
        var r = document.getElementById("b2");
        //r.removeAttribute("class");
        r.setAttribute("class", "eq_re");
        fred1 = 1;
        fclik = 1;
    }
    if (fred1 == 1 && fblue1 == 0 && fyellow1 == 0 && fclik == 0) {
        var yellow = document.getElementById("y");
        yellow.removeAttribute("class", "r");
        yellow.setAttribute("class", "y");
        var y = document.getElementById("b2");
        //y.removeAttribute("class");
        y.setAttribute("class", "eq_ye");
        fred1 = 0;
        fyellow1 = 1;
        fclik = 1;
    }
    if (fred1 == 0 && fblue1 == 0 && fyellow1 == 1 && fclik == 0) {
        var blue = document.getElementById("y");
        blue.removeAttribute("class", "y");
        blue.setAttribute("class", "b");
        var b = document.getElementById("b2");
        // b.removeAttribute("class");
        b.setAttribute("class", "eq_bl");
        fyellow1 = 0;
        fclik = 1;
        fblue2 = 1;
    }
}
function try1() {
    var sc = document.getElementById("screen");
    sc.removeAttribute("class", "screen");
    sc.classList.add("try");
    var r = document.getElementById("div1");
    var y = document.getElementById("div2");
    var b = document.getElementById("div3");
    r.classList.add("mikum");
    y.classList.add("mikum2");
    b.classList.add("mikum3");
}
function equal() {
    var fcklic2 = 0;
    if (((fred == 1 && fyellow1 == 1) || (fred1 == 1 && fyellow == 1)) && fblue == 0) {
        var result = document.getElementById("b");
        var result2 = document.getElementById("b2");
        result2.removeAttribute("class", "b2");
        result.removeAttribute("class", "eq_re");
        result.setAttribute("class", "orange");
        fcklic2 = 1;
    }
    if (((fred1 == 1 && fblue2 == 1) || (fred == 1 && fblue2 == 1)) && fyellow == 0 && fcklic2 == 0) {
        var result = document.getElementById("b");
        var result2 = document.getElementById("b2");
        result2.removeAttribute("class", "b2");
        result.removeAttribute("class", "eq_re");
        result.setAttribute("class", "grape");
        fcklic2 = 1;
    }
    if (((fyellow1 == 1 && fblue2 == 1) || (fyellow == 1 && fblue2 == 1)) && fred == 0 && fcklic2 == 0) {
        var result = document.getElementById("b");
        var result2 = document.getElementById("b2");
        result2.removeAttribute("class", "b2");
        result.removeAttribute("class", "eq_ye");
        result.setAttribute("class", "green");
        fcklic2 = 1;
    }
}