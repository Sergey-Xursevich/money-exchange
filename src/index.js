// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};

    if(currency <= 0) {
        return result;
    }

    if(currency >= 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }

    var coins = {"H" : 50, "Q" : 25, "D" : 10, "N" : 5, "P" : 1};

    for(property in coins) {
        var changeCurrency = Math.floor(currency / coins[property]);
        currency -= (coins[property] * changeCurrency);
        if(changeCurrency != 0) {
            result[property] = changeCurrency;
        } 
    }

    return result;
}
