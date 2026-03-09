document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); 

            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'A enviar...';
            btn.disabled = true;

            const data = new FormData(event.target);

            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    statusMessage.innerHTML = "Mensagem enviada com sucesso! Entrarei em contacto em breve.";
                    statusMessage.style.color = "greenyellow";
                    form.reset();
                } else {
                    statusMessage.innerHTML = "Oops! Ocorreu um problema ao enviar a mensagem. Verifique os dados.";
                    statusMessage.style.color = "#ff4c4c";
                }
            } catch (error) {
                statusMessage.innerHTML = "Oops! Erro de conexão. Tente novamente mais tarde.";
                statusMessage.style.color = "#ff4c4c";
            } finally {
                btn.innerText = originalText;
                btn.disabled = false;
                
                setTimeout(() => {
                    statusMessage.innerHTML = "";
                }, 5000);
            }
        });
    }
});