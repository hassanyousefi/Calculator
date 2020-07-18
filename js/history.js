var myHistory = (function (){
    


    function clickLable(){
        input = "";
        expression = this.firstChild.textContent.slice(0, -2);
        Calculate.display(this.lastChild.textContent);
    }

    
    return{
      clickLable:clickLable  
    }
})();