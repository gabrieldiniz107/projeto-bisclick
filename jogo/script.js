document.addEventListener("DOMContentLoaded", function() {
    let moedas = 0;
    let nivelPersonagem = 1;
    let custoUpgrade = 10; // Custo inicial do upgrade
    const moedasElement = document.getElementById("moedas");
    const nivelElement = document.getElementById("nivel");
    const custoUpgradeElement = document.getElementById("custoUpgrade");
    const clickButton = document.getElementById("clickButton");
    const upgradeButton = document.getElementById("upgradeButton");
    const personagemImg = document.getElementById("personagemImg");
    const container = document.querySelector(".container");
  
    clickButton.addEventListener("click", function() {
      moedas++;
      moedasElement.textContent = moedas;
    });
  
    upgradeButton.addEventListener("click", function() {
      if (moedas >= custoUpgrade) {
        moedas -= custoUpgrade;
        moedasElement.textContent = moedas;
        nivelPersonagem++;
        nivelElement.textContent = nivelPersonagem;
        custoUpgrade = 10 * nivelPersonagem; // Atualiza o custo do próximo upgrade
        custoUpgradeElement.textContent = custoUpgrade;
        personagemImg.src = `assets/personagem${nivelPersonagem}.png`; // Atualiza a imagem do personagem de acordo com o nível
      } else {
        alert("Você não tem moedas suficientes para comprar este upgrade.");
      }
      
      // Verifica se há mais personagens disponíveis
      if (`personagem${nivelPersonagem}.png` === 'personagem6.png') {
        container.innerHTML = "<h1>Você comprou todos os personagens. Parabéns!</h1>";
        const reloadButton = document.createElement("button");
        reloadButton.textContent = "Voltar ao início";
        reloadButton.addEventListener("click", function() {
          location.reload(); // Recarrega a página quando o botão é clicado
        });
        container.appendChild(reloadButton);
      }
    });
  });
  