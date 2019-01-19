const containerRoot = document.getElementById('root');
const showData = (window.DATA.characters);
const showData = (window.EPISODES.episodes);

const printData = (showData) => {
    let result = '';
    //console.log(showData)
    showData.forEach(element => {
//imprimiendo data
        if (element.characterName !== '') {
            result = containerRoot.innerHTML += `
            <div>
            <div class='card'>
            <div class='box'>
            <div class='img'>
            <img src='${element.characterImageFull}'>
            </div>
            <h2>${element.characterName}<br></h2>
            </div>
            </div>
            </div>`
        }
    });
    return result;    
}

window.onload = printData(showData);