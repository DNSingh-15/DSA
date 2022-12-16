// question 1. = check between two nodes has path or not in direct graph

// dst = destination
const hasPath = (graph, source, dst) => {
    // path is exist between source and dst then return true
    if (source == dst) return true

    for (let neighbor of graph[source]) {
        if (hasPath(graph, neighbor, dst) == true) {
            return true;
        }
    }
    // after every iteration if there is no path then return false
    return false
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};
// hasPath(graph, 'f', 'k')   // true
console.log(hasPath(graph, 'f', 'k'))  