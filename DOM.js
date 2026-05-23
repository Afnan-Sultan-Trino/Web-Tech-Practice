
//---getElementById and addEventListener--

const title=document.getElementById('title')
const btnClick=document.getElementById('btnText')

btnClick.addEventListener("click",function(){
    title.textContent="Text Content is chaged"  //for changing the text
})


const title1=document.getElementById('title')
const btnAlert=document.getElementById('btnAlert')

btnAlert.addEventListener("click",function(){
    alert("Alert ! Button is Pressed")
})

const btnAdd=document.getElementById('btnImage')
const img=document.getElementById('cat-img')

btnAdd.addEventListener('click',function(){
    img.src="Screenshot 2026-05-23 155100.png"  //for changing source of the image
})


const btnPrev=document.getElementById('btnPrev')
const img1=document.getElementById('cat-img')

btnPrev.addEventListener('click',function(){
    img1.src="Screenshot 2026-05-23 154959.png"
})

const btnCreate=document.getElementById('btnCreateDiv')

btnCreate.addEventListener('click',function(){
    const divElement=document.createElement("div");  //"createElement" property for creating new element
    divElement.id="dynamic-div";
    divElement.style.backgroundColor="red";
    divElement.style.height="250px";
    divElement.innerHTML="<h1>this is the Dynamic Div</h1>";
    document.body.appendChild(divElement);    //"appenChild" property for appending anything into the body
})


//---Form Validation--//

const form1=document.getElementById('form1')
form1.addEventListener('submit',function(event){

    event.preventDefault(); //for preventing reload/refresh of submit button 

    const fullname= form1.fullname.value;
    const email=form1.email.value;
    const password=form1.password.value;
    const number=Number(form1.age.value);
    const agree= form1.agree.checked;

    //--Validation Starts--

    //1.Empty fields checking--

    if(fullname==""||email==""||password==""||number==""||agree==false ){
        
        alert("All fields must be filled !")
        return
    }
    
    //2.password length--
    if(password.length<8){
        
        alert("Password Must be more than 8 character")
        return
    }

    //3.age--
    
    if(typeof number!="number"){
        alert("Age must be number")
        return
    }

    if(!email.includes('@')|| !email.includes('.')|| !email.indexOf('@')>email.indexOf('.')){

        alert("Invalid Email")
        return
    }

    alert("Form1 submitted Succesfully!")
})



