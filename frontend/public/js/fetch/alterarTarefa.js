async function alterarTarefa(){
    // const li = document.getElementsByClassName("cx-tarefa")
    // console.log(li)
    // const name = li[i].getAttribute("name")
    // console.log(name)

    const inputTitulo = document.querySelector("#titulo-edit");
    const titulo = inputTitulo.value;

    const inputDescricao = document.querySelector("#descricao-edit");
    const descricao = inputDescricao.value;
   
    const tarefaEdit = {
        titulo: titulo,
        descricao: descricao
    }

    const id = name
    const url = `http://localhost:3001/tarefas/${id}`
    
    await fetch(url, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tarefaEdit)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res.message)
        window.alert("Tarefa alterada com sucesso!");
        location.reload()
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!")
});