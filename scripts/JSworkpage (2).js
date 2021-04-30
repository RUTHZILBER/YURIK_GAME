//פונקציה ראשית לבדיקת נכונות החלק הראשון בדף
function check(list) {
    select = document.getElementsByTagName("select");
    feedback = document.getElementsByClassName("feedback");
    flag = 0;
    two = 0;
    for (i = 0; i < select.length; i++)
        if (select[i].value != list[i]) {
            if (i < 2) {             
                feedback[i].innerHTML = "&Chi;";
                feedback[i].style.color = "red";
                select[i].style.backgroundColor = "#ff8787"
            }
            else {                
                feedback[2].innerHTML = "&Chi;";
                feedback[2].style.color = "red";
                select[i].style.backgroundColor = "#ff8787"
                two = 1
            }
            flag = 1;
        }
        else
            if (i < 2) {              
                feedback[i].innerHTML = "&radic;";
                feedback[i].style.color = "#06ec06";
                select[i].style.backgroundColor = "white";
            }

            else {
                if (!two) {
                    feedback[2].innerHTML = "&radic;";
                    feedback[2].style.color = "#06ec06";
                }
                else {
                    feedback[2].style.color = "red";
                }
                select[i].style.backgroundColor = "white";            
            }

    return flag;

}
//שליחה של החלק הראשון של כל ניסוי לפונקציה הראשית
function check_part_1() {
    var list = [];
    if (document.getElementsByTagName("body")[0].id == "yeast")
        list = ["טמפרטורה", "קצב תסיסת השמרים", "כמות השמרים", "כמות הסוכר", "כמות המים"];
    if (document.getElementsByTagName("body")[0].id == "metal")
        list = ["סוג המתכת", "מידת הולכת החשמל", "אורך המתכת", "עובי המתכת", "עוצמת הזרם"];
    if (document.getElementsByTagName("body")[0].id == "plant")
        list = ["עוצמת האור", "התפתחות הצמח", "סוג הצמח", "כמות המים", "כמות הדשן"];
    if (document.getElementsByTagName("body")[0].id == "heart")
        list = ["סוג הפעילות", "קצב פעימות הלב", "גיל", "מזג האויר", "משך זמן הפעילות"];
    flag = check(list);
    var arr_input = document.getElementsByTagName("input")
    if (!flag) {
        for (var i = 0; i < arr_input.length; i++)
            arr_input[i].disabled = false;
        document.getElementsByTagName("audio")[0].play();
    }
}
//הפונקציה ששמה טבלה בLOCAOL STRAGE
//function table() {
//    var table = document.getElementsByTagName("td");
//    var arr = [];
//    for (var i = 0; i < table.length; i++) {
//        arr[i] = table[i].innerHTML;
//    }
//    var tab = JSON.stringify(arr);
//    localStorage.setItem("table", tab);

//}
//הצגת טקסט לפני תחילת הניסוי
function story() {
    document.getElementById("story").style.display = "block";
    if (localStorage.getItem("present_experiment") == "yeast")
        document.getElementById("story").innerHTML += "ביום חורף קר וגשום בקש דן מאמא מאפה תנור.<br> אמא במהירות בצק הכינה והמתינה לראות את הבצק מהר תופח.<br> אך הבצק לא כל כך שיתף פעולה ואת אמא ואת דן עכב זמן רב.<br> דן נזכר ביום אחר, שמשי וחמים, בו הבצק תפח בלי עיכובים.<br> דן מיהר לקרוא את המתכון וגילה בו את השמרים האחראים לכל! מיד ניסח שאל חקר והתחיל בתכנון הניסוי <br><br><mark><br>עזרו לדן לבצע את הניסוי ולהסיק מסקנות לתועלת מאפה התנור!</mark>";
    if (localStorage.getItem("present_experiment") == "metal")
        document.getElementById("story").innerHTML += "ליאור יוצא לטיול עם ילדי כיתתו.<br> בחלק מהמסלול יזחלו בתוך מחילות מסתור חשוכות ולשם כך עליהם להצטייד בפנס חשמלי.<br> ליאור מעוניין בפנס קטן שלא יפריע לו בזחילה אך עם עוצמת אור חזקה במיוחד.<br>אבא של ליאור אמר: תלוי מאיזו מתכת עשויים חוטי החשמל!<br><mark><br><br> עזרו לליאור לבצע את הניסוי, שיוביל אותו לבחירת המתכת הטובה ביותר בהולכת החשמל על מנת להשיג עוצמת אור גבוהה במיוחד!</mark>";
    if (localStorage.getItem("present_experiment") == "plant")
        document.getElementById("story").innerHTML += "משפחת אורן עברה לדירת גן מרווחת עם חצר גדולה ויפה.<br> הם מעונינים לטפח בה גינה לתפארת.<br>לשם כך רכשו צמחי נוי יקרים שיחים, פרחים ועצים, ועליהם לתכנן את מיקומם בגינה.<br><br><br> <mark>עזרו למשפחת אורן ללמוד על אחד הגורמים המשפיעים על התפתחות  הצמח על מנת להשיג תוצאות מצוניות בשטח</mark>";
    if (localStorage.getItem("present_experiment") == "heart")
        document.getElementById("story").innerHTML += "גברת לב הגיעה לבקר את חברתה הגרה בקומה שלישית ללא מעלית.<br> ובין מדרגה למדרגה נעצרה מתנשפת ומזיעה.<br>היא התפלאה כיצד חברתה עולה את כל המדרגות יום יום ללא קושי.<br><br><br><mark>בצעו את הניסוי ותכולו להסביר לגברת לב את ההבדל בינה לבין חברתה<mark>.";
}
//העלמת הטקסט ואפשור התחלת הניסוי
function go() {
    document.getElementById("story").style.display = "none";
    var arr_input = document.getElementsByTagName("input");
    for (var i = 0; i < arr_input.length; i++) {
        arr_input[i].disabled = true;
    }
    //document.getElementById("buttonGame").disabled = true;
}