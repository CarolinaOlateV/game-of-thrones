const containerRoot = document.getElementById('root');
const showData = (window.DATA.characters);

const printData = (showData) => {
    let result = '';
    //console.log(showData)
    showData.forEach(element => {

        if (element.characterName !== '' && element.houseName !== '') {
            result = containerRoot.innerHTML += `
            <div>
            <div class='card'>
            <div class='box'>
            <div class='img'>
            <img src='${element.characterImageThumb}'>
            </div>
            <h2>${element.characterName}<br><span>${element.houseName}</span></h2>
            <p>Actor: ${element.actorName}</p>
            </div>
            </div>
            </div>`
        } else { (element.characterName !== '' && element.houseName === '') 
            result = containerRoot.innerHTML += `
            <div>
            <div class='card'>
            <div class='box'>
            <div class='img'>
            <img src='${element.characterImageThumb}'>
            </div>
            <h2>${element.characterName}<br><span>No Aplica</span></h2>
            <p>Actor: ${element.actorName}</p>
            </div>
            </div>
            </div>`
        }
    });
    return result;    
}

window.onload = printData(showData);