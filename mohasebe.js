var Doc = document.getElementById.bind(document);

var cal = (function x() {
var myText ="";
var temp ="";
var resultText = "";
    function res(num){
      
      var input = num.getAttribute("value");
      if(isNaN(input) && input!="."){
        switch(input){
          case "*":
            resultText += " × ";
          break;
          case "/":
            resultText += " ÷ ";
          break;
          case "√":
            resultText = "√("+ resultText + ")"
            myText = Math.pow(myText , 1/2) 
          break;
          case "x2":
            resultText = "sqr("+ resultText + ")"
            myText = Math.pow(myText , 2) 
          break;
          case "x3":
            resultText = "cube("+ resultText + ")"
            myText = Math.pow(myText , 3) 
          break;
          case "1/x":
            resultText = "1/("+ resultText + ")"
            myText = 1/myText
          break;
          case "±":
            resultText = "negate("+ resultText + ")"
            myText = -1*myText
          break;
          default:
            resultText += " " +input +" ";
        }
        myText = eval(myText);
        display(myText);
        if(input!="√" && input!="x2" && input!="x3" && input!="1/x" && input!="±")
        myText += input;
        temp='';
      }




      else{
        resultText += input
        if (isNaN(myText)){
          temp += input;
          myText+= input;
          display(temp);

        }
        else{
          myText += input;
          display(myText)
        }
        
                
      }
       
    }


    function display(char){
        Doc("zer").innerHTML = char;
        Doc("expres").innerHTML = resultText;
    }

    function root(num){
     return Math.pow(num , 1/2)
    }



    return{
        res:res
    }


})();


console.log(eval(""))