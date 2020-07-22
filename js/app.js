var Doc = document.getElementById.bind(document),
resultBox = Doc("zer"),
expressionBox = Doc("expres"),
memoryBox = Doc("memory-box"),
historyBox = Doc("history-box"),
hisBoxMini= Doc("history-box-mini"),
memBoxMini= Doc("mem-box-mini"),
memText = Doc("memoText"),
hisText = Doc("hisText"),
bucketRmvBox = Doc("rmvHis"),
minibox = Doc("id-mini-box"),
historyResult = "",
historyExpression="",
expression = "",
input,
click = false,
previousInput="",
memoryState = false,
tempMem="0" ,
memoryValue = "";

var app = (function(){

    function changeStateRightSide(Mem){
         var memHead = Doc("mem");
         var hisHead = Doc("hisT");
    
         if(Mem){
             memoryState = true;
             historyBox.classList.add("display-off");
             memoryBox.classList.remove("display-off");
             memHead.classList.add("active-state");
             hisHead.classList.remove("active-state"); 
             hisText.classList.add("display-off");
             if(memoryBox.textContent==""){
                 memText.classList.remove("display-off");
                 bucketRmvBox.classList.add("display-off");
             }
             else{
                 memText.classList.add("display-off");
                 bucketRmvBox.classList.remove("display-off");
             }
             
         }
         else{
             memoryState = false;
             historyBox.classList.remove("display-off");
             memoryBox.classList.add("display-off");
             memHead.classList.remove("active-state");
             hisHead.classList.add("active-state");
             memText.classList.add("display-off");
             if(historyBox.textContent==""){
                 hisText.classList.remove("display-off");
                 bucketRmvBox.classList.add("display-off");
             }
             else{
                 hisText.classList.add("display-off");
                 bucketRmvBox.classList.remove("display-off");
             }
                 
    
    
         }
     
     }
    
    
    
    function bucketRemove(){
         if(memoryState){
             memoryBox.innerHTML="";
             memText.classList.remove("display-off");
             memBoxMini.innerHTML="";
         }
         else{
             historyBox.innerHTML = ""; 
             hisText.classList.remove("display-off");
             hisBoxMini.innerHTML = "";
         }
         bucketRmvBox.classList.add("display-off");
    }
    
    
    
    function minimizeBox(){
         
         if(minibox.classList.contains("display-off"))
         minibox.classList.remove("display-off");
         else
         minibox.classList.add("display-off");
    
         if(memoryState){
             hisBoxMini.classList.add("display-off");
             memBoxMini.classList.remove("display-off");
         }
         else{
             memBoxMini.classList.add("display-off");
             hisBoxMini.classList.remove("display-off");
         }
    }



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
        MC.onclick = memoryLabelClear;
        var MP = document.createElement("aside");
        MP.textContent = "M+"
        MP.onclick = memory.memoryPlus;
        var MM = document.createElement("aside");
        MM.textContent = "M-"
        MM.onclick = memory.memoryMinus;
        Buttons.appendChild(MC);
        Buttons.appendChild(MP);
        Buttons.appendChild(MM);
        label.appendChild(newRes);
        label.appendChild(Buttons);
        var miniMem = label.cloneNode(true);
        memBoxMini.insertBefore(miniMem, memBoxMini.firstChild);
        memoryBox.insertBefore(label, memoryBox.firstChild);
    }



    function newHistory(){
        hisText.classList.add("display-off");
        if(memoryState == false)
        bucketRmvBox.classList.remove("display-off")
        var newExprssion = historyExpression;
        var newResult = historyResult;
        var lable = document.createElement("div");
        lable.className = "lable";
        lable.onclick = myHistory.clickLable;
        var expres = document.createElement("div");
        expres.className = "exp";
        expres.textContent = newExprssion +" = ";
        var res = document.createElement("div");
        res.className = "result";
        res.textContent = newResult;
        lable.appendChild(expres);
        lable.appendChild(res);
        historyBox.appendChild(lable);
        var miniHistory = lable.cloneNode(true);
        miniHistory.onclick = myHistory.clickLable;
        hisBoxMini.appendChild(miniHistory);
    }


    function memoryLabelClear(){
        this.parentNode.parentNode.remove(); 
    }


    function refreshDisplay(){
        if (window.innerWidth==500){
            minibox.classList.add('display-off');
    
        }
    };

     return{
        newHistory:newHistory,
        newMemory:newMemory,
        changeState:changeStateRightSide,
        bucketRemove:bucketRemove,
        minimizeBox:minimizeBox,
        refreshDisplay:refreshDisplay
        
     }

})();
window.addEventListener("resize", app.refreshDisplay);