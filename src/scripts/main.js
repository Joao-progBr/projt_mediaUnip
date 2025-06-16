const inputNp1 = document.getElementById('inputNp1')
const inputNp2 = document.getElementById('inputNp2')
const InputPim = document.getElementById('inputPim')
const btnCalcular = document.getElementById('btnCalcular')


btnCalcular.addEventListener('click', function(){

    np1 = inputNp1.value
    np2 = inputNp2.value    
    pim = inputPim.value

    if(isNaN(np1) || isNaN(np2) || isNaN(pim)){
        let erro = document.getElementById('erro')
        erro.style.display = 'block'
        return
    }

    media = (np1 * 0.4) + (np2 * 0.4) + (pim * 0.2)
    mostrarMedia(media)

})

function mostrarMedia(media){
    let mediaF = document.getElementById('mediaF')
    mediaF.style.display = 'block'
    mediaF.textContent = `Média FInal: ${media.toFixed(2)}`
}

