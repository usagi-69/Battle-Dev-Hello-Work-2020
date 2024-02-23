export function countCard(card){

    const count = {};
    let cardList = card.split(' ');

        for (let i = 0; i < cardList.length ; i++){
            if ((count[cardList[i]])){
                count[cardList[i]] += 1;
            }else {
                count[cardList[i]] = 1;
            }
        }
    return Math.max(...Object.values(count));
}

console.log(countCard('10 5 3 3 4 9 9 9 9 9 6'));
