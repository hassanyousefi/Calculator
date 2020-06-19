var myHistory = (function (){
    // var hisBoxMini= Doc("history-box-mini");
    function newHistory(){
        hisText.classList.add("display-off");
        if(memoryState == false)
        bucketRmvBox.classList.remove("display-off")
        var newExprssion = historyExpression;
        var newResult = historyResult;
        var lable = document.createElement("div");
        lable.className = "lable";
        lable.onclick = clickLable;
        var expres = document.createElement("div");
        expres.className = "exp";
        expres.textContent = newExprssion +" = ";
        var res = document.createElement("div");
        res.className = "result";
        res.textContent = newResult;
        lable.appendChild(expres);
        lable.appendChild(res);
        historyBox.appendChild(lable);
        // hisBoxMini.innerHTML = hisBox.innerHTML;
        // hisBoxMini.appendChild(lable);
    }

    function clickLable(){
        input = "";
        expression = this.firstChild.textContent.slice(0, -2);
        Calculate.display(this.lastChild.textContent);
    }
    return{
        newHistory:newHistory
    }
}());