/**
 * 
 * Acá va solo la lógica
 * 
 */

const filterSeason = (showData2, condition) => {
    const filteredSeason= showData2.filter(element => {
        return element.seasonNum === condition
    })
    return filteredSeason;
};

