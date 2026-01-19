console.log("Incializando servidor...")

/*() Eu aperto no button e deve aparecer uma todo
() Pegar o texto dentro input e por na todo
() Eu clico no x e devo excluir isso da minha vista
*/

function adicionarTodo(){
    let input = document.querySelector("input").value

    console.log(input)

    document.querySelector("input").value = ""

    let li = document.createElement("li")

    li.innerHTML = input + "<span>❌</span>"

    console.log(li)
   
}