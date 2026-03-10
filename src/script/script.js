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

document.addEventListener('DOMContentLoaded', () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const greetingElement = document.getElementById('greeting').innerHTML = greeting;
    
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting; 
        if (hour < 12 && hour >= 6) {
            greeting = "Bom dia!";
        } else if (hour < 19 && hour >= 12) {
            greeting = "Boa tarde!";
        } else {
            greeting = "Boa noite!";
        }
        greetingElement.textContent = greeting;
    }
});