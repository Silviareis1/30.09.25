function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const salario = parseFloat(document.getElementById("salario").value);
    const sexo = document.getElementById("sexo").value;
    const estadoCivil = document.getElementById("estadoCivil").value;
    const mensagem = document.getElementById("mensagem");

    // Validação do Nome
    if (nome.length <= 3) {
        mensagem.textContent = "Erro: O nome deve ter mais de 3 caracteres.";
        mensagem.style.color = "red"
        return;
    }

    // Validação da Idade
    if (isNaN(idade) || idade < 0 || idade > 150) {
        mensagem.textContent = "Erro: A idade deve estar entre 0 e 150.";
        mensagem.style.color = "red";
        return;
    }

    // Validação do Salário
    if (isNaN(salario) || salario <= 0) {
        mensagem.textContent = "Erro: O salário deve ser maior que zero.";
        mensagem.style.color = "red";
        return;
    }

    // Validação do Sexo
    if (sexo !== "f" && sexo !== "m") {
        mensagem.textContent = "Erro: Sexo deve ser 'f' ou 'm'.";
        mensagem.style.color = "red";
        return;
    }

    // Validação do Estado Civil
    if (!["s", "c", "v", "d"].includes(estadoCivil)) {
        mensagem.textContent = "Erro: Estado civil deve ser 's', 'c', 'v' ou 'd'.";
        mensagem.style.color = "red";
        return;
    }

    // Se todos os dados forem válidos
    mensagem.style.color = "green";
    mensagem.textContent = "Formulário enviado com sucesso!";
    
    // Aqui você pode fazer algo com os dados, como enviá-los para o servidor
}
