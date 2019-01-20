const containerRoot2 = document.getElementById('root2');
const showData2 = (EPISODES.episodes);
const selectSeason = document.getElementById('selectseason')

const printData2 = (showData2) => {
    let result2 = '';
    //console.log(showData)
    showData2.forEach(element => {
//imprimiendo data
if(element.episodeTitle !== '' && element.episodeDescription === '') {
    result2 = containerRoot2.innerHTML += `
    <div class='card2'>
    <div class='box2'>
    </div>
    <h2>${element.seasonNum}<br>No Aplica</h2>
    <p>Episode Title: ${element.episodeTitle}</p>
    </div>
    </div>`
} else {
    result2 = containerRoot2.innerHTML += `
    <div>
    <div class='card2'>
    <div class='box2'>
    </div>
    <h2>${element.seasonNum}<br>${element.episodeDescription}</h2>
    <p>Episode Title: ${element.episodeTitle}</p>
    </div>
    </div>`

        }
    });
    return result2;    
}

//filtrando
selectseason.addEventListener('change', () => {
    let condition = selectseason.value
    let filtered = filterSeason(showData2, condition);
    //limpio div
    containerRoot2.innerHTML = '';

    filtered.forEach(element => {
            result2 = containerRoot2.innerHTML += `
            <div>
            <div class='card2'>
            <div class='box2'>
            </div>
            <h2>${element.seasonNum}<br>${element.episodeDescription}</h2>
            <p>Episode Title: ${element.episodeTitle}</p>
            </div>
            </div>`
  })
})

window.onload = printData2(showData2);