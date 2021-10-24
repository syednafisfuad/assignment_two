displayQuote = function(){
  
    const quote = [
            
            "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
            "We must not allow other people’s limited perceptions to define us.",
            "Do what you can, with what you have, where you are.",
            "Be yourself; everyone else is already taken.",
            "This above all: to thine own self be true.",
            "If you cannot do great things, do small things in a great way.",
             "If opportunity doesn’t knock, build a door.",    
             "Strive not to be a success, but rather to be of value.",
             "Do not let what you cannot do interfere with what you can do.",
             "I haven’t failed. I’ve just found 10,000 ways that won’t work."
    ];
    var randomItem = quote[Math.floor(Math.random()*quote.length)];
    document.getElementById("quote").innerHTML = randomItem;
}
changeColor = function(colorC){
    if(colorC == 'green'){
            document.getElementById("quote").style.backgroundColor = colorC;
            document.getElementById("quote").style.borderColor ="black" ;       
            document.getElementById("quote").style.color = "white";     
            document.getElementById("quote").style.fontFamily ="cursive";  
            document.getElementById("quote").style.fontSize = "12px";    
    }else if(colorC == 'yellow'){
            document.getElementById("quote").style.backgroundColor = colorC;
            document.getElementById("quote").style.borderColor = "red";
            document.getElementById("quote").style.color = "black";
            document.getElementById("quote").style.fontFamily = "verdana";
            document.getElementById("quote").style.fontSize = "14px"; 
    }else if(colorC == 'blue'){
            document.getElementById("quote").style.backgroundColor = colorC;
            document.getElementById("quote").style.borderColor = "yellow";
            document.getElementById("quote").style.color = "gray";
            document.getElementById("quote").style.fontFamily = "Impact";
            document.getElementById("quote").style.fontSize = "16px"; 
    }else if(colorC == 'orange'){
            document.getElementById("quote").style.backgroundColor = colorC;
            document.getElementById("quote").style.borderColor = "violet";
            document.getElementById("quote").style.color = "blue";
            document.getElementById("quote").style.fontFamily = "Lucida Console";
            document.getElementById("quote").style.fontSize = "18px"; 
    }
}








  function convert()
  {
  var button=document.getElementById('button');
  var result=document.getElementById('result');

  button.addEventListener('click',function()
  {
     var input=document.getElementById('weightInput').value;
     var choice=document.getElementById('choice').value;

     if(choice=="kg"){
         
         result.innerHTML=(input*0.45359237).toFixed(4)+" kilograms";
     }
     else if(choice=="lb"){
         result.innerHTML=(input*2.2046).toFixed(4)+" pounds";
     }

    })
  }



    function calculate() {
        var values = document.getElementById('box1').value.split(/,/g);
        var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
        document.querySelector('#max').innerHTML = values.max();
        document.querySelector('#min').innerHTML = values.min();
        document.querySelector('#sum').innerHTML = sum;
        document.querySelector('#avg').innerHTML = sum / values.length;
        document.querySelector('#reverse').innerHTML = values.reverse().join(',');
      }
      
      Array.prototype.max = function() {
        return Math.max.apply(null, this);
      };
      
      Array.prototype.min = function() {
        return Math.min.apply(null, this);
      };


      
      function clearAll() {
        document.getElementById("textarea1").value = "";
    }

 
    function toggle() {
      // function to toggle the case of the string
       let str = document.getElementById("textarea1").value.split("");
      
      for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z')
      str[i] = String.fromCharCode(str[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
      else if (str[i] >= 'a' && str[i] <= 'z')
      str[i] = String.fromCharCode(str[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
      }
      
      // write the toggle content to the textbox
      document.getElementById("textarea1").value = (str).join("");
      }


      function sortContents() {

        let str = document.getElementById("textarea1").value.split("\n");
        str.sort();
        let outputString = "";
        for (let i = 0; i < str.length; i++) {
        if (str[i] === "") {
        continue;
        }
        outputString += str[i] + "\n";
        }
        // write the sorted content to the textbox
        document.getElementById("textarea1").value = outputString;
        
        }






      function reverse() {
        let str = document.getElementById("textarea1").value.split("\n");
        
        for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split("").reverse().join("");
        }
        // write the reversed content to the textbox
        document.getElementById("textarea1").value = (str).join("\n");
        }



        function stripContents() {
          let str = document.getElementById("textarea1").value.split("\n");        
          let output= "";
          for (let i = 0; i < str.length; i++) {
          if (str[i] === "") {
          continue;
          }
          output += str[i].trim() + "\n";
          }
          document.getElementById("textarea1").value = output;         
          }



          function addNumber() {
            let str = document.getElementById("textarea1").value.split("\n");
            let count = 1;
            let output = "";
            for (let i = 0; i < str.length; i++) {
            if (str[i] === "") {
            output += "\n";  
            }
            else {
            output += count + " " + str[i] + "\n";
            count += 1;
            }
            }
            document.getElementById("textarea1").value = output;            
            }



            function shuffle() {
              let array = document.getElementById("textarea1").value.split("\n");  
              var currentIndex = array.length, temporaryValue, randomIndex;
              while (0 !== currentIndex) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
              }
              document.getElementById("textarea1").value = (array).join("\n"); 
              }





    










