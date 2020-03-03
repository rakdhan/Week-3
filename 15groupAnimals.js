function groupAnimals(animals) {
    var result = []
    for (let i = 0; i < animals.length; i++) {
        for (let j = i+1; j < animals.length; j++) {
            if (animals[i] > animals[j]) {
                let temp = animals[i]
                animals[i] = animals[j]
                animals[j] = temp
            }            
        }
    }
    for (let i = 0; i < animals.length; i++) {
        var tesBoolean = false
        for (let j = 0; j < result.length; j++) {
            if (animals[i][0] === result[j][0][0]) {
                tesBoolean = true
                result[j].push(animals[i])
            }
        } if (tesBoolean === false) {
            result.push([animals[i]])
        }
    }
    // console.log(result)
    return result
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

