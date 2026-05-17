const movies = [
    { name: 'avatar', year: 2015, rank: 5 },
    { name: 'range', year: 2009, rank: 2 },
    { name: 'farsaj', year: 2011, rank: 3 },
    { name: 'medina', year: 208, rank: 8 }
]
// let newArr = []
// let newArr2 = []
// movies.forEach((movie) => {

//     if (movie.year > 2010) {
//         newArr.push(movie)
//     } else {
//         newArr2.push(movie)
//     }
// })
// console.log(newArr);
// console.log(newArr2);


const filter = movies.filter((movie) => {
    return movie.year > 2010
})
console.log(filter);
