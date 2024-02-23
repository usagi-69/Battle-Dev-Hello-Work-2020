/**
 * @function potOfYaourt
 * @param {string} color 
 * @returns string
 */

export function potOfYaourt(color){
    let Colors = color.split(' ')
    let countColors = {};
    for (let i = 1; i < Colors.length; i++){
        if (countColors[Colors[i]]){
            countColors[Colors[i]] += 1;
        }else {
            countColors[Colors[i]] = 1;
        }
    }
    let ArrayOfColors = Object.entries(countColors);
    ArrayOfColors.sort((a, b) => b[1] - a[1]);
    return `${ArrayOfColors[0][0]} ${ArrayOfColors[1][0]}`;    
}