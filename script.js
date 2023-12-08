let addbutton = document.getElementById('addbutton');
let list = document.getElementById('list');
let inputbox = document.getElementById('inputbox');

addbutton.addEventListener('click',function(){
    let listItem = document.createElement('li')
    listItem.classList.add('list-styling');
    listItem.innerHTML = inputbox.value;
    list.appendChild(listItem);
    inputbox.value="";

    listItem.addEventListener('click', function(){
        listItem.style.textDecoration = "line-through rgb(99, 5, 136) 7px";
    })

    listItem.addEventListener('dblclick',function(){
        list.removeChild(listItem);
    })
})


