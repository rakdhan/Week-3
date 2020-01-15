function groupAnimals(animals) {
    var result = []
    for (let i = 0; i < animals.length; i++) {
        var cekBoolean = false
        for (let j = 0; j < result.length; j++) {
            // console.log(animals[i][0], result[j][0][0])
            if (animals[i][0] === result[j][0][0]) {
                // console.log(result[j][0][0])
                cekBoolean = true
                result[j].push(animals[i])
            }
            
        }
        if (!cekBoolean) {
            result.push([animals[i]])
        }
        
    }
    return result
}
  
// TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

 