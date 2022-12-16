
const hasPath = (graph, src, dst) => {
    if(src == dst) return true

    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour, dst) == true){
            return true
        }
    }
}

const graph = {
    i: ['j', 'k'],
    j: ['i'],
    k: ['i', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
}
console.log(hasPath(graph, 'k', 'i'))

