const pwd = document.getElementById("pwd");
const cpwd = document.getElementById("cpwd");
const requirements = document.getElementById("requirements");
const match = document.getElementById("match");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const number = document.getElementById("number");
firstName.addEventListener("change", function(){isValid(this);});
lastName.addEventListener("change", function(){isValid(this);});
email.addEventListener("change", function(){isValid(this);});
number.addEventListener("change", function(){isValid(this);});

pwd.addEventListener('keyup', function(){passwordIsValid();});
cpwd.addEventListener('keyup', function(){passwordIsValid();});

function passwordMatch(){
    let password = pwd.value;
    let confirmPassword = cpwd.value;
    if(password == confirmPassword){
        hideElement(match);
        return true;
    }else{
        unhideElement(match);
        notValid();
        return false;
    }
}
function passwordIsValid(){
    let matching = passwordMatch();

    if(matching && pwd.checkValidity() && cpwd.checkValidity()){
        pwd.classList.add("valid");
        cpwd.classList.add("valid");
        hideElement(requirements);
    }
    if(pwd.checkValidity() == false){
        let phShown = placeHolderShown(pwd);
        if(phShown == false)
        pwd.classList.add('error');
        unhideElement(requirements);
    } else{pwd.classList.remove('error');}

    if(cpwd.checkValidity() == false){
        let phShown = placeHolderShown(cpwd);
        if(phShown == false)
        cpwd.classList.add('error');
        unhideElement(requirements);
    } else{cpwd.classList.remove('error');}
    if(pwd.checkValidity() && cpwd.checkValidity())
    hideElement(requirements);
}
function placeHolderShown(element){
    if(element.getAttribute('placeholder') && element.value === ''){
        return true;
    }
    return false;
}
function unhideElement(element){
    element.style.height = "15px";
}
function hideElement(element){
    element.style.height = "0px";
}
function notValid(){
    pwd.classList.remove("valid");
    cpwd.classList.remove("valid");
    pwd.classList.add('error');
    cpwd.classList.add('error');
}
function isValid(element){
    let phShown = placeHolderShown(element);
    if(phShown == false){
        if(element.checkValidity() == false){
            element.classList.add("error");
            element.classList.remove("valid");
        }
        else{
            element.classList.remove("error");
            element.classList.add("valid");
        }
    }
    else{
        element.classList.remove("error");
        element.classList.remove("valid");
    }
}