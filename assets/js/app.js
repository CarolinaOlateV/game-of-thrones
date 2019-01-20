/**
 * 
 * Acá va solo la lógica
 * 
 */

const filterSeasonNum = (showData2, condition) => {

    const filteredSeasonNum= showData2.filter(element => {
        return element.seasonNum === condition
    })
    return filteredSeasonNum;
}
window.filterSeasonNum = filterSeasonNum;