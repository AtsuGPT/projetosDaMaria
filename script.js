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