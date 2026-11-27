// Dados dos 8 planetas em ordem a partir do Sol (do mais próximo ao mais distante)
const planetasSistemaSolar = [
  {
    id: "mercurio",
    nome: "Mercúrio",
    ordem: 1,
    tituloPosicao: "1ª Órbita (Mais perto do Sol)",
    tamanho: "O menor planeta do Sistema Solar (pouco maior que a nossa Lua).",
    temperatura: "Varia muito: chega a 430 °C de dia e cai para -180 °C à noite.",
    caracteristica: "Planeta rochoso cheio de crateras e quase sem atmosfera para segurar o calor.",
    explicacaoAcerto: "Isso mesmo! Mercúrio é o primeiro planeta a partir do Sol, o menor de todos e sofre grandes variações de temperatura.",
    explicacaoErro: "Não é esse! Lembre-se: o primeiro planeta a partir do Sol é o menor de todos e tem superfície cheia de crateras.",
    cor: "#9ca3af",
    tamanhoIcone: 14
  },
  {
    id: "venus",
    nome: "Vênus",
    ordem: 2,
    tituloPosicao: "2ª Órbita",
    tamanho: "Tamanho quase igual ao da Terra (chamado de planeta irmão da Terra).",
    temperatura: "O planeta mais quente do Sistema Solar, passando de 460 °C!",
    caracteristica: "Tem uma atmosfera muito densa feita de gás carbônico que cria um efeito estufa gigante.",
    explicacaoAcerto: "Excelente! Vênus é o 2º planeta e, por causa de suas nuvens densas que prendem o calor, é ainda mais quente que Mercúrio.",
    explicacaoErro: "Quase! Procure o 2º planeta a partir do Sol: ele tem tamanho parecido com a Terra e é o mais quente por causa do efeito estufa.",
    cor: "#f59e0b",
    tamanhoIcone: 18
  },
  {
    id: "terra",
    nome: "Terra",
    ordem: 3,
    tituloPosicao: "3ª Órbita",
    tamanho: "O maior entre os quatro planetas rochosos internos.",
    temperatura: "Média agradável de cerca de 15 °C, ideal para existir água líquida.",
    caracteristica: "Único planeta conhecido com oceanos na superfície e vida comprovada.",
    explicacaoAcerto: "Perfeito! A Terra ocupa a 3ª órbita, na distância ideal do Sol para manter água líquida e abrigar a vida.",
    explicacaoErro: "Ops! O 3º planeta a partir do Sol é a nossa casa, o único com oceanos de água líquida e vida.",
    cor: "#3b82f6",
    tamanhoIcone: 19
  },
  {
    id: "marte",
    nome: "Marte",
    ordem: 4,
    tituloPosicao: "4ª Órbita",
    tamanho: "Tem cerca de metade do tamanho da Terra (segundo menor planeta).",
    temperatura: "Bem frio, com média de -63 °C e calotas de gelo nos polos.",
    caracteristica: "Conhecido como Planeta Vermelho por causa do ferro enferrujado em seu solo.",
    explicacaoAcerto: "Mandou bem! Marte é o 4º planeta, o último dos rochosos, frio e famoso pela sua cor avermelhada.",
    explicacaoErro: "Ainda não! O 4º planeta é frio, menor que a Terra e conhecido como o Planeta Vermelho.",
    cor: "#ef4444",
    tamanhoIcone: 16
  },
  {
    id: "jupiter",
    nome: "Júpiter",
    ordem: 5,
    tituloPosicao: "5ª Órbita",
    tamanho: "O gigante do Sistema Solar! Caberiam mais de 1.300 Terras dentro dele.",
    temperatura: "Muito gelado nas nuvens superiores, por volta de -110 °C.",
    caracteristica: "Primeiro gigante gasoso, famoso por sua Grande Mancha Vermelha (uma tempestade enorme).",
    explicacaoAcerto: "Acertou! Júpiter é o 5º planeta e o maior de todo o Sistema Solar, formado principalmente por gases.",
    explicacaoErro: "Atenção aos sensores! Depois de Marte vem o maior planeta de todos, um gigante gasoso com uma enorme tempestade.",
    cor: "#d97706",
    tamanhoIcone: 30
  },
  {
    id: "saturno",
    nome: "Saturno",
    ordem: 6,
    tituloPosicao: "6ª Órbita",
    tamanho: "O segundo maior planeta, quase 10 vezes mais largo que a Terra.",
    temperatura: "Extremamente frio, com média de -140 °C.",
    caracteristica: "Famoso pelo seu sistema brilhante de anéis feitos de gelo e poeira.",
    explicacaoAcerto: "Muito bem! Saturno fica na 6ª órbita, é o segundo maior gigante gasoso e brilha com seus anéis de gelo.",
    explicacaoErro: "Não foi dessa vez! O 6º planeta é o segundo maior do Sistema Solar e é famoso pelos seus grandes anéis.",
    cor: "#eab308",
    tamanhoIcone: 26
  },
  {
    id: "urano",
    nome: "Urano",
    ordem: 7,
    tituloPosicao: "7ª Órbita",
    tamanho: "Cerca de 4 vezes maior que a Terra (um gigante de gelo).",
    temperatura: "Um dos mais gelados, chegando a -195 °C (menor temperatura registrada).",
    caracteristica: "Tem cor azul-esverdeada por causa do gás metano e gira quase deitado de lado.",
    explicacaoAcerto: "Excelente! Urano ocupa a 7ª órbita, é um gigante de gelo azulado que gira inclinado como uma bola rolando.",
    explicacaoErro: "Tente outra vez! O 7º planeta é um gigante de gelo azul-esverdeado que gira quase deitado.",
    cor: "#22d3ee",
    tamanhoIcone: 22
  },
  {
    id: "netuno",
    nome: "Netuno",
    ordem: 8,
    tituloPosicao: "8ª Órbita (Mais longe do Sol)",
    tamanho: "Quase do mesmo tamanho que Urano (cerca de 4 vezes maior que a Terra).",
    temperatura: "Gelado como o espaço profundo, com média de -200 °C.",
    caracteristica: "Cor azul intensa e possui os ventos mais rápidos e violentos do Sistema Solar.",
    explicacaoAcerto: "Missão completa! Netuno é o 8º e mais distante planeta do Sistema Solar, azul escuro e cheio de ventos supersônicos.",
    explicacaoErro: "Quase lá! Estamos buscando o 8º e último planeta, o mais distante do Sol, azul intenso e com ventos fortíssimos.",
    cor: "#2563eb",
    tamanhoIcone: 21
  }
];

// Variáveis de estado do jogo
let indiceRodadaAtual = 0;
let pontos = 0;
let vidas = 3;
let tempoInicioMs = 0;
let planetasEmbaralhados = [];
const pontuacaoMaxima = 800; // 100 pontos por planeta organizado

// Elementos da tela
const telaInicio = document.getElementById("tela-inicio");
const telaJogo = document.getElementById("tela-jogo");
const telaFim = document.getElementById("tela-fim");

const textoRodada = document.getElementById("texto-rodada");
const textoPontos = document.getElementById("texto-pontos");
const textoVidas = document.getElementById("texto-vidas");

const trilhaOrbitas = document.getElementById("trilha-orbitas");
const badgePosicao = document.getElementById("badge-posicao");
const pistaTamanho = document.getElementById("pista-tamanho");
const pistaTemperatura = document.getElementById("pista-temperatura");
const pistaCaracteristica = document.getElementById("pista-caracteristica");
const caixaFeedback = document.getElementById("caixa-feedback");
const gradePlanetas = document.getElementById("grade-planetas");

const tituloFim = document.getElementById("titulo-fim");
const mensagemFim = document.getElementById("mensagem-fim");
const pontosFinais = document.getElementById("pontos-finais");
const acertosFinais = document.getElementById("acertos-finais");

// Função para embaralhar a ordem dos botões dos planetas
function embaralharLista(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Atualiza o placar superior (rodada, pontos e vidas)
function atualizarPlacar() {
  const rodadaExibida = Math.min(indiceRodadaAtual + 1, planetasSistemaSolar.length);
  textoRodada.textContent = `${rodadaExibida} / ${planetasSistemaSolar.length}`;
  textoPontos.textContent = pontos;

  if (vidas > 0) {
    textoVidas.textContent = "❤️".repeat(vidas);
    textoVidas.setAttribute("aria-label", `${vidas} vidas restantes`);
  } else {
    textoVidas.textContent = "💔";
    textoVidas.setAttribute("aria-label", "Nenhuma vida restante");
  }
}

// Desenha as 8 vagas no visor espacial
function desenharOrbitas() {
  trilhaOrbitas.innerHTML = "";

  planetasSistemaSolar.forEach((planeta, index) => {
    const vaga = document.createElement("div");
    vaga.className = "vaga-orbita";

    if (index < indiceRodadaAtual) {
      // Órbita já organizada pelo jogador
      vaga.classList.add("preenchida");
      vaga.innerHTML = `
        <span class="bolinha-planeta" style="background-color: ${planeta.cor}; width: ${planeta.tamanhoIcone}px; height: ${planeta.tamanhoIcone}px;"></span>
        <span>${planeta.ordem}º ${planeta.nome}</span>
      `;
    } else if (index === indiceRodadaAtual) {
      // Órbita atual que precisa ser descoberta
      vaga.classList.add("atual");
      vaga.innerHTML = `
        <span>❓</span>
        <span>${planeta.ordem}ª Órbita</span>
      `;
    } else {
      // Órbitas futuras
      vaga.innerHTML = `
        <span>•</span>
        <span>${planeta.ordem}ª Órbita</span>
      `;
    }

    trilhaOrbitas.appendChild(vaga);
  });

  notificarAlturaPortal();
}

// Mostra as pistas da rodada atual
function carregarRodada() {
  const planetaAtual = planetasSistemaSolar[indiceRodadaAtual];

  badgePosicao.textContent = planetaAtual.tituloPosicao;
  pistaTamanho.textContent = planetaAtual.tamanho;
  pistaTemperatura.textContent = planetaAtual.temperatura;
  pistaCaracteristica.textContent = planetaAtual.caracteristica;

  desenharOrbitas();
  atualizarPlacar();
  notificarAlturaPortal();
}

// Cria os botões clicáveis para os 8 planetas
function criarBotoesPlanetas() {
  gradePlanetas.innerHTML = "";
  planetasEmbaralhados = embaralharLista(planetasSistemaSolar);

  planetasEmbaralhados.forEach((planeta) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "btn-planeta";
    botao.dataset.id = planeta.id;
    botao.innerHTML = `
      <span class="icone-planeta" style="background-color: ${planeta.cor};"></span>
      <span>${planeta.nome}</span>
    `;

    botao.addEventListener("click", () => verificarEscolha(planeta, botao));
    gradePlanetas.appendChild(botao);
  });
}

// Exibe mensagem curta explicando o acerto ou o erro
function mostrarFeedback(tipo, texto) {
  caixaFeedback.hidden = false;
  caixaFeedback.className = `caixa-feedback ${tipo}`;
  caixaFeedback.textContent = texto;
  notificarAlturaPortal();
}

// Verifica se o jogador clicou no planeta certo para a órbita atual
function verificarEscolha(planetaEscolhido, botaoClicado) {
  const planetaCorreto = planetasSistemaSolar[indiceRodadaAtual];

  if (planetaEscolhido.id === planetaCorreto.id) {
    // Acertou!
    pontos += 100;
    botaoClicado.disabled = true;
    mostrarFeedback("acerto", `✅ ${planetaCorreto.explicacaoAcerto}`);

    indiceRodadaAtual++;

    if (indiceRodadaAtual >= planetasSistemaSolar.length) {
      // Completou todas as 8 órbitas!
      atualizarPlacar();
      desenharOrbitas();
      setTimeout(() => finalizarJogo(true), 1200);
    } else {
      carregarRodada();
    }
  } else {
    // Errou!
    vidas -= 1;
    pontos = Math.max(0, pontos - 25);
    atualizarPlacar();
    mostrarFeedback("erro", `❌ Você escolheu ${planetaEscolhido.nome}. ${planetaCorreto.explicacaoErro}`);

    if (vidas <= 0) {
      setTimeout(() => finalizarJogo(false), 1400);
    }
  }
}

// Inicia ou reinicia a partida
function iniciarJogo() {
  indiceRodadaAtual = 0;
  pontos = 0;
  vidas = 3;
  tempoInicioMs = Date.now();

  caixaFeedback.hidden = true;
  telaInicio.hidden = true;
  telaFim.hidden = true;
  telaJogo.hidden = false;

  criarBotoesPlanetas();
  carregarRodada();
}

// Finaliza a partida (vitória ou derrota) e avisa o portal
function finalizarJogo(venceu) {
  telaJogo.hidden = true;
  telaFim.hidden = false;

  const tempoTotalMs = Date.now() - tempoInicioMs;

  if (venceu) {
    tituloFim.textContent = "🎉 Missão Concluída, Comandante!";
    mensagemFim.textContent = "Você identificou todas as pistas e organizou os 8 planetas do Sistema Solar na ordem certa!";
  } else {
    tituloFim.textContent = "⚠️ Energia da Nave Esgotada!";
    mensagemFim.textContent = "Os sensores superaqueceram após 3 erros. Revise as dicas de tamanho e temperatura e tente novamente!";
  }

  pontosFinais.textContent = `${pontos} / ${pontuacaoMaxima}`;
  acertosFinais.textContent = `${indiceRodadaAtual} / ${planetasSistemaSolar.length}`;

  notificarAlturaPortal();

  // Envia resultado final para o portal escolar
  window.parent.postMessage(
    {
      type: "vrgame:finish",
      score: pontos,
      maxScore: pontuacaoMaxima,
      timeMs: tempoTotalMs,
      detail: { jogo: "planetas-em-ordem" }
    },
    "*"
  );
}

// Eventos dos botões de iniciar e reiniciar
document.getElementById("btn-iniciar").addEventListener("click", iniciarJogo);
document.getElementById("btn-reiniciar").addEventListener("click", iniciarJogo);

// ==========================================================
// INTEGRAÇÃO COM O PORTAL ESCOLAR (CONTRATO OBRIGATÓRIO)
// ==========================================================

function notificarAlturaPortal() {
  const altura = document.documentElement.scrollHeight;
  window.parent.postMessage({ type: "vrgame:resize", height: altura }, "*");
}

// Escuta mensagens de tema e tela cheia enviadas pelo portal
window.addEventListener("message", (evento) => {
  const dados = evento.data;
  if (!dados || typeof dados !== "object") return;

  if (dados.type === "vrgame:theme") {
    const tema = dados.theme || dados.value;
    if (tema === "light" || tema === "dark") {
      document.documentElement.setAttribute("data-theme", tema);
    }
  }

  if (dados.type === "vrgame:fullscreen") {
    if (dados.fullscreen) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
    notificarAlturaPortal();
  }
});

// Atualiza o tamanho sempre que a janela mudar
window.addEventListener("resize", notificarAlturaPortal);

// Avisa o portal assim que o jogo terminar de carregar
window.addEventListener("DOMContentLoaded", () => {
  window.parent.postMessage({ type: "vrgame:ready" }, "*");
  notificarAlturaPortal();
});