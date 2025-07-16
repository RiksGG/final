let lista = document.getElementById('listar')
let resp = document.getElementById('resp')
let atualizar = document.getElementById('atualizar')
let opcao = document.getElementById('opcao')

let filtroCodAluno = null;
let filtroCodProfessor = null;

lista.addEventListener('click', (e) => {
e.preventDefault()

fetch(`http://localhost:8081/saida`)
.then(res => res.json())
.then(data => {

    res.innerHTML = ""

console.log(data)
  data.forEach(e => {
    
    res.innerHTML += `Data de solitação: ${e.dataSolicitacao}<br>`
    res.innerHTML += `Hora de saída: ${e.horaSaida}<br>`
    res.innerHTML += `Hora de retorno: ${e.horaRetorno}<br>`
    res.innerHTML += `Motivo: ${e.motivo}<br>`
    res.innerHTML += `Local de destino: ${e.localDestino}<br>`
    res.innerHTML += `Status: ${e.status}<br>`
    res.innerHTML += `Nome do Aluno: ${e.aluno.nome}<br>`
    res.innerHTML += `Nome do Professor: ${e.professor.nome}<br><br>`

    })
    alert('Dados encontrados com sucesso')
  })
})


opcao.addEventListener('change', (e) => {
  e.preventDefault()

  let codSaida = document.getElementById('codSaida')
  let opcoes = opcao.value

  if (opcoes == 'buscar') {
    fetch(`http://localhost:8081/saida/${codSaida.value}`)
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
        document.getElementById('horaSaida').value = dados.horaSaida
        document.getElementById('horaRetorno').value = dados.horaRetorno
        document.getElementById('codAluno').value = filtroCodAluno
        document.getElementById('codProfessor').value = filtroCodProfessor
        console.log(dados)
    })
    .catch((err) => { alert('Erro!', err) })
  }

  if (opcoes == 'Aprovar') {



    let codSaida = document.getElementById('codSaida').value
    let dataSolicitacao = document.getElementById('dataSolicitacao').value
    let motivo = document.getElementById('motivo').value
    let localDestino = document.getElementById('localDestino').value
    let nomeAluno = document.getElementById('nomeAluno').value
    let nomeProfessor = document.getElementById('nomeProfessor').value
    let horaSaida = new Date().toLocaleTimeString("pt-br")
    let horaRetorno = null
    let codAluno = document.getElementById('codAluno').value
    let codProfessor = document.getElementById('codProfessor').value
    const valores = {

      codSaida: codSaida,
      dataSolicitacao: dataSolicitacao,
      motivo: motivo,
      localDestino: localDestino,
      status: "Aprovado",
      nomeAluno: nomeAluno,
      nomeProfessor: nomeProfessor,
      horaSaida: horaSaida,
      horaRetorno: horaRetorno,
      aluno_cod: codAluno,
      professor_cod: codProfessor
    }

    console.log(valores)

    fetch(`http://localhost:8081/saida/${codSaida}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
      console.log(dados)
    })
  }

  if (opcoes == 'Retorno') {
    let codSaida = document.getElementById('codSaida').value
    let dataSolicitacao = document.getElementById('dataSolicitacao').value
    let motivo = document.getElementById('motivo').value
    let localDestino = document.getElementById('localDestino').value
    let nomeAluno = document.getElementById('nomeAluno').value
    let nomeProfessor = document.getElementById('nomeProfessor').value
    let horaSaida = document.getElementById('horaSaida').value
    let horaRetorno = new Date().toLocaleTimeString("pt-br")
    let codAluno = document.getElementById('codAluno').value
    let codProfessor = document.getElementById('codProfessor').value
    const valores = {

      codSaida: codSaida,
      dataSolicitacao: dataSolicitacao,
      motivo: motivo,
      localDestino: localDestino,
      status: "Retornado",
      nomeAluno: nomeAluno,
      nomeProfessor: nomeProfessor,
      horaSaida: horaSaida,
      horaRetorno: horaRetorno,
      aluno_cod: codAluno,
      professor_cod: codProfessor
    }

    console.log(valores)

    fetch(`http://localhost:8081/saida/${codSaida}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
      console.log(dados)
    })

  }

  if (opcoes == 'Reprovar') {


    let codSaida = document.getElementById('codSaida').value
    let dataSolicitacao = document.getElementById('dataSolicitacao').value
    let motivo = document.getElementById('motivo').value
    let localDestino = document.getElementById('localDestino').value
    let status = document.getElementById('status').value
    let nomeAluno = document.getElementById('nomeAluno').value
    let nomeProfessor = document.getElementById('nomeProfessor').value
    let horaSaida = document.getElementById('horaSaida').value
    let horaRetorno = document.getElementById('horaRetorno').value
    let codAluno = document.getElementById('codAluno').value
    let codProfessor = document.getElementById('codProfessor').value
    const valores = {

      codSaida: codSaida,
      dataSolicitacao: dataSolicitacao,
      motivo: motivo,
      localDestino: localDestino,
      status: "Reprovado",
      nomeAluno: nomeAluno,
      nomeProfessor: nomeProfessor,
      horaSaida: null,
      horaRetorno: null,
      aluno_cod: codAluno,
      professor_cod: codProfessor
    }

    console.log(valores)

    fetch(`http://localhost:8081/saida/${codSaida}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
      console.log(dados)
    })
    
  }
})



