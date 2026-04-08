const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

const LOGIN_STORAGE_KEY = "pcstore_logged_in";
const USER_STORAGE_KEY = "pcstore_user";

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            loginMessage.textContent = "Preencha todos os campos.";
            loginMessage.style.color = "#ff5d5d";
            return;
        }

        localStorage.setItem(LOGIN_STORAGE_KEY, "true");
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ email }));

        loginMessage.textContent = "Login realizado com sucesso!";
        loginMessage.style.color = "#42d66b";

        setTimeout(() => {
        window.location.href = "index.php";
        }, 900);
    });
}
