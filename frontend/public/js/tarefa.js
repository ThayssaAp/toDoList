const tarefas = [{
    id: 'sdjoiaj71821e1d',
    descricao: 'lavar a louça',
    titulo: "tarefas domesticas"
},
{
    id: 'sdjoiaj718vyfy',
    descricao: 'limpar o quarto',
    titulo: "tarefas"
}]

async function criarTarefa() {
    const inputTitulo = document.querySelector("#titulo-tarefa");
    const titulo = inputTitulo.value;

    const inputDescricao = document.querySelector("#descricao-tarefa");
    const descricao = inputDescricao.value; 

    const url = "http://localhost:3001/tarefas"

    const novaPergunta = {
        titulo: titulo, 
        descricao: descricao
    }

    try{
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(novaPergunta)
    })
    .then(res => res.json())
    .then(res => console.log(novaPergunta));
    }
    catch(error) {
        console.log(error)
    }
}

function adcClick(){
    let btnAdc = document.getElementsByClassName("btn-enviar")

    btnAdc.addEventListener("click", () => {
        adcTarefa()
    })
}

function adcTarefa() {
    for(let i=0; i < tarefas.length; i++){
        var li = document.createElement("li");
        li.classList.add("cx-tarefa");
    
        var div1 = document.createElement("div");
        div1.classList.add("nome-tarefa");
    
        var h2 = document.createElement("h2");
        h2.innerHTML = tarefas[i].titulo
        div1.appendChild(h2);
    
        var p = document.createElement("p");
        p.innerHTML = tarefas[i].descricao
        div1.appendChild(p);
    
        var div2 = document.createElement("div");
        div2.classList.add("botoes-tarefa")
    
        var btnEditar = document.createElement("button");
        btnEditar.classList.add("btn-editar");
        btnEditar.innerHTML = '<img src="/img/lapis.png">'
        div2.appendChild(btnEditar)
    
        var btnExcluir = document.createElement("button");
        btnExcluir.classList.add("btn-apagar");
        btnExcluir.innerHTML = '<img src="/img/lixeira.png">'
        div2.appendChild(btnExcluir)
    
        li.appendChild(div1)
        li.appendChild(div2)
    
        var ul = document.getElementsByClassName("lista")
        ul[0].appendChild(li)   
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!")
    adcTarefa()
});