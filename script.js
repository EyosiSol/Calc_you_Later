const clear = document.querySelector("#clear");
const area = document.querySelector(".textArea");
const del = document.querySelector("#Delete");
const dot = document.querySelector("#dot");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "C") {
      area.textContent = "";
      dot.disabled = false;
    } else if( value === "="){
        let statment = area.textContent;
        if(statment.includes("x")){
            let splitted = statment.split("x");
            let num1 = splitted[0];
            let num2 = splitted[1]
            area.textContent = parseInt(num1) * parseInt(num2);
        }       
    }else if(value === "<="){
        let content = area.textContent;
        if(content.length > 0){
            area.textContent = content.slice(0,-1);
        }
    }
    else {
      let areavalue = area.textContent;
      if (areavalue.length < 6) {
        if (value === ".") {
          area.textContent += button.textContent;
          dot.disabled = true;
        } else {
          area.textContent += button.textContent;
        }
      } else {
        buttons.disabled = true;
      }
    }
  });
});
