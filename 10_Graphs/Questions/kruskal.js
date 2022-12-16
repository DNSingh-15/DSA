// now not solved 
// function kruskal(graph, src, dst) {
//     let count = 0
//     if (src == dst) {
//         count += 1;
//     }

//     for (let neighbour of graph[src]) {
//         if ((graph, neighbour, dst) == true) {
//             count += 1;
//         }
//     }
//     return count
// }

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [5, 3, 4],
    3: [2, 4],
    4: [3, 2]
}
console.log(printMST(graph, '1', '3'))