const display= document.getElementById("display");
const buttons= document.querySelectorAll(".btn");
let expression="";
buttons.forEach(button=> {
    button.addEventListener("click", ()=>{
    const value= button.textContent;

    if(value==="C"){
        expression="";
        display.value="";
    } else if(value==="="){
        try{
            expression= eval(expression).toString();
            display.value= expression;
        } catch(e){
            display.value="Error";
            expression="";
        }
    } else{
        expression += value;
        display.value = expression;
    }
});
});