window.onfocus = function () { window.location.reload(); };
//הסתרת הידעת
function Hidden() {
    document.getElementById(localStorage.getItem("id_image")).removeAttribute("class", "hidden");
    document.getElementById(localStorage.getItem("id_div")).removeAttribute("class", "show");
}
//הצגת הידעת
function show(id, id_text) {
    document.getElementById(id).setAttribute("class", "hidden");
    document.getElementById(id_text).setAttribute("class", "show");
    localStorage.setItem("id_image", id);
    localStorage.setItem("id_div", id_text);
}
//צביעת הכפתורים של הניסוי
function button_enter() {
    var button = document.querySelectorAll("div>div:last-child");
    var img = [];
    limg = document.querySelectorAll('div > img');
    button[0].style.backgroundColor = "rgb(121, 159, 204)";
    limg[0].src = "back1.jpg";
    button[1].style.backgroundColor = "rgb(251, 218, 92)";
    limg[1].src = "images/shutterstock_518322487.jpg";
    button[2].style.backgroundColor = "#0fa777";
    limg[2].src = "images/back_plant.jpg";
    button[3].style.backgroundColor = "#e64568";
    limg[3].src = "images/sport/backSort.jpg";
    button[4].style.backgroundColor = "#9fae0f";
    button[5].style.backgroundColor = "rgb(232, 129, 5)";

}
//תפריט ההישגים
var i = 2;
var flag = 0;
var flag2 = 0;
var tipesh_open = 0;
function see() {
    if (!flag) {
        flag = 1;
        document.getElementsByTagName("article")[0].style.display = "block";
    }
    else {
        flag = 0;
        document.getElementsByTagName("article")[0].style.display = "none";
        return;
    }
    var arr_info = localStorage.getItem(localStorage.getItem("player"));
    arr_info2 = JSON.parse(arr_info);
    if (arr_info2.length < 3 && !tipesh_open) {
        document.getElementsByTagName("ul")[0].innerHTML += "<br>" + "<p>לא התבצעו ניסויים כלל</p>";
        tipesh_open = 1;
    }
    else {
        flag2 = 1;
        if (!flag2) {
            document.getElementsByTagName("ul")[0].children[1].innerHTML = "";
        }
        if (tipesh_open == 1)
            document.getElementsByTagName("ul")[0].children[1].innerHTML = "";
        for (; i < arr_info2.length; i += 2) {
            if (arr_info2[i])
                document.getElementsByTagName("ul")[0].appendChild(document.createElement("li"));
            switch (arr_info2[i]) {
                case "yeast":
                    document.getElementsByTagName("ul")[0].lastChild.innerHTML = " <bold>השמרים משחקים חם קר</bold>" + " " + "הושלם בציון:" + "<bold>" + arr_info2[i + 1] + "<bold>";
                    break;
                case "metal":
                    document.getElementsByTagName("ul")[0].lastChild.innerHTML = " <bold>מי ידליק את האור</bold> " + "הושלם בציון:" + "<bold>" + arr_info2[i + 1] + "<bold>";
                    break;
                case "plant":
                    document.getElementsByTagName("ul")[0].lastChild.innerHTML = " <bold>אלומת אור לעולם הצומח</bold> " + "הושלם בציון:" + "<bold>" + arr_info2[i + 1] + "<bold>";
                    break;
                case "heart":
                    document.getElementsByTagName("ul")[0].lastChild.innerHTML = " <bold>עניין שובה לב</bold> " + "הושלם בציון:" + "<bold>" + arr_info2[i + 1] + "<bold>";
                    break;

            }
        }
    }
}

