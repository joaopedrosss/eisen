console.log("Incializando servidor...")

/*() Eu aperto no button e deve aparecer uma todo
() Pegar o texto dentro input e por na todo
() Eu clico no x e devo excluir isso da minha vista
*/

function adicionarTodo(){
    let input = document.querySelector("input").value

    console.log(input)

    let li = document.createElement("li")

    li.innerHTML = input + '<span onclick="deletarTodo(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""


    console.log("Ta lá,vey")
   
}

function deletarTodo(obj){
    console.log(obj)

    obj.parentElement.remove()
    
}