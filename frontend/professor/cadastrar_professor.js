let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')


cadastrar.addEventListener('click', (e) =>  {
    e.preventDefault(e)

let nome = document.getElementById('nome').value
let sobrenome = document.getElementById('sobrenome').value
let matricula = document.getElementById('matricula').value
let telefone = document.getElementById('telefone').value
let email= document.getElementById('email').value

    const dados = {
        nome: nome,
        sobrenome: sobrenome,
       matricula: matricula,
       telefone: telefone,
        email: email
    }

    fetch(`http://localhost:8081/professor`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)

res.innerHTML = ``
res.innerHTML += `Nome: ${dados.nome}<br>`
res.innerHTML += `Sobrenome: ${dados.sobrenome}<br>`
res.innerHTML += `Matrícula: ${dados.matricula}<br>`
res.innerHTML += `Telefone: ${dados.telefone}<br>`
res.innerHTML += `Email: ${dados.email}<br><br><br>`
        
        alert('Dados cadastrados com sucesso!')
    })
    .catch((err) => {alert('Dados inválidos!',err)})
})