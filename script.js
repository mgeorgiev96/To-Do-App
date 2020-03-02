let add = document.getElementById("add")
let newToDo = document.getElementById("newToDo")
let ul = document.querySelector("ul")
let controlSection = document.getElementById("controlSection")
let filter = document.getElementById("filter")
let li = document.getElementsByTagName("li")
let header = document.getElementById("header")

if(!window.localStorage.items){
    ul.innerHTML = ""
    window.localStorage.items = ""
}else{
    ul.innerHTML = window.localStorage.items
}

const hideComplete = (e)=>{
    if(e.target.checked){
        for(let i=0;i<ul.children.length;i++){
            if(ul.children[i].children[0].checked){
                ul.children[i].style.display = "none"
            }
        }
    }else{
       for(let i=0;i<ul.children.length;i++){
             ul.children[i].style.display = "block"
            
        } 
    }
}

const filterToDo = () =>{
   let regex = new RegExp(`^${filter.value}`,"i")
   for(let i=0;i<li.length;i++){
       if(!li[i].classList[0].match(regex)){
           li[i].style.display="none"
       }else{
           li[i].style.display="block"
       }
       
   }
}

const addTodo = (e)=>{
    e.preventDefault()
    if(newToDo.value.length<1){
        alert("Enter a To-Do")
    }else{
    window.localStorage.items += `<li class=${newToDo.value}><input type="checkbox" class="ulCheck">${newToDo.value}<span class="remove">Remove</span></li>`
    ul.innerHTML = window.localStorage.items
    }
    
    newToDo.value = ""
    
}

const removeTodo = (e)=>{
    let target = e.target
    if(target.classList.contains("remove")){
        target.parentElement.parentElement.removeChild(target.parentElement)
        window.localStorage.items = ul.innerHTML
  }
    
}


add.addEventListener("click",addTodo)
ul.addEventListener("click",removeTodo)
controlSection.addEventListener("click",hideComplete)
filter.addEventListener("keyup",filterToDo)