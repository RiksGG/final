
let res = document.getElementById('res')
let opcao = document.getElementById('opcao')


opcao.addEventListener('change', (e) => {
    e.preventDefault(e)

    let codAluno = Number(document.getElementById('codAluno').value)
    let codProfessor = Number(document.getElementById('codProfessor').value)

    let opcoes = opcao.value
    if (opcoes === 'buscar') {

        fetch(`http://localhost:8081/aluno/${codAluno}`)
            .then(res => res.json())
            .then(resultado_aluno => {
                console.log(resultado_aluno)

                document.getElementById('nomeAluno').value = resultado_aluno.nome
            })
            .catch((err) => { alert('Erro!', err) })

        fetch(`http://localhost:8081/professor/${codProfessor}`)
            .then(res => res.json())
            .then(resultado_professor => {
                console.log(resultado_professor)
                document.getElementById('nomeProfessor').value = resultado_professor.nome
            })
            .catch((err) => { alert('Erro!', err) })
    }

    if (opcoes === 'cadastrar') {

        let codAluno = document.getElementById('codAluno').value
        let codProfessor = document.getElementById('codProfessor').value
        let motivo = document.getElementById('motivo').value
        let localDestino = document.getElementById('localDestino').value
        let nomeAluno = document.getElementById('nomeAluno').value
        let nomeProfessor = document.getElementById('nomeProfessor').value

        const cadastro = {
            dataSolicitacao: new Date().toISOString().split('T')[0],
            motivo: motivo,
            localDestino: localDestino,
            status: "Pendente",
            nomeAluno: nomeAluno,
            nomeProfessor: nomeProfessor,
            aluno_cod: Number(codAluno),
            professor_cod: Number(codProfessor)
        }
        console.log(cadastro)

        fetch(`http://localhost:8081/saida`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cadastro)
        })
            .then(res => res.json())
            .then(cadastrado => {
                console.log(cadastrado)

                res.innerHTML = ``
                res.innerHTML += `Data da solitação: ${cadastrado.dataSolicitacao} <br>
                          Hora da saída: ${cadastrado.horaSaida ? cadastrado.horaSaida : 'Sem hora'}<br>
                          Hora do Retorno: ${cadastrado.horaRetorno ? cadastrado.horaRetorno: 'Sem hora'}<br>
                          Motivo: ${cadastrado.motivo}<br>
                          Local do Destino: ${cadastrado.localDestino}<br>
                          Status: ${cadastrado.status}<br>
                          Nome do Aluno: ${cadastrado.nomeAluno}<br>
                          Nome do Professor: ${cadastrado.nomeProfessor}`

            })

    }


})