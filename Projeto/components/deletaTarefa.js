    export const removerTópico = () => {
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "🗑️";
        botaoRemover.classList.add("remover-button");
        botaoRemover.addEventListener('click', apagarTópico); // CORRIGIDO: era adicionaTópico
        return botaoRemover;
    }

    const apagarTópico = (evento) => {
        const button = evento.target;
        const tarefaCompleta = button.parentElement;
        tarefaCompleta.remove();
    }
