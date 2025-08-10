const name_input = document.querySelector(".user-name");
const email_input = document.querySelector(".user-email");
const pass_input = document.querySelector(".user-pass");
const date_show = document.querySelector(".date_show");
const day_input = document.querySelector(".date_day");
const month_input = document.querySelector(".date_month");
const year_input = document.querySelector(".date_year");
const submit_btn = document.querySelector(".submit_btn");
const form = document.querySelector(".main_form");
//styles for focusing in an input
function inputHandlerFocus(lable_className, new_lable_className) {
    const lable = document.querySelector(lable_className);
    if (!lable.classList.contains(new_lable_className)) {
        lable.classList.add(new_lable_className);
    }


}
function inputHandlerUnfocus(lable_className, new_lable_className, element) {
    const lable = document.querySelector(lable_className);
    console.log("worked");

    if (lable.classList.contains(new_lable_className) && element.value == "") {
        lable.classList.remove(new_lable_className);
    }
}


//showing the input date
function dateShow() {

    if (day_input.value != "" && month_input.value != "" && year_input.value != "") {
        date_show.textContent = `${month_input.value}/${day_input.value}/${year_input.value}`;
    }

}//validation for dates
const yearHandler = (event) => {
    const year = year_input.value;
    if (year >= 1925 && year <= 2025) {
        if (year_input.classList.contains("input_wrong"))
            year_input.classList.remove("input_wrong");
        dateShow();
    }
    else {
        year_input.classList.add("input_wrong");
        if (year == "")
            year_input.classList.remove("input_wrong");
    }

}
const monthHandler = (event) => {
    const month = month_input.value;
    if (month >= 1 && month <= 12) {
        if (month_input.classList.contains("input_wrong"))
            month_input.classList.remove("input_wrong");
        dateShow();
    }
    else {
        month_input.classList.add("input_wrong");
        if (month == "")
            month_input.classList.remove("input_wrong");
    }
}
const dayHandler = (event) => {
    const day = day_input.value;
    if (day >= 1 && day <= 31) {
        if (day_input.classList.contains("input_wrong"))
            day_input.classList.remove("input_wrong");
        dateShow();
    }
    else {
        day_input.classList.add("input_wrong");
        if (day == "")
            day_input.classList.remove("input_wrong");
    }
}


function formHandler() {
    console.log("clicked");
    const name_lable = document.querySelector(".name_lable");
    const email_lable = document.querySelector(".email_lable");
    const pass_lable = document.querySelector(".pass_lable");

    if (name_input.value == "") {
        errorInput(name_input, name_lable, " (لطفا نام کامل خود را وارد کنید) ");
    }
    else {
        errorInputRemove(name_input, name_lable, "نام کامل");
        okInput(name_input, name_lable, "نام کامل");
    }


    if (!email_input.value.includes("@gmail.com") || email_input.value == "") {
        errorInput(email_input, email_lable, " (لطفا ایمیل خود را به درستی وارد کنید) ");
    }
    else {
        errorInputRemove(email_input, email_lable, "ایمیل");
        okInput(email_input, email_lable, "ایمیل");
    }

    if (day_input.value == "")
        day_input.classList.add("input_wrong");
    else
        dayHandler();
    if (month_input.value == "")
        month_input.classList.add("input_wrong");
    else
        monthHandler();
    if (year_input.value == "")
        year_input.classList.add("input_wrong");
    else
        yearHandler();
    if (pass_input.value.trim().length < 5) {
        errorInput(pass_input, pass_lable, " (لطفا پسورد خود را به درستی وارد کنید) ");
        console.log("ejra1");
    }
    else {
        errorInputRemove(pass_input, pass_lable, "پسورد");
        okInput(pass_input, pass_lable, "پسورد");
        console.log("ejra2");
    }


}

function okInput(input, lable, message) {
    lable.style.color = "green";
    if (!lable.textContent.includes(message)) {
        lable.insertAdjacentHTML("beforeend", message);
    }
     input.classList.add("input_right");
}
function errorInput(input, lable, message) {
    lable.style.color = "red";
    if (!lable.textContent.includes(message)) {
        lable.insertAdjacentHTML("beforeend", message);
    }
    input.classList.add("input_wrong");
}
function errorInputRemove(input, lable, message) {
    lable.style.color = "black";
    lable.textContent = message;
    input.classList.remove("input_wrong");
}

//events
form.addEventListener("submit", formHandler);
year_input.addEventListener("input", yearHandler);
month_input.addEventListener("input", monthHandler);
day_input.addEventListener("input", dayHandler);
pass_input.addEventListener("focus", function () { inputHandlerFocus(".pass_lable", "pass_lable_focus") });
pass_input.addEventListener("blur", function () { inputHandlerUnfocus(".pass_lable", "pass_lable_focus", pass_input) });
email_input.addEventListener("focus", function () { inputHandlerFocus(".email_lable", "email_lable_focus") });
email_input.addEventListener("blur", function () { inputHandlerUnfocus(".email_lable", "email_lable_focus", email_input) });
name_input.addEventListener("focus", function () { inputHandlerFocus(".name_lable", "name_lable_focus") });
name_input.addEventListener("blur", function () { inputHandlerUnfocus(".name_lable", "name_lable_focus", name_input) });