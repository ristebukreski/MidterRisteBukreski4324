let name = document.getElementById('n1');
let id = document.getElementById('id');

let checkboxAns2 = document.getElementById('q1');
let checkboxAns3 = document.getElementById('3q2');
let checkboxAns2 = document.getElementById('4q4');

document.getElementById('btn1').addEventListener("click", calculate);

function checkQuestion1_1(){
    if(name.value.length ==0)
    {
        document.getElementById('error1').innerHTML = "Cannot leave number 1 field empty";
        return false;
    } else {
        document.getElementById('error1').innerHTML = "";
        return true;
    
    }
}

function checkQuestion1_2() {
    if(num2.value.length == 0) {
        document.getElementById('error2').innerHTML = "Cannot leave number 2 field empty";
        return false;
    } else {
        document.getElementById('error2').innerHTML = "";
        return true;
    
    }
}

function Question2()
{
    if(checkboxAns2 == true)
    {
        localStorage.setItem("Correct");
    }else {
        alert("Wrong answere");
    }

}

function Question3()
{
    if(checkboxAns3 == true)
    {
        localStorage.setItem("Correct");
    }else {
        alert("Wrong answere");
    }

}

function Question4()
{
    if(checkboxAns4 == true)
    {
        localStorage.setItem("Correct");
    }else {
        alert("Wrong answere");
    }

}