function hide(e){
    console.log(e.target.value)
   // e.target.value;
}

async function getTarefas() {
    const url = "http://localhost:3001/tarefas"
    await fetch(url)
        .then(res => res.json())
        .then(res => {
            const tarefas = res.tarefas

            for (let i = 0; i < tarefas.length; i++) {
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

                btnEditar.addEventListener("click", () => {
                    const modalEdit = document.querySelector(".modal-edit")
                    modalEdit.style.display = "block"
                })

                btnEditar.innerHTML = '<img src="/img/lapis.png">'
                div2.appendChild(btnEditar)

                var btnExcluir = document.createElement("button");
                btnExcluir.classList.add("btn-apagar");
                btnExcluir.addEventListener("click", () => {
                    const modalDelete = document.querySelector(".modal-delete")
                    modalDelete.style.display = "block"
                })

                btnExcluir.innerHTML = '<img src="/img/lixeira.png">'
                div2.appendChild(btnExcluir)

                li.appendChild(div1)
                li.appendChild(div2)

                var ul = document.getElementsByClassName("lista")
                ul[0].appendChild(li)
                li.setAttribute("name", tarefas[i].id)
               // console.log(li.getAttribute("name"))
                btnEditar.addEventListener("click", () => {
                    console.log(li.getAttribute("name"))
                   // li.addEventListener("click", hide, false)
                })
            }
        })
}

function fecharModal() {
    const modalEdit = document.querySelector(".modal-edit")
    modalEdit.style.display = "none"

    const modalDelete = document.querySelector(".modal-delete")
    modalDelete.style.display = "none"
}

document.addEventListener("DOMContentLoaded", () => {
    getTarefas()
});