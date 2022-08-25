document.getElementById('btn').addEventListener('click', function(event){
    const name = event.target.innerText;
    if(isname(name)){
        console.log(name);
    }
    else{
        const typeNameField = document.getElementById('name-field');
        typeNameField.value = name;
    }
})