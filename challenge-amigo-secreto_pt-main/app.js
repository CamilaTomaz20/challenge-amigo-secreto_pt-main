let amigos = [];  

function adicionarAmigo() {
    const nomeInput = document.getElementById("nomeAmigo");  
    const nome = nomeInput.value.trim();  

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);  
        nomeInput.value = "";  
        atualizarLista();  
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");  
    listaAmigos.innerHTML = "";  

    amigos.forEach(amigo => {
        const li = document.createElement("li");  
        li.textContent = amigo;  
        listaAmigos.appendChild(li);  
    });
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;  
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];  
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}


