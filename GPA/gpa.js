// alert("welcome to Alagbo GPA calculator (4.00)")
let totalGradePoints = 0;
let totalUnits = 0;

document.querySelector(".add_details").addEventListener("click", Add_Records);

function Add_Records(){

    let inputOfCourse = document.getElementById("input_course").value;
    let inputOfScore = parseInt(document.getElementById("input_score").value);
    let input_Of_Unit = parseInt(document.getElementById("input_unit").value);

    if(!inputOfCourse || isNaN(inputOfScore) || isNaN(input_Of_Unit)){
        alert("Please fill all fields correctly");
        return;
    }

    const gradePoint = getGradePoint(inputOfScore, input_Of_Unit);

    totalGradePoints += gradePoint;
    totalUnits += input_Of_Unit;

    readGPA();
   

    // add course
    const li_course = document.createElement("li");
    li_course.textContent = inputOfCourse;
    document.getElementById("cusa").appendChild(li_course);

    // add score
    const li_score = document.createElement("li");
    li_score.textContent = inputOfScore;
    document.getElementById("score").appendChild(li_score);

    // add unit
    const li_unit = document.createElement("li");
    li_unit.textContent = input_Of_Unit;
    document.getElementById("unit").appendChild(li_unit);

    // add grade point
    const li_grade = document.createElement("li");
    li_grade.textContent = gradePoint;
    document.getElementById("grade").appendChild(li_grade);

    // clear input
    document.getElementById("input_course").value = "";
    document.getElementById("input_score").value = "";
    document.getElementById("input_unit").value = "";
    // for buuton click 
    buttonClick();
}


function getGradePoint(score, unit){
    if(score>=101) return 0 * unit;
    if(score >= 75) return 4 * unit;
    if(score >= 70) return 3.5 * unit;
    if(score >= 65) return 3.25 * unit;
    if(score >= 60) return 3 * unit;
    if(score >= 55) return 2.75 * unit;
    if(score >= 50) return 2.5 * unit;
    if(score >= 45) return 2.25 * unit;
    if(score >= 40) return 2 * unit;
    return 0;
}

function readGPA(){
    let gpa = totalGradePoints / totalUnits;
    document.getElementById("gpa_value").textContent = gpa.toFixed(2);
}
//for button shadow
function buttonClick(){
    var button_shadow = document.querySelector(".add_details");
    button_shadow.classList.add("click");

    setTimeout(()=>{
        button_shadow.classList.remove("click");
    },100);
}

//for toggle switch
var switch_toggle = document.querySelector(".switch");

switch_toggle.addEventListener("change", function(){
   document.querySelector(".gpa_switch").classList.toggle("gpa_switch_display");
   document.querySelector(".calculate").classList.toggle("gpa_switch_display");
   title_switch();
//    buttonClick();
})

function title_switch(){
document.querySelector(".switch").setAttribute("title", "switch to 4.0");
}


// for switch display

let totalGradePoint = 0;
let totalUnit = 0;

document.querySelector(".add_details2").addEventListener("click", Add_Records2);

function Add_Records2(){

    let inputOfCourse2 = document.getElementById("input_course2").value;
    let inputOfScore2 = parseInt(document.getElementById("input_score2").value);
    let input_Of_Unit2 = parseInt(document.getElementById("input_unit2").value);

    if(!inputOfCourse2 || isNaN(inputOfScore2) || isNaN(input_Of_Unit2)){
        alert("Please fill all fields correctly");
        return;
    }

    const gradePoint2 = getGradesPoint(inputOfScore2, input_Of_Unit2);

    totalGradePoint += gradePoint2;
    totalUnit += input_Of_Unit2;

    readsGPA();
   convert();

    // add course
    const li_course2 = document.createElement("li");
    li_course2.textContent = inputOfCourse2;
    document.getElementById("cusa2").appendChild(li_course2);

    // add score
    const li_score2 = document.createElement("li");
    li_score2.textContent = inputOfScore2;
    document.getElementById("score2").appendChild(li_score2);

    // add unit
    const li_unit2 = document.createElement("li");
    li_unit2.textContent = input_Of_Unit2;
    document.getElementById("unit2").appendChild(li_unit2);

    // add grade point
    const li_grade2 = document.createElement("li");
    li_grade2.textContent = gradePoint2;
    document.getElementById("grade2").appendChild(li_grade2);

    // clear input
    document.getElementById("input_course2").value = "";
    document.getElementById("input_score2").value = "";
    document.getElementById("input_unit2").value = "";
    // for buuton click 
    
}


function getGradesPoint(score, unit){
    if(score>=101) return 0 * unit;
    if(score >= 70) return 5 * unit;
    if(score >= 60) return 4 * unit;
    if(score >= 50) return 3 * unit;
    if(score >= 45) return 2 * unit;
     if(score >= 40) return 1 * unit;
    return 0;
}

function readsGPA(){
    let gpa = totalGradePoint / totalUnit;
    document.getElementById("gpa_value2").textContent = gpa.toFixed(2);
}
// convert to 4.0 scale 
function convert(){
    let convert_value5Point = totalGradePoint / totalUnit
    let convertValue = (convert_value5Point/5) * 4;
    document.getElementById("gpa-value3").textContent = convertValue.toFixed(2);
}

//refresh

var refresh = document.getElementById("refresh");
refresh.addEventListener("click", function(){
    location.reload();
    buttonClick();
})