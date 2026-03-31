async function carregar(rota) {
  try {
    const res = await fetch(rota);
    const data = await res.json();

    document.getElementById("enunciado").innerText = data.enunciado;
    document.getElementById("saida").innerText =
      JSON.stringify(data.resultado, null, 2);

  } catch (erro) {
    console.error("Erro:", erro);
  }
}