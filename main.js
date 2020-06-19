var Doc = document.getElementById.bind(document);
var resultBox = Doc("zer");
var expressionBox = Doc("expres");
var memoryBox = Doc("memory-box");
var historyBox = Doc("history-box");
var memText = Doc("memoText");
var hisText = Doc("hisText");
var bucketRmvBox = Doc("rmvHis");
var historyResult = "";
var historyExpression="";
var expression = "";
var input;
var click = false;
var previousInput="";
var memoryState = false;
var tempMem="0" ;
var memoryValue = "";

function changeState(Mem){
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
            memText.classList.remove("display-off")
        }
        else{
            historyBox.innerHTML = ""; 
            hisText.classList.remove("display-off");
        }
        bucketRmvBox.classList.add("display-off");
    }