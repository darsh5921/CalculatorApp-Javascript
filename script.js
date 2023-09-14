let user_input=document.getElementById('user-input')
let button=document.querySelectorAll('button')
// console.log(button)
button.forEach(Element => {
    Element.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
        if(e.target.textContent==="C")
        {
            user_input.innerHTML =""
        }else if(e.target.textContent==="<=")
        {
            user_input.innerHTML=user_input.innerHTML.slice(0,-1)
        }
        else if(e.target.textContent === "=")
        {
            user_input.innerHTML= eval(user_input.innerHTML) //eval converts sting to type of data
        }
        else{
            user_input.innerHTML+=e.target.textContent
        }
        user_input.scrollLeft=user_input.scrollWidth
    })
})
