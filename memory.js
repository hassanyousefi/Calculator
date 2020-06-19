var memory = (function(){

    function newMemory(){
        if(!memoryState)
        memoryBox.classList.add("display-off");
        else
        bucketRmvBox.classList.remove("display-off");

        memText.classList.add("display-off");
        var label = document.createElement("div");
        label.className = "lable";
        var newRes = document.createElement("div");
        newRes.className = "number";
        if(!historyResult)
        historyResult=0;
        newRes.textContent=historyResult;
        var Buttons = document.createElement("div");
        Buttons.className = "button";
        var MC = document.createElement("aside");
        MC.textContent = "MC"
        MC.onclick = memoryClear;
        var MP = document.createElement("aside");
        MP.textContent = "M+"
        MP.onclick = memoryPlus;
        var MM = document.createElement("aside");
        MM.textContent = "M-"
        MM.onclick = memoryMinus;
        Buttons.appendChild(MC);
        Buttons.appendChild(MP);
        Buttons.appendChild(MM);
        label.appendChild(newRes);
        label.appendChild(Buttons);
        memoryBox.insertBefore(label, memoryBox.firstChild);
    }

    function memBtn(type){
        if(memoryBox.innerHTML==""){
            newMemory();  
            return  tempMem = "0";
        }
        var myLable = memoryBox.firstChild.firstChild;
        switch(type){
            case "plus":
                if(tempMem=="0"){
                    tempMem = myLable.textContent;
                    myLable.textContent = eval(tempMem)+Number(historyResult);
                    memoryValue = historyResult;
                }
                else{
                    tempMem = myLable.textContent;
                    myLable.textContent = eval(tempMem)+Number(memoryValue);
                }
            break;


            case "minus":
                if(tempMem=="0"){
                    tempMem = myLable.textContent;
                    myLable.textContent = eval(tempMem)-Number(historyResult);
                    memoryValue = historyResult;
                }
                else{
                    tempMem = myLable.textContent;
                    myLable.textContent = eval(tempMem)-Number(memoryValue);
                }
            break;
            case "recall":
                resultBox.innerHTML = memoryValue;
            break;
            case "clear":
                if(memoryState == false){
                    memoryState = true;
                    bucketRemove();
                    memoryState = false;
                }
                else
                bucketRemove();  
            break;
        }
     

        
    }

    function memoryPlus(){
        var myLable = this.parentNode.parentNode.firstChild;
        
        if(tempMem=="0"){
            tempMem = myLable.textContent;
            myLable.textContent = eval(tempMem)+Number(historyResult);
            memoryValue = historyResult;
        }
        else{
            tempMem = myLable.textContent;
            myLable.textContent = eval(tempMem)+Number(memoryValue);
        }
    }

    
    function memoryMinus(){
        var myLable = this.parentNode.parentNode.firstChild;
        
        if(tempMem=="0"){
            tempMem = myLable.textContent;
            myLable.textContent = eval(tempMem)-Number(historyResult);
            memoryValue = historyResult;
        }
        else{
            tempMem = myLable.textContent;
            myLable.textContent = eval(tempMem)-Number(memoryValue);
        }
    }

    function memoryClear(){
        this.parentNode.parentNode.remove(); 
    }

    return{
        newMemory:newMemory,
        memBtn:memBtn
    }
})();
