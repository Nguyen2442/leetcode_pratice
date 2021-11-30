var romanToInt = function (s) {
    let result = 0;
    let dictionary = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    

    
    for (let i = 0; i < s.length; i++){
        if (dictionary[s[i] + s[i + 1]]) {
            result = result + dictionary[s[i] + s[i + 1]];
            i++;
        } else {
            result = result + dictionary[s[i]];

        }
    }
    return result;
}
//res = 0 + I = 1 I , prev = 1,
//res = I + X = 9 IX, prev = 10,
//res = IX 9-5 = 4 , prev = 5,
var test = romanToInt("IXV")
console.log(test)