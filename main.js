let button=document.getElementById('add');
let todoContainer=document.getElementById('todoContainer');
let input=document.getElementById('input');
button.addEventListener('click',function(){
    var para=document.createElement('p');
    para.classList.add('paragraph-styling');
    para.innerText=input.value;
    todoContainer.appendChild(para);
    input.value="";
    para.addEventListener('dblclick',function(){
        todoContainer.removeChild(para);
    })
})