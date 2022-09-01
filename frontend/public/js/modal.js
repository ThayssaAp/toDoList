let edit = false;
let openModal = document.getElementsByClassName('nome-tarefa');

for(let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", () => {
        console.log("clickou!")
        abrirModal()
    });    
}

function abrirModal() {
    edit = true;
    let modal = document.querySelector(".modal");

    if (edit) {
        modal.style.display = 'block';
        document.body.style.background = "rgba(0,0,0,0.1)";
    } else {
        modal.style.display = "none";
        document.body.style.background = "#FFF";
    };
};

function fecharModal() {
    let modal = document.querySelector(".modal");

    if (!edit) {
        modal.style.display = "none";
        document.body.style.background = "#FFF";
    } else {
        modal.style.display = "none";
        document.body.style.background = "#FFF";
    };
};