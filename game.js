let timer = null;
let gameStarted = false;

const startGameDiv = document.getElementById('startGame');

if (startGameDiv) {
    startGameDiv.addEventListener('mouseenter', () => {
        if (!gameStarted) {
            timer = setTimeout(() => {
                startSimpleGame();
                gameStarted = true;
            }, 3000);
        }
    });

    startGameDiv.addEventListener('mouseleave', () => {
        clearTimeout(timer);
    });
}

function startSimpleGame() {
    // Esconde o conteúdo da página
    document.body.innerHTML = '';

    // Cria o container do jogo
    const gameContainer = document.createElement('div');
    gameContainer.style.position = 'relative';
    gameContainer.style.width = '100vw';
    gameContainer.style.height = '100vh';
    gameContainer.style.overflow = 'hidden';
    document.body.appendChild(gameContainer);

    const title = document.createElement('h2');
    title.innerText = 'Clique no círculo dourado!';
    title.style.color = '#bfa046';
    title.style.textAlign = 'center';
    title.style.marginTop = '30px';
    gameContainer.appendChild(title);

    const scoreLabel = document.createElement('div');
    scoreLabel.innerText = 'Pontos: 0';
    scoreLabel.style.color = '#fff';
    scoreLabel.style.fontSize = '1.5em';
    scoreLabel.style.margin = '20px';
    scoreLabel.style.position = 'fixed';
    scoreLabel.style.top = '35px';
    scoreLabel.style.left = '50%';
    scoreLabel.style.transform = 'translateX(-50%)';
    scoreLabel.style.zIndex = '1000';
    gameContainer.appendChild(scoreLabel);

    const circle = document.createElement('div');
    circle.classList.add('circle');
    // Estilo do círculo
    circle.style.width = '60px';
    circle.style.height = '60px';
    circle.style.borderRadius = '50%';
    circle.style.background = 'gold';
    circle.style.position = 'absolute';
    circle.style.cursor = 'pointer';
    circle.style.boxShadow = '0 0 15px #bfa046';
    gameContainer.appendChild(circle);

    let score = 0;

    function moveCircleRandomly() {
        const containerRect = gameContainer.getBoundingClientRect();
        const circleSize = 60;
        const maxLeft = containerRect.width - circleSize;
        const maxTop = containerRect.height - circleSize;

        const left = Math.random() * maxLeft;
        const top = Math.random() * maxTop;

        circle.style.left = left + 'px';
        circle.style.top = top + 'px';
    }

    moveCircleRandomly();

    circle.addEventListener('click', () => {
        score++;
        scoreLabel.innerText = 'Pontos: ' + score;
        moveCircleRandomly();

        // Reseta a página ao chegar em 20 pontos
        if (score >= 20) {
            location.reload();
        }
    });
}