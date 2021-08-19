var memory = (function(){

    function memBtn(type){
        if(memoryBox.innerHTML==""){
            app.newMemory();  
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
                    app.bucketRemove();
                    memoryState = false;
                }
                else
                app.bucketRemove();  
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

    return{
        memoryPlus:memoryPlus,
        memoryMinus:memoryMinus,
        memBtn:memBtn
    }
})();
