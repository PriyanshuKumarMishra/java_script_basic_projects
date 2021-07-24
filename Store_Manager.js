function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    for (k of prices){
    for (i of prices){
        prices.push(Number(i)+increase)
        prices.shift()
        break
    }}
    console.log(prices)
    
}
