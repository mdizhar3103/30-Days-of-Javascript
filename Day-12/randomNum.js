function* randomNum() {
    while(true) {
        yield Math.floor(Math.random() * 100);
    }
}

const itr = randomNum();

function getRandomNumber() {
    return itr.next().value;
}

console.log(getRandomNumber());
