const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const progress = document.querySelector(".progress");
const form = document.getElementById("formCadastro");
let currentStep = 0;

/* Máscara telefone */
document.getElementById("telefone").addEventListener("input", function () {
    this.value = this.value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{4})$/, "$1-$2");
});

/* Máscara CEP */
document.getElementById("cep").addEventListener("input", function () {
    this.value = this.value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2");
});

/* Avançar */
nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!validarEtapa(currentStep)) return;

        steps[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");

        atualizarProgresso();

        if (currentStep === 3) preencherResumo();
    });
});

/* Voltar */
prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        currentStep--;
        steps[currentStep].classList.add("active");
        atualizarProgresso();
    });
});

/* Progresso visual */
function atualizarProgresso() {
    progress.style.width = ((currentStep + 1) / 4) * 100 + "%";
}

/* Validação */
function validarEtapa(step) {
    const campos = steps[step].querySelectorAll("input, select");

    for (let campo of campos) {
        if (campo.required && !campo.value.trim()) {
            alert("Preencha todos os campos obrigatórios.");
            return false;
        }
    }

    if (step === 0) {
        const email = document.getElementById("email").value;
        if (!email.includes("@")) {
            alert("E-mail inválido!");
            return false;
        }

        const telefone = document.getElementById("telefone").value.replace(/\D/g, "");
        if (telefone.length < 10) {
            alert("Telefone deve ter ao menos 10 dígitos.");
            return false;
        }
    }

    if (step === 1) {
        const cep = document.getElementById("cep").value.replace(/\D/g, "");
        if (cep.length !== 8) {
            alert("CEP deve ter 8 dígitos.");
            return false;
        }
    }

    if (step === 2) {
        const interesses = Array.from(document.getElementById("interesses").selectedOptions);
        if (interesses.length === 0) {
            alert("Selecione ao menos uma área de interesse.");
            return false;
        }
    }

    return true;
}

/* Resumo final */
function preencherResumo() {
    const resumo = document.getElementById("resumo");

    resumo.innerHTML = `
        <p><strong>Nome:</strong> ${nome.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Telefone:</strong> ${telefone.value}</p>
        <p><strong>Nascimento:</strong> ${nascimento.value}</p>
        <br>
        <p><strong>Endereço:</strong> ${logradouro.value}, ${numero.value}, ${bairro.value}, ${cidade.value} - ${estado.value}</p>
        <p><strong>CEP:</strong> ${cep.value}</p>
        <p><strong>Complemento:</strong> ${complemento.value}</p>
        <br>
        <p><strong>Profissão:</strong> ${profissao.value}</p>
        <p><strong>Empresa:</strong> ${empresa.value}</p>
        <p><strong>Interesses:</strong> ${Array.from(interesses.selectedOptions).map(o => o.text).join(", ")}</p>
        <p><strong>Sobre você:</strong> ${sobre.value}</p>
    `;
}

/* Mensagem final */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".container").innerHTML =
        "<h2>Cadastro realizado com sucesso! 🎉</h2>";
});
