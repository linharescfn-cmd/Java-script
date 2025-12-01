function iniciar() {
    let nome = prompt("Qual é o seu nome?");
let idade = prompt("Quantos anos você tem?");
if (idade < 18) {
    alert("Você é menor de idade.");
} else {
    alert("Você é maior de idade.");
}
console.log("Olá " + nome + ", você tem " + idade + " anos.");

document.getElementById("apresentacao").innerText = "Olá, me chamo " + nome + " e tenho " + idade + " anos.";

}

let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

console.log("Primeiro nome:", nomes[0]);
console.log("Último nome:", nomes[nomes.length - 1]);
console.log("Quantidade de nomes:", nomes.length);

    
let lista = [];  
function adicionar() {
            
        let valor = document.getElementById("campo").value;

            // Evita adicionar texto vazio
            if (valor === "") {
                alert("Digite algo antes de adicionar!");
                return;
            }

            // Adiciona ao array
            lista.push(valor);

            // Mostra na tela
            document.getElementById("resultado").innerText = lista.join(", ");
            document.getElementById("campo").value = ""; // Limpa o campo

         
}



