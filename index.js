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

cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        // Oculta os outros cards
        cards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.style.opacity = 0;
            }
        });

        // Oculta o resto da tela
        titulo.style.opacity = 0;
        subtitulo.style.opacity = 0;

        // Adequações 
        card.style.transform = "translateY(-300px) translateX(-400px)";
        card.style.borderColor = "#00b894";
        cardsContainer.style.cursor = "default";
        cardsContainer.style.pointerEvents = "none";
        card.style.cursor = "default";
        cutLine.style.opacity = 1;
        cutLine.style.zIndex = 2;
        versus.style.opacity = 1;
        versus.style.zIndex = 3;
        oponent.style.opacity = 1;
        oponent.style.transform = "translate(400px, 10px)";
        oponent.style.borderColor = "#00b894";
        

        setTimeout(() => {
            // Gera uma nova escolha aleatória
            const newRandom = Math.floor(Math.random() * vetor.length);

            // Atualiza a imagem do oponente com base na nova escolha
            switch(newRandom){
                case 0: 
                    oponentCard.src = "images/pedra.png";
                    break;
                case 1:
                    oponentCard.src = "images/papel.png";
                    break;
                case 2:
                    oponentCard.src = "images/tesoura.png";
                    break;
            }
        }, 1000);

        if(card === cards[0]) {
            card.style.transform = "translateY(-300px) translateX(-200px)";
        } else if (card === cards[2]) {
            card.style.transform = "translateY(-300px) translateX(-600px)";
        }
    });
});
