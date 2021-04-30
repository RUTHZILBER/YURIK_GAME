var flag1 = 0;
var flag2 = 0;
var flag0 = 0;
//הצבת v במקום המתאים בטבלה
function experiment_perform(status_value, place_s1, place_s2, place_s3) {
    choosen = document.getElementsByTagName("input");
    td = document.getElementsByTagName("td");
    for (i = 0; i < choosen.length; i++)
        if (choosen[i].checked == true) {
            if (choosen[i].value == status_value[0].value) {
                setTimeout(function () { document.getElementById("status1").removeAttribute("class", "status1"); }, 10);
                flag0 = 1;
                setTimeout(function () {
                    document.getElementById("status1").setAttribute("class", "status1");
                    for (var j = 0; j < place_s1.length; j++) {
                        td[place_s1[j]].innerHTML = "&radic;";
                        td[place_s1[j]].style.fontFamily = "monospace";
                        td[place_s1[j]].style.fontSize = "xx-large";
                        td[place_s1[j]].setAttribute("class", "draw_background");
                    }
                }, 30);
            }
            if (choosen[i].value == status_value[1].value) {
                setTimeout(function () {document.getElementById("status2").removeAttribute("class", "status2"); },10);
                flag1 = 1;
                setTimeout(function () {
                    document.getElementById("status2").setAttribute("class", "status2");
                    for (var j = 0; j < place_s2.length; j++) {
                        td[place_s2[j]].innerHTML = "&radic;";
                        td[place_s2[j]].style.fontFamily = "monospace";
                        td[place_s2[j]].style.fontSize = "xx-large";
                        td[place_s2[j]].setAttribute("class", "draw_background");
                    }
                }, 30);
            }
            if (choosen[i].value == status_value[2].value) {
                setTimeout(function () { document.getElementById("status3").removeAttribute("class", "status3"); }, 10);
                flag2 = 1;
                setTimeout(function () {
                    document.getElementById("status3").setAttribute("class", "status3");
                    for (var j = 0; j < place_s3.length; j++) {
                        td[place_s3[j]].innerHTML = "&radic;";
                        td[place_s3[j]].style.fontFamily = "monospace";
                        td[place_s3[j]].style.fontSize = "xx-large";
                        td[place_s3[j]].setAttribute("class", "draw_background");
                    }
                }, 30);
            }
        }
    if (flag0 && flag1 && flag2)
        document.getElementById("buttonGame").disabled = false;

}
function experiment() {
    status_value = [];
    status_value = document.getElementsByName("status");
    place_s1 = [];
    place_s2 = [];
    place_s3 = [];
    if (document.getElementsByTagName("body")[0].id == "yeast") {
        place_s1[0] = 5;
        place_s2[0] = 10;
        place_s3[0] = 15;
    }
    if (document.getElementsByTagName("body")[0].id == "metal") {
        place_s1[0] = 5;
        place_s2[0] = 10;
        place_s3[0] = 15;
    }
    if (document.getElementsByTagName("body")[0].id == "plant") {
        place_s1[0] = 5;
        place_s2[0] = 9; place_s2[1] = 10;
        place_s3[0] = 13; place_s3[1] = 14; place_s3[2] = 15;

    }
    if (document.getElementsByTagName("body")[0].id == "heart") {
        place_s1[0] = 5;
        place_s2[0] = 10;
        place_s3[0] = 15;
    }
    experiment_perform(status_value, place_s1, place_s2, place_s3);

}
