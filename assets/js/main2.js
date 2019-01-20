const containerRoot2 = document.getElementById('root2');
const showData2 = (EPISODES.episodes);

const printData2 = (showData2) => {
    let result2 = '';
    //console.log(showData)
    showData2.forEach(element => {
//imprimiendo data
if(element.episodeTitle !== '' && element.episodeDescription === '') {
    result2 = containerRoot2.innerHTML += `
    <div class='card'>
    <div class='box'>
    </div>
    <h2>${element.seasonNum}<br>No Aplica</h2>
    <p>Episode Title: ${element.episodeTitle}</p>
    </div>
    </div>`
} else {
    result2 = containerRoot2.innerHTML += `
    <div>
    <div class='card'>
    <div class='box'>
    </div>
    <h2>${element.seasonNum}<br>${element.episodeDescription}</h2>
    <p>Episode Title: ${element.episodeTitle}</p>
    </div>
    </div>`

        }
    });
    return result2;    
}

window.onload = printData2(showData2);