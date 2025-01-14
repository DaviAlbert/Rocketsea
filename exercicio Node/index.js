const form = document.getElementById('userForm');

form.addEventListener('submit', async function (e) {
  e.preventDefault(); // Evita o envio padrão do formulário

  // Captura os dados do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Envia os dados via requisição POST
  try {
    const response = await fetch('/add-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if (response.status === 201) {
      alert('Usuário cadastrado com sucesso!');
    } else {
      alert('Erro: ' + data.error);
    }
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    alert('Erro ao cadastrar usuário');
  }
});