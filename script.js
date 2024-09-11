// Selecionando o botão que aciona o modal (no caso, a imagem)
const image = document.querySelector('img[data-toggle="modal"]');

// Selecionando o modal
const modal = document.getElementById('myModal');

// Adicionando um evento de clique à imagem
image.addEventListener('click', () => {
  modal.classList.add('show');
  modal.style.display = 'block';
  modal.style.opacity = 1;
});

// Adicionando um evento de clique ao botão de fechar
const closeButton = modal.querySelector('.close');
closeButton.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.style.display = 'none';
  modal.style.opacity = 0;
});

// Selecionando o botão que aciona o modal (no caso, a imagem)
const image2 = document.querySelector('img[data-toggle="modal2"]');

// Selecionando o modal
const modal2 = document.getElementById('modal2');

// Adicionando um evento de clique à imagem
image2.addEventListener('click', () => {
  modal2.classList.add('show');
  modal2.style.display = 'block';
  modal2.style.opacity = 1;
});

// Adicionando um evento de clique ao botão de fechar
const closeButton2 = modal2.querySelector('.close');
closeButton2.addEventListener('click', () => {
  modal2.classList.remove('show');
  modal2.style.display = 'none';
  modal2.style.opacity = 0;
});

const image3 = document.querySelector('img[data-toggle="modal3"]');

// Selecionando o modal
const modal3 = document.getElementById('modal3');

// Adicionando um evento de clique à imagem
image3.addEventListener('click', () => {
  modal3.classList.add('show');
  modal3.style.display = 'block';
  modal3.style.opacity = 1;
});

// Adicionando um evento de clique ao botão de fechar
const closeButton3 = modal3.querySelector('.close');
closeButton3.addEventListener('click', () => {
  modal3.classList.remove('show');
  modal3.style.display = 'none';
  modal3.style.opacity = 0;
});