let userInput = document.getElementById('user-input')
let buttonInsrt = document.getElementById('insert-button')
let ngetes = document.getElementById('tes')

function selesai(){
    let apa = document.getElementById('list')
    apa.remove()
}

buttonInsrt.addEventListener('click', function () {
    if (userInput.value === '') {
        alert('kalo ngga ada tugas gausah di insert guys wkwkwkk')
    } else {
        ngetes.innerHTML += `<li id="list">${userInput.value} <button type="button" name="x" id="done" class="btndone" onclick="selesai()">Done</button></li>`
        userInput.value = ''
        // console.log(Xbutton)
    }
})