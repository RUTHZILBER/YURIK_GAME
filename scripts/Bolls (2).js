
//var imagesballsrandoms = [];
var scope = 0;
var IdImages = ["blue1", "blue2", "green1", "green2", "red1", "red2"];
var rnd;
var numBolls = 3;
var ranball;
var lengh = 6;
var i;
var testTubeCard = [[], [], []];
var gameStatus = [["blue", "blue"], ["green", "green"], ["red", "red"]];
var minute;
var second;
var card;
function init() {
    //document.getElementById("mark").innerHTML += '<p class="scope">:סך הנקודות שצברת</p>';
    document.getElementById("nikud").innerHTML = scope;
}
function randomball() {
    var imagesballs = ["blue", "blue", "green", "green", "red", "red"];
    testTubeCard = [[], [], []];
    for (var i = 0; i < 3; i++) {
        var index = Math.floor(Math.random() * imagesballs.length);
        document.getElementById(i + 1).innerHTML = "<img src='../images/" + imagesballs[index] + ".png' class='img'/>" 
        testTubeCard[i][0] = imagesballs[index];
        imagesballs.splice(index, 1);
    }
    for (i = 0; i < 3; i++) {
        var index = Math.floor(Math.random() * imagesballs.length);
        var testTube = Math.floor(Math.random() * 3) + 1;
        document.getElementById(testTube).innerHTML += "<img src='../images/" + imagesballs[index] + ".png' class='img'/>";
        testTubeCard[testTube - 1][testTubeCard[testTube - 1].length] = imagesballs[index];
        imagesballs.splice(index, 1);

    }
    minute = 0;
    second = 35;
    timer();
}
var date = Date();
//==========================drag-drop==========================
var interval;
function timer() {

    interval = setInterval("timer2()", 1000);
}

function timer2() {
    if (minute >= 0 && second >= 0 || minute > 0) {
        if (second > 9)
            document.getElementById("timer").innerHTML = "0" + minute + ":" + second;
        else { document.getElementById("timer").innerHTML = "0" + minute + ":0" + second; }
        second--;
        if (second === -1) {
            minute--;
            second = 59;
        }
    }
    else {
        scope -= 30;
        //document.getElementById("mark").innerHTML = '<p class="scope">:סך הנקודות שצברת</p>';
        document.getElementById("nikud").innerHTML = scope;
        document.getElementsByClassName("delete button")[0].click();
        ClearTestTube();
        ClearTestTubeCard();
        document.querySelectorAll("#kulam")[0].remove();

        clearInterval(interval);
        open();
    }
}

function allowDrop(ev) {

    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var bool;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");//dataה id של האלמנט הנגרר
    var GameTestTube = document.getElementsByClassName("test_tube CanDrop");
    if (Istop(data)) {
        for (var i = 0; i < GameTestTube.length; i++) {
            if (ev.target === GameTestTube[i]) {
                bool = data.includes("blue");
                if (bool == true)
                    var new_data = "blue";
                else
                    if (bool = data.includes("green"))
                        var new_data = "green";
                    else
                        var new_data = "red";
                UpDateGameStatus(ev, data, new_data);
                ev.target.appendChild(document.getElementById(data));
                if (cheakIfGood()) {
                    scope += 30;
                    document.getElementById("nikud").innerHTML = scope;
                    document.getElementById("messege").style.display = 'block';
                    document.getElementById("messege").innerHTML = '<p id="execellent">מצוין</p>'
                    setTimeout(function () {
                        document.getElementById("messege").style.display = 'none';

                        document.getElementsByClassName("like button")[0].click();
                        ClearTestTube();
                        ClearTestTubeCard();
                        clearInterval(interval);
                        randomball();
                    }, 2500)

                }
            }
        }
    }
}
function Istop(data) {
    var corrent_parent = document.getElementById(data).parentElement.id
    var count = document.querySelectorAll("#" + corrent_parent + " img");
    return document.querySelectorAll("#" + corrent_parent + " img")[count.length - 1].id == data;
}
//==========================end-drag-drop==========================
function UpDateGameStatus(ev, data, new_data) {
    var ParentOutId = document.getElementById(data).parentElement.id;
    switch (ParentOutId) {
        case "first_tube":
            gameStatus[0].splice(gameStatus[0].length - 1, 1);
            break;
        case "secoun_tube":
            gameStatus[1].splice(gameStatus[1].length - 1, 1);
            break;
        case "third_tube":
            gameStatus[2].splice(gameStatus[2].length - 1, 1);
            break;

    }
    var ParentEnterId = ev.target.id;
    switch (ParentEnterId) {
        case "first_tube":
            gameStatus[0].push(new_data);
            break;
        case "secoun_tube":
            gameStatus[1].push(new_data);
            break;
        case "third_tube":
            gameStatus[2].push(new_data);
            break;

    }
}
function cheakIfGood() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < testTubeCard[i].length; j++) {
            if (gameStatus[i][j] == undefined)
                return 0;
            if (gameStatus[i][j] != testTubeCard[i][j])
                return 0;
        }
    }
    return 1;
}

function ClearTestTube() {
    var Collection = document.getElementsByClassName("img");
    var length = Collection.length;
    for (var i = 0; i < length; i++) {
        Collection[0].remove();
    }
}
function ClearTestTubeCard() {
    for (var i = 0; i < 3; i++) {
        testTubeCard[i] = null;
    }
}

function AddTesttube() {
    document.getElementById("first").innerHTML += document.getElementById("1").innerHTML +=
        document.getElementById("2").innerHTML += document.getElementById("3").innerHTML;
}
function open() {
    ClearTestTube();
    ClearTestTubeCard();
    clearInterval(interval);
    var x = document.querySelectorAll(".cards-wrapper li")[4];
    card = document.createElement('div');
    card.setAttribute("id", "kulam");
    for (var i = 0; i < 3; i++) {
        var child = document.createElement('div');
        child.setAttribute("class", "test_tube texample");
        child.setAttribute("id", i + 1);

        card.appendChild(child);
    }
    x.appendChild(card);
    randomball();

}
function changeCard() {

    ClearTestTubeCard();
    document.querySelectorAll("#kulam")[0].remove();
    ClearTestTube();
    clearInterval(interval);
    randomball();
}