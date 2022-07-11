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

let edit = false;

function getTarefas() {

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
    
        var h2 = document.createElement("h2");
        h2.innerHTML = tarefas[i].titulo
        div1.appendChild(h2);
    
        var p = document.createElement("p");
        p.innerHTML = tarefas[i].descricao
        div1.appendChild(p);
    
        var div2 = document.createElement("div");
    
        var btnEditar = document.createElement("button");
        btnEditar.classList.add("btn-editar");
        btnEditar.innerHTML = '<img src="./src/img/lapis.png">'
        div2.appendChild(btnEditar)
    
        var btnExcluir = document.createElement("button");
        btnExcluir.classList.add("btn-apagar");
        btnExcluir.innerHTML = '<img src="./src/img/lixeira.png">'
        div2.appendChild(btnExcluir)
    
        li.appendChild(div1)
        li.appendChild(div2)
    
        var ul = document.getElementsByClassName("lista")
    
        ul.appendChild(li)   
    }
}

function abrirModal() {
    edit = true;
    let modal = document.querySelector(".modal")

    if (edit) {
        modal.style.display = 'block';
        document.body.style.background = "rgba(0,0,0,0.1)";
    } else {
        modal.style.display = "none";
        document.body.style.background = "#FFF";
    }
};

function fecharModal() {
    let modal = document.querySelector(".modal")

    if (!edit) {
        modal.style.display = "none";
        document.body.style.background = "#FFF";
    } else {
        modal.style.display = "none";
        document.body.style.background = "#FFF";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!")
    adcTarefa()
});