const lista = document.getElementById("lista");
const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");

let dados = {};

const renderizaLista = (lista, pessoas) => {
  lista.innerHTML = "";
  pessoas.forEach((pessoa) => {
    const itemText = document.createTextNode(
      `${pessoa.name} (${pessoa.species})`
    );
    const listItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);

    const img = document.createElement("img");
    img.src = pessoa.image;
    document.getElementById("lista").appendChild(img)
  });
};

const getPessoas = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dados = data;
      console.log(data);
      btAnterior.disabled = !dados.info.prev;
      btProxima.disabled = !dados.info.next;
      renderizaLista(lista, data.results);
    });
};

const handleBtAnteriorClick = () => {
  getPessoas(dados.info.prev);
};

const handleBtProximaClick = () => {
  getPessoas(dados.info.next);
};

getPessoas("https://rickandmortyapi.com/api/character");

btAnterior.onclick = handleBtAnteriorClick;
btProxima.onclick = handleBtProximaClick;