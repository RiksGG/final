let consultar = document.getElementById('consultar')
let res = document.getElementById('res')

consultar.addEventListener('click', (e) => {

let id = document.getElementById('id').value

if(!id){
alert('Informe um id válido!')
return
}

fetch(`http://localhost:8081/saida/${id}`)
.then(res => res.json())
.then(dados => {
console.log(dados)
res.innerHTML = ""
alert('Dados encontrados com sucesso')

res.innerHTML += `Data de solitação: ${dados.dataSolicitacao}<br>`
res.innerHTML += `Hora de saída: ${dados.horaSaida}<br>`
res.innerHTML += `Hora de retorno: ${dados.horaRetorno}<br>`
res.innerHTML += `Motivo: ${dados.motivo}<br>`
res.innerHTML += `Local de destino: ${dados.localDestino}<br>`
res.innerHTML += `Status: ${dados.status}<br>`
res.innerHTML += `Nome do Aluno: ${dados.nomeAluno}<br>`
res.innerHTML += `Nome do Professor: ${dados.nomeProfessor}<br><br>` 

        
    })
    .catch((err) => {alert('Dados inválidos!',err)})
})