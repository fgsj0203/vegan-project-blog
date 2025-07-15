
const postsContainer = document.getElementById('posts-container');
const filtroBtns = document.querySelectorAll('.filtro-btn');

fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const card = document.createElement('div');
      card.classList.add('post-card');
      card.setAttribute('data-categoria', post.categoria);

      card.innerHTML = `
        <a href="${post.link}">
          <img src="${post.imagem}" alt="${post.titulo}" />
          <h3>${post.titulo}</h3>
          <p>${post.descricao}</p>
        </a>
      `;

      postsContainer.appendChild(card);
    });

    filtroBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const categoria = btn.getAttribute('data-categoria');

        filtroBtns.forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');

        const postCards = document.querySelectorAll('.post-card');
        postCards.forEach(post => {
          if (categoria === 'todos' || post.getAttribute('data-categoria') === categoria) {
            post.style.display = 'block';
          } else {
            post.style.display = 'none';
          }
        });
      });
    });
  });
