let listar = document.getElementById('listar')
let res = document.getElementById('res')

listar.addEventListener('click', (e) => {

    fetch(`http://localhost:8081/aluno`)
    .then(res => res.json())
    .then(dados => {

        console.log(dados)
alert('Dados encontrados com sucesso')
res.innerHTML = ""
dados.forEach(e => {
res.innerHTML += `Nome: ${e.nome}<br>`
res.innerHTML += `Sobrenome: ${e.sobrenome}<br>`
res.innerHTML += `Matrícula: ${e.matricula}<br>`
res.innerHTML += `Telefone: ${e.telefone}<br>`
res.innerHTML += `Email: ${e.email}<br><br><br>`
})
})
.catch((err) => {alert('Dados inválidos!',err)})
})