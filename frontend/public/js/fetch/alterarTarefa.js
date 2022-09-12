async function alterarTarefa(){
    const inputTitulo = document.querySelector("#titulo-edit");
    const titulo = inputTitulo.value;

    const inputDescricao = document.querySelector("#descricao-edit");
    const descricao = inputDescricao.value;
   
    const tarefaEdit = {
        titulo: titulo,
        descricao: descricao
    }

    const id = ""
    const url = `http://localhost:3001/tarefas/${id}`
    
    await fetch(url, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tarefaEdit)
    })
    .then(res => res.json())
    .then(res => console.log(res.message))
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!")
});