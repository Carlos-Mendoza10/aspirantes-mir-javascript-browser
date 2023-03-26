let input = document.querySelector('#texto');
let boton = document.querySelector('.agregar');
let lista = document.getElementById('lista')
let botonDelete = document.querySelector('.btn-Delete');
//eventos
boton.addEventListener('click', handleSubmit)
botonDelete.addEventListener('click', handleDelete)

//las funciones
function handleSubmit(event){
    event.preventDefault()
    let li = createlist(input.value)
    lista.appendChild(li)
    input.value = ""
}
function createlist (tarea){
    const itemlista = document.createElement("li")
    itemlista.setAttribute("class","item")
    const caja = document.createElement("input")
    caja.setAttribute("type", "checkbox");
    caja.setAttribute("class","cajatarea")
    const texto = document.createElement("label")
    texto.textContent = tarea
    itemlista.classList.add("item")
    texto.classList.add("label")
    const linea = document.createElement("hr")
    linea.setAttribute("class","linea")
    
    itemlista.appendChild(caja)
    itemlista.appendChild(texto)
    itemlista.appendChild(linea)

    return itemlista

}

function handleDelete(){
    let li = lista.children
    let caja = document.getElementsByClassName('cajatarea')
    for(i = 0; i < li.length; i++) {
        if (caja[i].checked){
          li[i].parentNode.removeChild(li[i]);
          i= i - 1
        }

    }
}
