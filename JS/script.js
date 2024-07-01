document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const response = await fetch('https://130.162.195.228/mhs714220015/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            console.log(response);
            if (response.ok) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Login failed');
            }
        });
    }

    const usersContainer = document.getElementById('users-container');

    if (usersContainer) {
        fetchUsers();
    }

    async function fetchUsers() {
        const response = await fetch('https://130.162.195.228/mhs714220015/api/api/users');
        const users = await response.json();

        users.forEach(users => {
            const usersElement = document.createElement('div');
            usersElement.className = 'users';
            usersElement.innerHTML = 
                <><h2>${users.username}</h2><p>Nama pengguna ${users.username}</p></>
            ;
            coursesContainer.appendChild(courseElement);
        });
    }
});