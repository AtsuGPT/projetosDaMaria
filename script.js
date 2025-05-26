<<<<<<< HEAD
const quiz = [ {
    question: "Qual a minha comida favorita?",
    options: ["Pizza", "Macarrão", "Você", "Hamburguer"],
    answer: 2
}, {
    question: "Qual a minha cor favorita?",
    options: ["Roxo", "Preto", "Vermelho", "Azul"],
    answer: 1
}, {
    question: "Qual o meu filme favorito?",
    options: ["Django: Livre", "Bastardos Inglórios", "Transformers", "Carros"],
    answer: 0
}, {
    question: "Qual o meu desenho favorito?",
    options: ["Steven Universo", "Gumball", "Apenas um show", "Hora de Aventura"],
    answer: 1
}, {
    question: "O que mais me irrita?",
    options: ["Gente burra", "Você", "Cavalo", "Trabalhar"],
    answer: 0
}, {
    question: "Qual a minha bebida favorita?",
    options: ["Energetico", "Suco de maracujá", "Coca-cola", "Vodka"],
    answer: 0
}, {
    question: "Pra onde eu gostaria de viajar?",
    options: ["Reino Unido", "Sul do Brasil", "França", "Estados Unidos"],
    answer: 2
}, {
    question: "O que você acha que eu mais gosto em você?",
    options: ["Bundão grande", "Cabelos", "Nossa relação", "Xoxota"],
    answer: 2
}, {
    question: "Meu maior arrependimento?",
    options: ["Namorar você", "Não terminar TLOU com você", "Começar a faculdade", "Terminar com você"],
    answer: 1
}, {
    question: "Qual meu jogo favorito?",
    options: ["TLOU", "God of War", "Red Dead Redemption", "GTA V"],
    answer: 0
}]
let atual = 0;
let pontos = 0;

function iniciarQuiz() {
  const intro = document.getElementById("intro");
  intro.classList.add("fade-out");
  setTimeout(() => {
    mostrarPergunta();
  }, 500);
}


function mostrarPergunta() {
    const container = document.getElementById("quiz-container");
    const q = quiz[atual];
  
    container.innerHTML = `
      <div class="pergunta">
        <h2 class="h2pergunta">${q.question}</h2>
        <div class="options-grid">
          ${q.options.map((option, index) => `
            <button class="option" onclick="responder(${index})">${option}</button>
          `).join('')}
        </div>
      </div>
    `;
  }
  
function responder(index){
  const botoes = document.querySelectorAll(".options-grid .option");
  const correta = quiz[atual].answer;

  botoes.forEach(btn => btn.disabled = true);
    if(index === quiz[atual].answer){
      botoes[index].classList.add("correta");
        pontos++;
} else {
      botoes[index].classList.add("errada");
      botoes[correta].classList.add("correta");
    }
    setTimeout(() => {
        atual++;
    if(atual < quiz.length){
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
    }, 1000);
  }

function mostrarResultado() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <div class="resultado">
      <h2 class="h2resultado">Você acertou ${pontos} de ${quiz.length} perguntas!</h2>
      <p class="msgfinal">${mensagemFinal()}</p>
      </div>`
}
function mensagemFinal() {
  if (pontos === quiz.length) {
    return "Você me conhece bem, merece 60 reais em Ifood!";
  } else if (pontos >= 7) {
    return "Mais ou menos, você merece 40 reais em Ifood!";
  } else {
    return "Você devia me mandar um Ifood de 20 reais!";
  }
}
=======
const valor = document.getElementById("valor");
const range = document.getElementById("mood-range");

function atualizarValor() {
  if (valor <= 20) texto = "muito triste";
  if (valor <= 40) texto = "triste";
  if (valor <= 60) texto = "neutro";
  if (valor <= 80) texto = "feliz";
  if (valor <= 100) texto = "muito feliz";
}
function atualizar() {
    const val = parseInt(range.value);
    let texto = '';
    valor.textContent = texto;
}

range.addEventListener("input", atualizar);
atualizar();
>>>>>>> ba7de0fcf8606c689ff7b31d16fbfbaa6d2d91ef
