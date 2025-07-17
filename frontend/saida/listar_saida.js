let listar = document.getElementById('listar')
let res = document.getElementById('res')

listar.addEventListener('click', (e) => {

    fetch(`http://localhost:8081/saida`)
    .then(res => res.json())
    .then(dados => {

        console.log(dados)
res.innerHTML = ""
dados.forEach(e => {



res.innerHTML += `Data de solitação: ${e.dataSolicitacao}<br>`
res.innerHTML += `Hora de saída: ${e.horaSaida}<br>`
res.innerHTML += `Hora de retorno: ${e.horaRetorno}<br>`
res.innerHTML += `Motivo: ${e.motivo}<br>`
res.innerHTML += `Local de destino: ${e.localDestino}<br>`
res.innerHTML += `Status: ${e.status}<br>`
res.innerHTML += `Nome do Aluno: ${e.nomeAluno}<br>`
res.innerHTML += `Nome do Professor: ${e.nomeProfessor}<br><br>`
})
alert('Dados encontrados com sucesso')
})
.catch((err) => {alert('Dados inválidos!',err)})    
})