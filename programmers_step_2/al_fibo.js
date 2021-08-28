function fibonacci(n) {
    let result = [0, 1]
    const aux = (n) => {
        if(result[n] !== undefined) {
            return result[n]
        }
        result[n] = aux[n-1] + aux(n)
        return result[n]
    }
    return aux(n)
}