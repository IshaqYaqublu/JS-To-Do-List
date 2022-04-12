let button1 = document.getElementById("addtoDo");

let toDoContainer = document.getElementById("toDoContainer")

let inputText = document.getElementById("inputText");

let button2 = document.getElementById("cleartoDo");


// Add butonunun funksyalari
button1.addEventListener("click", function(){
    let paragraph= document.createElement("p")
    paragraph.classList.add("paragraph-styling")
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML= inputText.value;
    inputText.value = ""

    //yaratdigimiz p teginin ustunde click edende xet cekir.
    paragraph.addEventListener("click" , function(){
        paragraph.style.textDecoration = "line-through"
        paragraph.style.color = "red"

    })

    //yaratdigimiz p teginin ustunde iki defe click edende silir.
    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    })
})
//Butov divi silir..
button2.addEventListener("click", function(){
    toDoContainer.remove();
})