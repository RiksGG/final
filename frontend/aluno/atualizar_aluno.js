
let res = document.getElementById('res')
let opcao = document.getElementById('opcao')

opcao.addEventListener('change', (e) => {
    e.preventDefault(e)
    let id = document.getElementById('id')
    let opcoes = opcao.value

    if (opcoes == 'puxar') {

        fetch(`http://localhost:8081/aluno/${id.value}`)
            .then(res => res.json())
            .then(dados => {

                document.getElementById('nome').value = dados.nome
                document.getElementById('sobrenome').value = dados.sobrenome
                document.getElementById('matricula').value = dados.matricula
                document.getElementById('telefone').value = dados.telefone
                document.getElementById('email').value = dados.email
            })
            .catch((err) => { alert('Erro!', err) })
    }
    if (opcoes == 'atualizar') {

        let nome = document.getElementById('nome').value
        let sobrenome = document.getElementById('sobrenome').value
        let matricula = document.getElementById('matricula').value
        let telefone = document.getElementById('telefone').value
        let email = document.getElementById('email').value

        const dados = {
            nome: nome,
            sobrenome: sobrenome,
            matricula: matricula,
            telefone: telefone,
            email: email
        }

        fetch(`http://localhost:8081/aluno/${id.value}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
            .then(res => res.json())
            .then(aluno => {
                console.log(aluno)

                alert('Aluno atualizado com sucesso!')
                res.innerHTML = ``
                res.innerHTML += `Concluído! <br> Vá até Consultar ou Listar para ver as alterações!<br><br>`
                res.innerHTML += `Nome: ${aluno.nome}<br>`
                res.innerHTML += `Sobrenome: ${aluno.sobrenome}<br>`
                res.innerHTML += `Matrícula: ${aluno.matricula}<br>`
                res.innerHTML += `Telefone: ${aluno.telefone}<br>`
                res.innerHTML += `Email: ${aluno.email}<br><br><br>`

            })
    }

})

