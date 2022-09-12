const btn = document.querySelector(".btn-enviar")

btn.addEventListener("click", () => {
    criarTarefa()
    location.reload()
})

async function criarTarefa() {
    const inputTitulo = document.querySelector("#titulo-tarefa");
    const titulo = inputTitulo.value;

    const inputDescricao = document.querySelector("#descricao-tarefa");
    const descricao = inputDescricao.value;

    const url = "http://localhost:3001/tarefas"

    const novaTarefa = {
        titulo: titulo.trim(),
        descricao: descricao.trim()
    }

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON",
        },
        body: JSON.stringify(novaTarefa)
    })
        .then(res => res.json())
        .then(res => {
            console.log(novaTarefa)
            console.log(res)
        });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!")
});