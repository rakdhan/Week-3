function groupAnimals(animals) {
    // you can only write your code here!
    var awalA = []
    var awalC = []
    var awalK = []
    var awalU = []
    var result =[]
    for (let i = 0; i < animals.length; i++) {
        // console.log(animals[i][0])
        if (animals[i][0] === 'a') {
            awalA.push(animals[i])
            // console.log(awalA)
        }
        else if (animals[i][0] === 'c') {
            awalC.push(animals[i])
        }
        else if (animals[i][0] === 'k') {
            awalK.push(animals[i])
        }
    }
    result.push(awalA, awalC, awalK)

    for (let i = 0; i < animals.length; i++) {
        if (animals[i][0] === 'u') {
            awalU += animals[i]
            result.push([awalU])
        }
    }    
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


 