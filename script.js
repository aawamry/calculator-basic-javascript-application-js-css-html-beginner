const btnsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i=0; i< btnsEl.length; i++){
    btnsEl[i].addEventListener("click", ()=>{
        const btnValue = btnsEl[i].textContent;
        if(btnValue === "C"){
            clrResult()
        } else if(btnValue === "="){
            calcResult()
        }else{
            appendValue(btnValue);
        }
    })
}

    function clrResult(){
        inputFieldEl.value = ""
    }

    function calcResult(){
        inputFieldEl.value = eval(inputFieldEl.value)
    }

    function appendValue(btnValue){
        inputFieldEl.value += btnValue
    }
