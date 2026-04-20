// pega o formulário de login pelo ID
const loginForm = document.getElementById("loginForm");

// pega o elemento onde será exibida a mensagem (erro ou sucesso)
const loginMessage = document.getElementById("loginMessage");

// chave usada no localStorage para indicar que o usuário está logado
const LOGIN_STORAGE_KEY = "pcstore_logged_in";

// chave usada para salvar dados do usuário (ex: email)
const USER_STORAGE_KEY = "pcstore_user";

// verifica se o formulário existe na página (evita erro caso o script rode em outra página)
if (loginForm) {

    // adiciona um evento quando o formulário for enviado
    loginForm.addEventListener("submit", (event) => {

        event.preventDefault(); // impede o recarregamento da página ao enviar o formulário

        // pega o valor do input de email e remove espaços extras
        const email = document.getElementById("email").value.trim();

        // pega o valor do input de senha e remove espaços extras
        const password = document.getElementById("password").value.trim();

        // validação: verifica se algum campo está vazio
        if (!email || !password) {

            // mostra mensagem de erro
            loginMessage.textContent = "Preencha todos os campos.";

            // muda a cor da mensagem para vermelho
            loginMessage.style.color = "#ff5d5d";

            return; // interrompe a execução
        }

        // salva no localStorage que o usuário está logado
        localStorage.setItem(LOGIN_STORAGE_KEY, "true");

        // salva os dados do usuário (nesse caso apenas o email) como JSON
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ email }));

        // mostra mensagem de sucesso
        loginMessage.textContent = "Login realizado com sucesso!";

        // muda a cor da mensagem para verde
        loginMessage.style.color = "#42d66b";

        // espera 900ms antes de redirecionar
        setTimeout(() => {

            // redireciona para a página principal da loja
            window.location.href = "index.php";

        }, 900);
    });
}