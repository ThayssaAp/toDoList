async function deletarTarefa(){
    const li = document.getElementsByClassName("cx-tarefa")
    console.log(li)
    const name = li[0].getAttribute("name")
    console.log(name)

    const id = name
    const url = `http://localhost:3001/tarefas/${id}`
    
    await fetch(url, {
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(res => {
        console.log(res.message)
        location.reload()
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!")
});