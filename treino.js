function getEventoAleatorio() {
    const eventos = ["Maratona", "Triathlon", "Pentathlon"];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return eventos[numeroAleatorio];
}

function getDiasTreino(evento) {
    if (evento === "Maratona") {
        return 50;
    } else if (evento === "Triathlon") {
        return 100;
    } else if (evento === "Pentathlon") {
        return 200;
    }
}

function logEvento(nome, evento) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>${nome} vai participar do evento: ${evento}</p>`;
}

function logTempo(nome, dias) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML += `<p>${nome} terá ${dias} dias para treinar.</p>`;
}

function iniciarDesafio() {
    const nome = prompt("Qual é o seu nome?");
    const eventoAleatorio = getEventoAleatorio();
    const diasTreino = getDiasTreino(eventoAleatorio);
    
    logEvento(nome, eventoAleatorio);
    logTempo(nome, diasTreino);
}
