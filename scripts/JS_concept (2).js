var flag = 0;
var card1 = 1;
function turn(event) {

    var _event = event.currentTarget;
    if (_event.childElementCount)
        flag = 1;
    else
        flag = 0;



    event.currentTarget.innerHTML = "";
    event.currentTarget.setAttribute("class", "turn");


    setTimeout(function () {
        if (flag)
            _event.setAttribute("class", "card2");
        else
            _event.removeAttribute("class", "card2");
        switch (_event.id) {
            case "Affected factor":
                _event.innerHTML = "משתנה בהשפעת השינויים בעת ביצוע הניסוי";
                _event.id = "Affected factor_text";

                break;
            case "Affected factor_text":
                _event.innerHTML = "<h1>גורם מושפע</h1>";
                _event.id = "Affected factor";

                break;
            case "factor":
                _event.innerHTML = "מבצע הניסוי משנה אותו באופן מבוקר";
                _event.id = "factor_text";

                break;
            case "factor_text":
                _event.innerHTML = "<h1>גורם משפיע</h1>";
                _event.id = "factor";

                break;
            case "const":
                _event.innerHTML = "כל התנאים בניסוי שאינם משתנים. אם נשנה יותר ממשתנה אחד בכל ניסוי, לא נוכל לדעת מי מהמשתנים הוא זה אשר גרם לתוצאות הנמדדות";
                _event.id = "const_text";

                break;
            case "const_text":
                _event.innerHTML = "<h1>גורם קבוע</h1>";
                _event.id = "const";

                break;
            case "result":
                _event.innerHTML = "תוצאות הניסוי ללא הבעת דעה";
                _event.id = "result_text";

                break;
            case "result_text":
                _event.innerHTML = "<h1>תוצאות</h1>";
                _event.id = "result";

                break;
            case "Conclusions":
                _event.innerHTML = "למידה מתוצאות הניסוי באמצעות ניסוח כלל, כתיבת תשובה לשאלת החקר, כתיבת המלצה או תובנה חדשה";
                _event.id = "Conclusions_text";

                break;
            case "Conclusions_text":
                _event.innerHTML = "<h1>מסקנות</h1>";
                _event.id = "Conclusions";

                break;
            case "question":
                _event.innerHTML = "שאלה המובילה לבחינה, לבדיקה ולעיון מעמיק. אם המטרה היא ללמד השפעה של גורמים אחד על השני באמצעות ניסוי, יש לציין זאת בניסוח השאלה";
                _event.id = "question_text";

                break;

            case "question_text":
                _event.innerHTML = "<h1>שאלת חקר</h1>";
                _event.id = "question";

                break;
        }
        //_event.classList.remove("turn");
    }, 400);
} 
