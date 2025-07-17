let consultar = document.getElementById('consultar')
let res = document.getElementById('res')

consultar.addEventListener('click', (e) => {

let id = document.getElementById('id').value

if(!id){
alert('Informe um id válido!')
return
}

fetch(`http://localhost:8081/professor/${id}`)
.then(res => res.json())
.then(dados => {
console.log(dados)
res.innerHTML = ""
alert('Dados encontrados com sucesso')

res.innerHTML += `Nome: ${dados.nome}<br>`
res.innerHTML += `Sobrenome: ${dados.sobrenome}<br>`
res.innerHTML += `Matricula: ${dados.matricula}<br>`
res.innerHTML += `Telefone: ${dados.telefone}<br>`
res.innerHTML += `Email: ${dados.email}<br>`

       
    })
    .catch((err) => {alert('Dados inválidos!',err)})
})