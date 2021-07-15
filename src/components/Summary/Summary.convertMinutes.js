/**
 * @name convertMinutes
 * 
 * @description Take an amount of minutes and converts it into string
 * 
 * @param {number} minutes
 * @returns {string}
*/

export const convertMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remaingMInutes = Math.floor(minutes % 60);

    if(hours < 1) return `${remaingMInutes}min`
    return `${hours}h ${remaingMInutes}min`

}
export default convertMinutes;