let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");

let string="";
let arr =Array.from(buttons);// all the buttons are stored in array
arr.forEach(buttons =>{
    buttons.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '=')
        {
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML =="AC")
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML== "DEL")
        {
            let length=string.length;
            string=string.substring(0,length-1);
            input.value=string;
        }
        else
        {
        string+= e.target.innerHTML;
        input.value=string;
        }
    })
})