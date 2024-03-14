const clear = document.querySelector("#clear");
const area = document.querySelector(".textArea");
const del = document.querySelector("#Delete");
const dot = document.querySelector("#dot");
const num0 = document.querySelector("#one");
const num1 = document.querySelector("#two");
const num2 = document.querySelector("#three");
const num3 = document.querySelector("#four");
const num4 = document.querySelector("#five");
const num5 = document.querySelector("#six");
const num6 = document.querySelector("#seven");
const num7 = document.querySelector("#eight");
const num8 = document.querySelector("#nine");
const num9 = document.querySelector("#ten");
const num00= document.querySelector("#twoZeros");
const nums = document.querySelectorAll(".num")
const add = document.querySelector("#add")
const equals = document.querySelector("#equals")
const sub = document.querySelector("#sub")
const mult = document.querySelector("#mult")
const div = document.querySelector("#divide")
const percent = document.querySelector("#percentage")



let startNew = true;
let val1 = ''; 
let val2 = ''
clear.addEventListener("click",()=>{
    area.textContent = "";
    startNew = true;
    val1 = '';
});
nums.forEach((numbers)=>{
    numbers.addEventListener("click",()=>{
    if(startNew === true){
        area.textContent = '';
        startNew = false;
    }   
    area.textContent += numbers.textContent;
    })

})

add.addEventListener("click",()=>{
    val1 += area.textContent;
    startNew = true;
})

equals.addEventListener("click",()=>{
    if(area.textContent === ''){
        area.textContent = "ERR"
    }
    else{
        val2 = area.textContent;
        area.textContent = parseInt(val1) + parseInt(val2)
    }
   
})