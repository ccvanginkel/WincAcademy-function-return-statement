const numberCheck = function(number) {
    if (number > 100) {
        return "true";
    }
    return "false";
};

const result = numberCheck(100);
console.log(result);

// it produces something

const bouncer = function(totMax, current, age) {
    if (totMax > 250) {
        return "it's to busy now, come back later";
        }
    if (age < 18) {
        return "this is a club for adults";
        }
    return "come in";
    };

const result2 = bouncer(250, 100, 18);
console.log(result2);

// it produces something

const gemiddelde = function(no1, no2, no3, no4, no5) {
    const avg = ((no1 + no2 + no3 +no4 +no5) / 5);
    return avg;
}

const result3 = gemiddelde(12,16,93,134,1251);
console.log(result3);

// console.log(Math.round(result3));

// it produces something