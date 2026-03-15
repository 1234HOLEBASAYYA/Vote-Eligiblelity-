const button=document.getElementById("bu");
const text=document.getElementById("text");
const p=document.getElementById("p");
let age;
button.onclick=function(){
  
    age=text.value;
    age=Number(age);
    if(age<18&&age>0)
    {
        p.textContent="your Not  eligible to Vote !";
    }
    else if(age>=18)
    {
        p.textContent="your eligible to Vote ! becouse your 50 years old !";
    }
    else if(age==0)
    {
        p.textContent="your not yet Born ! please Born and Vote!";
    }
    else{
        p.textContent="Please Enter the valid age";
    }
}
