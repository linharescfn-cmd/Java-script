if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

function trocarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classlist.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}

// fetch na api local
function buscarFrase() {
    fetch("dados.json")
        .then(res => res.json())
        .then(dados => {
            document.getElementById("frase").innerText = `
            <h3>${dados.titulo}</h3>
            <p>${dados.texto}</p>`;

        })
        .catch(() => {
        document.getElementById("frase").innerText = "Erro ao carregar dados.";

    });
}
