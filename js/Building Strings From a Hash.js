function solution(pairs){
    let keyValuePairs = [];
    for (const key in pairs) {
       keyValuePairs.push(`${key} = ${pairs[key]}`)
   }
    return keyValuePairs.join(',');
}

function betterSolution(pairs){
    return Object.keys(pairs).map(k => `${k} = ${pairs[k]}`).join(",");
}

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"