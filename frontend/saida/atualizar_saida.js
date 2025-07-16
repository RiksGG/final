
let res = document.getElementById('res')
let opcao = document.getElementById('opcao')

opcao.addEventListener('change', (e) => {
    e.preventDefault(e)
    let id = document.getElementById('id')
    let opcoes = opcao.value

    if (opcoes == 'puxar') {

        fetch(`http://localhost:8081/saida/${id.value}`)
            .then(res => res.json())
            .then(dados => {


const filtroAluno = dados.aluno.nome
const filtroProfessor = dados.professor.nome
const filtroCodAluno = dados.aluno.codAluno
const filtroCodProfessor = dados.professor.codProfessor


                console.log(dados)
                document.getElementById('dataSolicitacao').value = dados.dataSolicitacao
                document.getElementById('motivo').value = dados.motivo
                document.getElementById('localDestino').value = dados.localDestino
                document.getElementById('status').value = dados.status
                document.getElementById('nomeAluno').value = filtroAluno
                document.getElementById('nomeProfessor').value = filtroProfessor
                document.getElementById('codAluno').value = filtroCodAluno
                document.getElementById('codProfessor').value = filtroCodProfessor
                console.log(dados)
            })
            .catch((err) => { alert('Erro!', err) })
    }
    if (opcoes == 'atualizar') {

        let motivo = document.getElementById('motivo').value
        let localDestino = document.getElementById('localDestino').value
        let status = document.getElementById('status').value
        let nomeAluno = document.getElementById('nomeAluno').value
        let nomeProfessor = document.getElementById('nomeProfessor').value
        let codProfessor = Number (document.getElementById('codProfessor').value)
        let codAluno = Number (document.getElementById('codAluno').value)   
        
            const dados = {
                dataSolicitacao: new Date ().toISOString().split('T')[0],
                horaSaida: new Date().toLocaleTimeString('pt-BR', {  hour: '2-digit', minute: '2-digit'}),
                horaRetorno: null,
                motivo: motivo,
                localDestino: localDestino,
                status: status,
                nomeAluno: nomeAluno,
                nomeProfessor: nomeProfessor,
                aluno_cod: codAluno,
                professor_cod: codProfessor
            }
        console.log(dados)
        fetch(`http://localhost:8081/saida/${id.value}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
            .then(res => res.json())
            .then(saida => {
                console.log(saida)

                alert('Aluno atualizado com sucesso!')
                res.innerHTML = ``
                res.innerHTML += `Data de solitação: ${saida.dataSolicitacao}<br>`
                res.innerHTML += `Hora de saída: ${saida.horaSaida ? saida.horaSaida : "Ainda não informado."}<br>`
                res.innerHTML += `Hora de retorno: ${saida.horaRetorno ? saida.horaRetorno : "Ainda não informado."}<br>`
                res.innerHTML += `Motivo: ${saida.motivo}<br>`
                res.innerHTML += `Local de destino: ${saida.localDestino}<br>`
                res.innerHTML += `Status: ${saida.status}<br>`
                res.innerHTML += `Nome do Aluno: ${saida.nomeAluno}<br>`
                res.innerHTML += `Nome do Professor: ${saida.nomeProfessor}<br><br>`

            })
    }

})

