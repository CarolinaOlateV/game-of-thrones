const containerRoot2 = document.getElementById('root2');
const showData2 = (EPISODES.episodes);

const printData2 = (showData2) => {
    let result2 = '';
    //console.log(showData)
    showData2.forEach(element => {
//imprimiendo data
if(element.seasonNum !== '' && element.episodeTitle !== '') {
    result2 = containerRoot2.innerHTML += `
    <div class='card'>
    <div class='box'>
    </div>
    <h2>${element.seasonNum}<br>${element.episodeTitle}</h2>
    <p>Episode Description: ${element.episodeDescription}</p>
    </div>
    </div>`
        }
    });
    return result2;    
}

window.onload = printData2(showData2);