const inputNp1 = document.getElementById('inputNp1')
const inputNp2 = document.getElementById('inputNp2')
const inputPim = document.getElementById('inputPim')
const btnCalcular = document.getElementById('btnCalcular')

const arrayInput = [inputNp1, inputNp2, inputPim]

arrayInput.forEach(function(element){
    element.addEventListener('input', verificaInput)
})

btnCalcular.addEventListener('click', function(){
    
    const np1 = parseFloat(inputNp1.value)
    const np2 = parseFloat(inputNp2.value)
    const pim = parseFloat(inputPim.value)
    
    // if(isNaN(np1) || isNaN(np2) || isNaN(pim)){
    //     let erro = document.getElementById('erro')
    //     erro.style.display = 'block'
    //     return
    // }

    const media = (np1 * 0.4) + (np2 * 0.4) + (pim * 0.2)
    mostrarMedia(media)
})

function mostrarMedia(media){
    let mediaF = document.getElementById('mediaF')
    mediaF.style.display = 'block'
    const status = media >= 7 ? "Aprovado" : "Reprovado";
    mediaF.textContent = `Média Final: ${media.toFixed(2)} - ${status}`
}

function verificaInput(){
    const np1 = parseFloat(inputNp1.value)
    const np2 = parseFloat(inputNp2.value)
    const pim = parseFloat(inputPim.value)

    if(!isNaN(np1) && !isNaN(np2) && !isNaN(pim)){
        btnCalcular.disabled = false
        btnCalcular.classList.add('active');
        btnCalcular.classList.add('active:hover')
    } else {
        btnCalcular.disabled = true;
        btnCalcular.classList.remove('active');
    }
}



