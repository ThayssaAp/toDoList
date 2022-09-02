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

    const novaPergunta = {
        titulo: titulo.trim(), 
        descricao: descricao.trim()
    }

    try{
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON",
        },
        body: JSON.stringify(novaPergunta)
    })
    .then(res => res.json())
    .then(res => {
        console.log(novaPergunta)
        console.log(res)
    });
    }
    catch(error) {
        console.log(error)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!")
});