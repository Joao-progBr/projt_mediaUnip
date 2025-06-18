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

    //     setTimeout(() => {
    //          erro.style.display = 'none'
    //     }, 5000);
    
    //     return
    // }


    const media = (np1 * 0.4) + (np2 * 0.4) + (pim * 0.2)
    mostrarMedia(media)
})

function mostrarMedia(media){
    const mediaF = document.getElementById('mediaF');
    mediaF.style.display = 'block';

    const status = media >= 6.75 ? "Aprovado" : "Reprovado";
    const classStatus = media >= 6.75 ? "aprovado" : "reprovado";

    // Aplica apenas a classe base na <span>
    mediaF.className = 'media';

    // Mostra a média e o status colorido separado
    mediaF.innerHTML = `Média Final: ${media.toFixed(2)} <span class="${classStatus}">${status}</span>`;

    // let mediaF = document.getElementById('mediaF')
    // mediaF.style.display = 'block'
    // const status = media >= 7 ? "Aprovado" : "Reprovado";
    // mediaF.classList = 'media'
    // mediaF.classList.add(media >= 7 ? 'aprovado' : 'reprovado')
    // mediaF.innerHTML = `Média Final: ${media.toFixed(2)} - <span>${status}</span>`
}

function verificaInput(){
    const np1 = parseFloat(inputNp1.value)
    const np2 = parseFloat(inputNp2.value)
    const pim = parseFloat(inputPim.value)

    if(!isNaN(np1) && !isNaN(np2) && !isNaN(pim)){
        btnCalcular.disabled = false
        btnCalcular.classList.add('active');
        // btnCalcular.classList.add('active:hover')
    } else {
        btnCalcular.disabled = true;
        btnCalcular.classList.remove('active');
    }
}



