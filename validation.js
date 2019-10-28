window.onload = function(){

    //select id pass1, pass2, and myForm
    var password1 = document.getElementById("pass1");
    var password2 = document.getElementById("pass2");
    var form = document.getElementById("myForm");

    //select list items for password requirements
    var min = document.getElementById("minLen");
    var max = document.getElementById("maxLen");
    var cNum = document.getElementById("contNum");
    var spChar = document.getElementById("speChar");
    var space = document.getElementById("noSpace");

    //add onsubmit event to the form
    form.addEventListener("submit", validation);

    //Add event to password according to requirements
    password1.addEventListener("keyup", checkMin);
    password1.addEventListener("keyup", checkMax);
    password1.addEventListener("keyup", checkNum);
    password1.addEventListener("keyup", checkSpChar);
    password1.addEventListener("keyup", noSpace);
   
    //check minimum length
    function checkMin(){
        if(password1.value.length >= 5){
            min.style.color = "green";
            return true;
        } else {
            min.style.color = "red";
            return false;
        }
    };

    //check maximimus length
    function checkMax(){
        if(password1.value.length <= 10 && password1.value.length > 0){
            max.style.color = "green";
            return true;
        } else {
            max.style.color = "red";
            return false;
        }
    }

    //check if password contains atleast 1 number
    function checkNum(){
        var numList = /[0-9]/g;
        if(password1.value.match(numList)){
            cNum.style.color = "green";
            return true;
        } else{
            cNum.style.color = "red";
            return false;
        }     
    }

    //check if password contains atleast 1 special character
    function checkSpChar(){
        var charList = /[!@#$%^&*(),.?":{}|<>]/g;
        if(password1.value.match(charList)){
            spChar.style.color = "green";
            return true;
        } else{
            spChar.style.color = "red";
            return false;
        }
        
    }

    //check if password has no space
    function noSpace(){
        var charList = /[ ]/g;
        if(!password1.value.match(charList)){
            space.style.color = "green";
            return true;
        } else{
            space.style.color = "red";
            return false;
        }     
    }
    //create validation function
    function validation(){
        //check if #pass1 value and #pass2 value are not empty
        if(password1.value != "" && password2.value != ""){
            //check if #pass1 and #pass2 are the same
            if(password1.value == password2.value){
                //if(req1 && req2 && req3 && req4 && req5){
                if(checkMin() && checkMax() && checkNum() && checkSpChar() && noSpace()){
                    document.body.style.opacity = "0.1";
                    formatting();
                    setTimeout(reloadMe, 2000);
                    return true;
                } else {
                    alert("Error! Your password do not meat the requirements");
                }
                
            }
            alert("Error! Passwords do not much");
            
        } else{
            alert("Error! Passwords must not be empty");
        }

    }
    function formatting(){
        document.write("<h1 align='center' style='color: green; margin-top: 150px;'>" + 
                        "Form was successuly submitted</h1>");
    }

    function reloadMe(){
        location.reload(true);
    }

}