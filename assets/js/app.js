/**
 * 
 * Acá va solo la lógica
 * 
 */

const filterSeason = (showData2,condition) => {
    if (condition === '0') {
      return showData2;
    }
    return showData2.filter(element => {
      return element.seasonNum === parseInt(condition);
    });
};

