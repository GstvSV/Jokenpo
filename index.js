const body = document.querySelector(".body");
const titulo = document.querySelector(".title");
const subtitulo = document.querySelector(".subtitle");
const cards = document.querySelectorAll(".card");
const cardsContainer = document.querySelector(".cards");
const cutLine = document.querySelector(".line"); 
const versus = document.querySelector(".vs");
const oponent = document.querySelector(".oponente");
const oponentCard = document.querySelector(".oponente-card");
const vetor = [0,1,2];
const random = Math.floor(Math.random() * vetor.length);
const resetButton = document.querySelector(".reset");
const placar = document.querySelector(".placar");
const win = document.querySelector(".vitorias")
const tie = document.querySelector(".empates")
const defeat = document.querySelector(".derrotas")

let vitoria = 0;
let derrota = 0;
let empate = 0;

function reset(card){
    resetButton.addEventListener("click", () => {
        card.style.transform = "translate(0)";
        card.style.borderColor = " #e2504c";
        cardsContainer.style.cursor = "default";
        cardsContainer.style.pointerEvents = "all";
        card.style.cursor = "pointer";
        cutLine.style.opacity = 0;
        cutLine.style.zIndex = -1;
        versus.style.display = "none";
        versus.style.opacity = 0;
        versus.style.zIndex = -1;
        versus.innerHTML = "vs";
        versus.style.color = "white";
        oponent.style.transform = "translate(300px, 300px)";
        oponent.style.borderColor = "#00b894";
        titulo.style.opacity = 1;
        subtitulo.style.opacity = 1;
        resetButton.style.opacity = 0;
        resetButton.style.pointerEvents = "none";
        placar.style.opacity = 1;
        cards.forEach((card,i) => {
            card.style.opacity = "1";
        })
        oponent.style.opacity = 0;
        oponentCard.src = " ";
    })
}

function hideElements() {
    titulo.style.opacity = 0;
    subtitulo.style.opacity = 0;
}

function hideOtherCards(selectedCard) {
    cards.forEach((otherCard) => {
        if (otherCard !== selectedCard) {
            otherCard.style.opacity = 0;
        }
    });
}

function performInitialAdjustments(card) {
    card.style.transform = "translateY(-150px) translateX(-500px)";
    card.style.borderColor = "#00b894";
    cardsContainer.style.cursor = "default";
    cardsContainer.style.pointerEvents = "none";
    card.style.cursor = "default";
    cutLine.style.opacity = 1;
    cutLine.style.zIndex = 2;
    versus.style.display = "block";
    versus.style.opacity = 1;
    versus.style.zIndex = 3;
    oponent.style.opacity = 1;
    oponent.style.transform = "translate(500px, 50px)";
    oponent.style.borderColor = "#00b894";
    placar.style.opacity = 0;
}

function updateGameResult(newRandom, card) {
    switch(newRandom){
        case 0: 
            oponentCard.src = "images/pedra.png";
            if(card.classList.contains("pedra")){
                versus.innerHTML = "Empate";
                empate++;
            }else if(card.classList.contains("papel")){
                versus.innerHTML = "Vitória";
                vitoria++;
            }else if(card.classList.contains("tesoura")){
                versus.innerHTML = "Derrota";
                derrota++;
            }
            break;
        case 1:
            oponentCard.src = "images/papel.png";
            if(card.classList.contains("pedra")){
                versus.innerHTML = "Derrota";
                derrota++;
            }else if(card.classList.contains("papel")){
                versus.innerHTML = "Empate";
                empate++;
            }else if(card.classList.contains("tesoura")){
                versus.innerHTML = "Vitória";
                vitoria++;
            }
            break;
        case 2:
            oponentCard.src = "images/tesoura.png";
            if(card.classList.contains("pedra")){
                versus.innerHTML = "Vitória";
                vitoria++
            }else if(card.classList.contains("papel")){
                versus.innerHTML = "Derrota";
                derrota++
            }else if(card.classList.contains("tesoura")){
                versus.innerHTML = "Empate";
                empate++;
            }
            break;
    }

        win.innerHTML = vitoria;
        tie.innerHTML = empate;
        defeat.innerHTML = derrota;
    
    // Código para atualizar as bordas e cores com base no resultado
    if(versus.innerHTML === "Derrota"){
        versus.style.color = "black";
        oponent.style.borderColor = "lightgreen"
        card.style.borderColor = "black";
    }else if(versus.innerHTML === "Vitória"){
        versus.style.color = "lightgreen";
        oponent.style.borderColor = "black";
        card.style.borderColor = "lightgreen";
    }else{
        oponent.style.borderColor = "white";
        card.style.borderColor = "white";
    }

    resetButton.style.opacity = 1;
    resetButton.style.pointerEvents = "all";
}

function adjustCardPosition(card){
    if(card === cards[0]) {
        card.style.transform = "translateY(-150px) translateX(-300px)";
    } else if (card === cards[2]) {
        card.style.transform = "translateY(-150px) translateX(-700px)";
    }
}

cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        
        hideOtherCards(card);

        hideElements();

        performInitialAdjustments(card);

        adjustCardPosition(card);

        setTimeout(() => {
            // Gera uma nova escolha aleatória
            const newRandom = Math.floor(Math.random() * vetor.length);

            // Atualiza a imagem do oponente com base na nova escolha
            updateGameResult(newRandom, card);
        }, 2000);
        reset(card);
        
    });
});





