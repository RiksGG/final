let deletar = document.getElementById('deletar')
let  res = document.getElementById('res')

deletar.addEventListener('click', (e) => {
    e.preventDefault(e)

    let id = document.getElementById('id').value

    if(!id){
        alert('Coloque um id válido!')
        return
    }

    fetch(`http://localhost:8081/professor/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if(response.ok){
            res.innerHTML = ''
            res.innerHTML = 'ID deletado!'
        }else{
            alert('Erro')
            return
        }
    })
    .catch((err) => {alert('Dados inválidos!',err)})
})