document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="mood"]');
  const container = document.querySelector(".grid");
  let saveButton;
  let noteInput;

  function mostrarCamposExtras() {
    if (!noteInput) {
      noteInput = document.createElement("textarea");
      noteInput.placeholder = "Escreva uma nota sobre seu dia (opcional)...";
      noteInput.className = "w-full mt-4 p-2 text-black border rounded";
      container.appendChild(noteInput);
    }

    if (!saveButton) {
      saveButton = document.createElement("button");
      saveButton.textContent = "Salvar";
      saveButton.className = "mt-4 bg-pink-500 hover:bg-pink-800 text-grey font-bold py-2 px-4 rounded";
      saveButton.addEventListener("click", salvarHumor);
      container.appendChild(saveButton);
    }
  }

  function salvarHumor() {
    const humoresSelecionados = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    if (humoresSelecionados.length === 0) {
      alert("Selecione pelo menos um humor.");
      return;
    }

    const nota = noteInput?.value || "";
    const dataHoje = new Date().toISOString().split("T")[0];

    const entrada = {
      data: dataHoje,
      humores: humoresSelecionados,
      nota: nota
    };

    fetch('/salvar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entrada)
    })
    .then(response => {
      if (!response.ok) throw new Error("Erro ao salvar no servidor");
      alert("Dados salvos com sucesso!");
    })
    .catch(error => {
      alert("Falha ao salvar: " + error.message);
    });
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      const algumSelecionado = Array.from(checkboxes).some(cb => cb.checked);
      if (algumSelecionado) mostrarCamposExtras();
    });
  });
});
