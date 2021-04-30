

var monefull = 0;
function check() {
    var list = document.querySelectorAll('.m')
    for (var i = 0; i < list.length; i++) {
        if (list[i].value != "")
            monefull++;
    }
    if (monefull == 5)
        thank();
    else { document.getElementById("erorr").style.display = "block"; monefull = 0; }
    setTimeout(function () { document.getElementById("erorr").style.display = "none"; }, 2000);
}
function mail() {
    document.getElementById("aboutp").style.display = "none";
    document.getElementById("mail").style.display = "block";

}
function thank() {
    document.getElementById("mail").style.display = "none";
    document.getElementById("thankyou").style.display = "block";
    setTimeout(function () { document.getElementById("aboutp").style.display = "block"; }, 4000);
    setTimeout(function () { document.getElementById("thankyou").style.display = "none"; }, 4000);
    monefull = 0;
    var list = document.querySelectorAll('.m')
    for (var i = 0; i < list.length; i++)
        list[i].value = "";
}
