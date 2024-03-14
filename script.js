const clear = document.querySelector("#clear");
const area = document.querySelector(".textArea");
const del = document.querySelector("#Delete")
const dot = document.querySelector("#dot")
const buttons = document.querySelectorAll("button")


buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        const value = button.value
        if(value === 'clear'){
           area.textContent = ""; 
           dot.disabled = false;
        }else{
            let areavalue = area.textContent;
            if(areavalue.length < 6){
                if(value === "dot"){
                    area.textContent += button.textContent;
                    dot.disabled = true;
                }else{
                    area.textContent += button.textContent;
                } 
            }else{
               buttons.disabled = true;
            }
            
        }
    })
      
})