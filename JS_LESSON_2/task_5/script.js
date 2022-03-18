const start = 0;
const end = 7;

const point1 = 5;
const point2 = 11;

const pointInTheRange = (point, start, end) => {
    if (point >= start && point <= end) {
        alert('Входит')
    } else {
        alert('Не входит')
    }
};

pointInTheRange(point1, start, end); //5 0 7
pointInTheRange(point2, start, end); //11 0 7