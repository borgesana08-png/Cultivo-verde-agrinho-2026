// Função para controlar a alternância das abas (Manejo do Solo, Água e Pragas)
function openTab(evt, tabName) {
    // Esconde todos os conteúdos das abas
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Mostra a aba atual e adiciona a classe "active" ao botão que foi clicado
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Interatividade do Quiz / Validação
document.getElementById('btn-quiz').addEventListener('click', function() {
    const resultadoDiv = document.getElementById('quiz-resultado');
    
    // Simulação de resposta educativa para o projeto Agrinho
    resultadoDiv.innerHTML = `
        <h4>💡 Diagnóstico Ecológico:</h4>
        <p><strong>Parabéns pelo interesse em melhorar!</strong> O cultivo correto exige planejamento. Lembre-se sempre de rotacionar suas culturas e proteger o solo com palhada. O Agroforte depende diretamente da preservação do meio ambiente.</p>
    `;
    
    // Remove a classe "hidden" para exibir o resultado na tela
    resultadoDiv.classList.remove('hidden');
});