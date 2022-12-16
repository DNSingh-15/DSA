//  here we use stack -- for storing the current node


// const dfsPrint = (graph, source) => {
//     const stack = [source];

//     while(stack.length > 0){
//         const current = stack.pop();
//         console.log(current)

//         for(let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// }


// here -- there is no need to stack for storing the current node ...here we replce the source to neighbor node (current node)
const dfsPrint = (graph, source) => {
    console.log(source)
    for (let neighbor of graph[source]) {
        dfsPrint(graph, neighbor);
    }
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

dfsPrint(graph, 'a');