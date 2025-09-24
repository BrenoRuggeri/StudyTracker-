    export const concluirTópico = () => {
        const botaoConcluir = document.createElement('button');
        botaoConcluir.textContent = "✅️";
        botaoConcluir.classList.add("concluir-button");
        botaoConcluir.addEventListener('click', marcarConcluído);
        return botaoConcluir;
    }

    const marcarConcluído = (evento) => {
        const button = evento.target;
        const tarefaCompleta = button.parentElement;
        tarefaCompleta.classList.toggle('concluido');
    }

   