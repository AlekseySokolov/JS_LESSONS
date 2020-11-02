const sourceString = 'Yo all! I wont to say you Yo cause I always say Yo';
const subString = 'Yo';

const showSubStringPositions = (string, substr) => {
    let positions = [];
    let lastIndex = -1;

    while ((lastIndex = string.indexOf(substr, lastIndex + 1)) !== -1) {
        positions.push(lastIndex)
    }

    return positions;
};

console.log(showSubStringPositions(sourceString, subString));