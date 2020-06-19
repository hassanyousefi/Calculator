var Calculate = (function () {
  var firstResult ="";
  var lastResult ="";

    function Input(operator){
      firstResult+="";
      if(input=="="){
        firstResult = resultBox.innerHTML;
        expression = resultBox.innerHTML;
        click = true;
      }
      input = operator.getAttribute("value");
      
      if(firstResult.indexOf(".")>-1&&input==".")return;

      if(isNaN(input)&&previousInput=="")return;
      
      if((input=="+"&&previousInput=="+")||(input=="-"&&previousInput=="-")||(input=="*"&&previousInput=="*")||(input=="/"&&previousInput=="/")){
        return
      }
      
      if((input=="*"||input=="/"||input=="-"||input=="+")&&(previousInput=="*"||previousInput=="/"||previousInput=="-"||previousInput=="+")){
          firstResult =firstResult.slice(0,-1);
          expression = expression.slice(0,-2);
      }
      
      
      if(isNaN(input) && input!="."){

        click = false;

        switch(input){
          case "*":
            expression += " × ";
          break;
          case "=":
            historyExpression = expression;
            expression="";
          break;
          case "/":
            expression += " ÷ ";
          break;
          case "√":
            
            if(lastResult==""){
              expression = "√("+ expression + ")"
              firstResult = Math.pow(firstResult , 1/2) 
            }
            else{
              expression = expression.slice(0, -lastResult.length)+"√("+ lastResult + ")";
              firstResult = firstResult.replace(lastResult,Math.pow(lastResult, 1/2)) 
            }
          break;
          case "x2":
            if(lastResult==""){
              expression = "sqr("+ expression + ")"
              firstResult = Math.pow(firstResult , 2) 
            }
            else{
              expression = expression.slice(0, -lastResult.length)+"sqr("+ lastResult + ")";
              firstResult = firstResult.replace(lastResult,Math.pow(lastResult, 2)) 
            }
          break;
          case "x3":
            if(lastResult==""){
              expression = "cube("+ expression + ")";
              firstResult = Math.pow(firstResult , 3);
            }
            else{
              expression = expression.slice(0, -lastResult.length)+"cube("+ lastResult + ")";
              firstResult = firstResult.replace(lastResult,Math.pow(lastResult, 3));
            }
          break;
          case "1/x":
            if(lastResult==""){
              expression = "1/("+ expression + ")";
              firstResult = 1/firstResult;
            }
            else{
              expression = expression.slice(0, -lastResult.length)+"1/("+ lastResult + ")";
              firstResult = firstResult.replace(lastResult,1/lastResult);
            }
          break;
          case "±":
            if(lastResult==""){
              expression = "negate("+ expression + ")"
              firstResult = -1*firstResult
            }
            else{
              expression = expression.slice(0, -lastResult.length)+"negate("+ lastResult + ")";
              firstResult = firstResult.replace(lastResult,-1*lastResult);
            }
          break;
          default:
            expression += " " +input +" ";
        }

        firstResult = eval(firstResult);
        display(firstResult);
        if(input!="√" && input!="x2" && input!="x3" && input!="1/x" && input!="±"&&input!="=")
        firstResult += input;
        lastResult='';
      }

      else{

        if(click){
          firstResult="";
          expression="";
          click=false;
        }
        expression += input;
        if (isNaN(firstResult)){
          lastResult += input;
          firstResult+= input;
          display(lastResult);
        }
        else{
          firstResult += input;
          display(firstResult)
        }
        
                
      }

      if(input=="="){
        myHistory.newHistory();
      }
      previousInput = input;   
    }


    function clear(type){
      
      switch(type){
        case "All":
          firstResult = "";
          lastResult = "";
          expression = "";
          display(0);
        break;

        case "CE":
          if(isNaN(firstResult)){
            firstResult = firstResult.slice(0, -lastResult.length);
            expression = expression.slice(0, -lastResult.length)
            
          }
          display(0);
          lastResult = "";
        break;

        case "backSpace":
          if(lastResult!=""||!isNaN(firstResult)){
            firstResult = firstResult.slice(0,-1);
            expression = expression.slice(0, -1);
            display(firstResult)
            if(isNaN(firstResult)){
              lastResult=lastResult.slice(0,-1)
              display(lastResult);
            }
          }
          
        break;
      }
      click=false;
      
    }

    function display(lastRes){
      if(lastRes=="")
      lastRes="0";
        resultBox.innerHTML = lastRes;
        expressionBox.innerHTML = expression;
        historyResult = lastRes;

    }

    return{
        Input:Input,
        clear:clear,
        display:display
    }


})();

