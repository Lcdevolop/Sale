const right = new Date();
const today = right.getDate()
const month = right.getMonth() < 10 ? '0' + right.getMonth() : right.getMonth()
console.log(month);
