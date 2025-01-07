document.getElementById('nextBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!username || !password) {
      alert('Please fill out both fields.');
    } else {
      document.querySelector('.form-container').classList.add('hidden');
      document.getElementById('nextTab').classList.remove('hidden');
    }
  });