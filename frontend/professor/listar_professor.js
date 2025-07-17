let listar = document.getElementById('listar')
let res = document.getElementById('res')

listar.addEventListener('click', (e) => {
e.preventDefault()
    fetch(`http://localhost:8081/professor`)
    .then(res => res.json())
    .then(dados => {

        console.log(dados)

        alert('Dados encontrados com sucesso')
res.innerHTML = ""
dados.forEach(e => {
res.innerHTML += `Nome: ${e.nome}<br>`
res.innerHTML += `Sobrenome: ${e.sobrenome}<br>`
res.innerHTML += `Matricula: ${e.matricula}<br>`
res.innerHTML += `Telefone: ${e.telefone}<br>`
res.innerHTML += `Email: ${e.email}<br><br><br>`
})
})
.catch((err) => {alert('Dados inválidos!',err)})
})