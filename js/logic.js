let doc = document; // сокращение кода
let heroStart = doc.querySelector(".heroStart");//достали hero блок
let startBlock = doc.querySelector(".startBlock");//достали начальний блок
let startBtn = startBlock.querySelector(".startBlock__btn");//достали кнопку с начального блока
let menuWrapper = doc.querySelector(".menuWrapper");//достали блок с меню
// функция при нажатии на кнопку в стартовом блоке, прячет стартБлок и показывает меню
function showMenu() {
    heroStart.classList.toggle("displayNone");
    menuWrapper.classList.toggle("displayNone");
}
startBtn.addEventListener("click",showMenu);// событие показа меню
let practiceBlock = doc.querySelector(".practiceBlock");
let menuBlock = doc.querySelector(".menuBlock");//достали меню
let menuPracticeBLock = menuBlock.lastElementChild;//достали блок с практикой
let taskBlockWrapper = doc.querySelector(".taskBlockWrapper")//Достали блок с условием задачи
// функция прячет меню и показывает блок с условием задачи
function selectPracticeBlock() {
    menuWrapper.classList.toggle("displayNone");
    practiceBlock.classList.toggle("displayNone");
    taskBlockWrapper.classList.toggle("displayNone");
}
menuPracticeBLock.addEventListener("click", selectPracticeBlock);// событие выбора блока с практикой

let taskBlock = doc.querySelector(".taskBlock");//достали блок с условием задачи
let closeTaskBtn = taskBlock.querySelector(".closeTask");//достали кнопку с блока с условием задачи
let showTaskBtn = doc.querySelector(".showTask");//достали кнопку для показа условия задачи

//функция при нажатии на кнопку Ок, прячет блок с условием задачи
function closeTask() {
    taskBlockWrapper.classList.add("displayNone");
    showPractice();//функция показывает блок с практикой
}
//функция при нажатии на кнопку Условие, прячет саму кнопку и показывает блок с задачей
// function showTask(){
    // showTaskBtn.classList.add("displayNone");
    // showFormulaBtn.classList.add("displayNone");
    // taskBlockWrapper.classList.remove("displayNone");
// }
// showTaskBtn.addEventListener("click",showTask);// событие показать условие задачи
closeTaskBtn.addEventListener("click", closeTask);// событие закрыть условие задачи

let practiceWrapper = Array.from(doc.querySelectorAll(".practiceWrapper"));//достали все блоки с практикой в масив
let counter = 0; //счетчик блоков с практикой

function showPractice() {
    practiceWrapper[counter].classList.remove("displayNone");
}
function closeActivePractice(){
    practiceWrapper[counter].classList.add("displayNone");
}
//Переменная practiceForm хранит в себе форму с инпутами Активного Блока
let practiceForm =  practiceWrapper[counter].querySelector(".practiceForm");
//Функция nextForm берет форму и перезаписивает значение переменной
function nextForm(){
    practiceForm = practiceWrapper[counter].querySelector(".practiceForm");
    return practiceForm;
}

//radioArr хранит в себе масив инпутов активного блока
let radioArr = Array.from(practiceForm.querySelectorAll("input[type=radio]"));//Масив инпутов радио
// console.log(radioArr);
function newRadio() {
    radioArr = Array.from(practiceForm.querySelectorAll("input[type=radio]"));
    return radioArr;
}

//функция проверяет инпут на checked и value === 1
function checkRadio() {
    for (let i = 0; i < radioArr.length; i++) {
        if (radioArr[i].value === "1" && radioArr[i].checked === true) {
            closeActivePractice();
            counter++;
            showPractice();
            nextForm();
            newRadio();
            console.log(counter);
        } else if (radioArr[i].value !== "1" && radioArr[i].checked === true) {
            showError();
        }
    }
}
let errorBlock = doc.querySelector(".errorHero");
let closeErrorBtn = doc.querySelector(".errorDiv__btn");
function showError(){
    errorBlock.classList.remove("hidden");
    errorBlock.classList.add("visible");
}
function closeError(){
    errorBlock.classList.remove("visible");
    errorBlock.classList.add("hidden");
}

//достаем кнопки по id для тестов( первые 4 вопроса) 5таск демонстирует формулу для поиска коефициентов а,b
let btn1 = doc.getElementById("btn1");
let btn2 = doc.getElementById("btn2");
let btn3 = doc.getElementById("btn3");
let btn4 = doc.getElementById("btn4");
let btn5 = doc.getElementById("btn5");

//Проверка тестовых вопросов
btn1.addEventListener("click",checkRadio);
btn2.addEventListener("click",checkRadio);
btn3.addEventListener("click",checkRadio);
btn4.addEventListener("click",checkRadio);
closeErrorBtn.addEventListener("click",closeError);

let btn6  = doc.getElementById("btn6");
let btn7  = doc.getElementById("btn7");
let btn8  = doc.getElementById("btn8");
let btn9  = doc.getElementById("btn9");
let btn10  = doc.getElementById("btn10");
let btn11  = doc.getElementById("btn11");
let btn12  = doc.getElementById("btn12");
let excelArrTrue = ["3175200", "5","=B2^2","=СУММ(B2:B10)","=(B14*D11-B11*C11)/(B14*E11-B11^2)","=(C11-B15*B11)/(B14)"];
let inputExcel = Array.from(doc.querySelectorAll(".inputExcel"));
let finishBlock = doc.querySelector(".finishBlock");
let excelCounter = 0;
function checkInput() {
    if (inputExcel[excelCounter].value === excelArrTrue[excelCounter] ){
        closeActivePractice();
        counter++;
        if(excelCounter === 2){
            showFinal();
        }
        excelCounter++;
        showPractice();
    }else{
        showError();
    }
}
btn5.addEventListener("click",checkInput);

function skip6Step() {
    closeActivePractice();
    counter++;
    showPractice();
    nextForm();
    newRadio();
    console.log(counter);
}
btn6.addEventListener("click",skip6Step);
btn7.addEventListener("click",checkRadio);
btn8.addEventListener("click",checkRadio);
btn9.addEventListener("click",checkRadio);
function skip10Step() {
    closeActivePractice();
    counter++;
    showPractice();
}
function showFinal(){
    console.log("counter = ",excelCounter);
    if (excelCounter === 5 && inputExcel[excelCounter].value === excelArrTrue[excelCounter]){
        closeActivePractice();
        finishBlock.classList.remove("displayNone");
    }
}
btn10.addEventListener("click",checkInput);

function showFinal(){
    console.log("counter = ",excelCounter);
        closeActivePractice();
        finishBlock.classList.remove("displayNone");
}