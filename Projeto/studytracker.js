import { concluirTópico } from "./components/concluiTarefa.js";
import { removerTópico } from "./components/deletaTarefa.js";

    // Função para adicionar tópico
    const adicionaTópico = (evento) => {
        evento.preventDefault();
        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const conteudoInput = input.value;
        const topicoEstudo = document.createElement('li');
        const conteudoTópico = `<p class="item-description" data-item-description>${conteudoInput}</p>`;
        topicoEstudo.innerHTML = conteudoTópico;
        topicoEstudo.appendChild(concluirTópico());
        topicoEstudo.appendChild(removerTópico());
        lista.appendChild(topicoEstudo);
        input.value = "";
    }


    const novoItem = document.querySelector('[data-form-button]');
    novoItem.addEventListener('click', adicionaTópico);

