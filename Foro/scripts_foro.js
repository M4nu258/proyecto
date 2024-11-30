// Manejo de comentarios
const commentForms = document.querySelectorAll('.comment-form');

commentForms.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const topicId = form.getAttribute('data-topic-id');
    const commentText = form.querySelector('.comment-text').value.trim();
    
    if (commentText) {
      // Crear nuevo comentario
      const commentList = document.getElementById(`comments-list-${topicId}`);
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.textContent = commentText;
      commentList.appendChild(newComment);

      // Limpiar el formulario
      form.querySelector('.comment-text').value = '';
    }
  });
});

// Votación en temas
const voteButtons = document.querySelectorAll('.vote-buttons');

voteButtons.forEach(voteButton => {
  const upvoteButton = voteButton.querySelector('.upvote');
  const downvoteButton = voteButton.querySelector('.downvote');
  const votesSpan = voteButton.querySelector('.votes');
  let votes = 0;

  // Incrementar votos al hacer click en "Me gusta"
  upvoteButton.addEventListener('click', () => {
    votes++;
    votesSpan.textContent = `${votes} votos`;
  });

  // Decrementar votos al hacer click en "No me gusta"
  downvoteButton.addEventListener('click', () => {
    votes--;
    votesSpan.textContent = `${votes} votos`;
  });
});

// Filtrar temas por búsqueda
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
  const searchQuery = searchInput.value.toLowerCase();
  const topics = document.querySelectorAll('.topic-list li');

  topics.forEach(topic => {
    const title = topic.querySelector('strong').textContent.toLowerCase();
    if (title.includes(searchQuery)) {
      topic.style.display = 'block';
    } else {
      topic.style.display = 'none';
    }
  });
});
